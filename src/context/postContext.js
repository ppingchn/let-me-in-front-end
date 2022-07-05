import { createContext, useContext, useEffect, useState } from 'react';
import { createComment, deleteComment, editComment } from '../api/commentApi';
import {
  createLike,
  deleteLike,
  createLikeComment,
  deleteLikeComment,
} from '../api/likeApi';
import {
  fetchPost,
  createPost,
  updatePost,
  deletePost,
  fetchPostByPage,
} from '../api/postApi';
import { createReply, deleteReply, editReply } from '../api/replyApi';
import { useAuth } from './authContext';

const PostContext = createContext();

function PostContextProvider({ children }) {
  const { user } = useAuth();
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(0);
  const [limit] = useState(2);
  //Post function
  const fetchPostLimit = async () => {
    const resPost = await fetchPostByPage(page, limit);
    setPost([...post, ...resPost.data.posts]);
    setPage(resPost.data.nextPage);
  };

  const fetchAllPost = async () => {
    const resPost = await fetchPost();
    setPost(resPost.data.posts);
  };
  const createUserPost = async (input) => {
    await createPost(input);
    fetchAllPost();
  };
  const editUserPost = async (postId, input) => {
    await updatePost(postId, input);
    fetchAllPost();
  };
  const deleteUserPost = async (postId) => {
    await deletePost(postId);
    fetchAllPost();
  };
  // Comment function
  const createPostComment = async (input) => {
    await createComment(input);
    fetchAllPost();
  };
  const editPostComment = async (postId, input) => {
    await editComment(postId, input);
    fetchAllPost();
  };
  const deletePostComment = async (postId) => {
    await deleteComment(postId);
    fetchAllPost();
  };
  // Reply function
  const createReplyComment = async (input) => {
    await createReply(input);
    fetchAllPost();
  };
  const editReplyComment = async (replyId, input) => {
    await editReply(replyId, input);
    fetchAllPost();
  };
  const deleteReplyComment = async (replyId) => {
    await deleteReply(replyId);
    fetchAllPost();
  };
  // Like function
  const createLikePost = async (input) => {
    await createLike(input);
    fetchAllPost();
  };
  const deleteLikePost = async (postId) => {
    await deleteLike(postId);
    fetchAllPost();
  };
  // Like Comment function
  const createLikePostComment = async (input) => {
    await createLikeComment(input);
    fetchAllPost();
  };
  const deleteLikePostComment = async (commentId) => {
    await deleteLikeComment(commentId);
    fetchAllPost();
  };
  useEffect(() => {
    fetchPostLimit();
  }, [user]);
  return (
    <PostContext.Provider
      value={{
        post,
        limit,
        fetchAllPost,
        fetchPostLimit,
        createUserPost,
        editUserPost,
        deletePost,
        deleteUserPost,
        createPostComment,
        editPostComment,
        deletePostComment,
        createReplyComment,
        editReplyComment,
        deleteReplyComment,
        createLikePost,
        deleteLikePost,
        createLikePostComment,
        deleteLikePostComment,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

const usePost = () => {
  const ctx = useContext(PostContext);
  return ctx;
};

export default PostContextProvider;
export { usePost };
