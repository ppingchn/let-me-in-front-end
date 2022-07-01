import { createContext, useContext, useEffect, useState } from 'react';
import { fetchPost, createPost, updatePost } from '../api/postApi';
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
  useEffect(() => {
    fetchAllPost();
  }, [user]);
  return (
    <PostContext.Provider value={{ post, createUserPost, editUserPost }}>
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
