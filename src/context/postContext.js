import { createContext, useContext, useEffect, useState } from 'react';
import { createComment, deleteComment, editComment } from '../api/commentApi';
import { fetchPost, createPost, updatePost, deletePost } from '../api/postApi';
import { useAuth } from './authContext';

const PostContext = createContext();

function PostContextProvider({ children }) {
  const { user } = useAuth();
  const [post, setPost] = useState(null);
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
  useEffect(() => {
    fetchAllPost();
  }, [user]);
  return (
    <PostContext.Provider
      value={{
        post,
        createUserPost,
        editUserPost,
        deletePost,
        deleteUserPost,
        createPostComment,
        editPostComment,
        deletePostComment,
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
