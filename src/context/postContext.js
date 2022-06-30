import { createContext, useContext, useEffect, useState } from 'react';
import { fetchPost, createPost } from '../api/postApi';

const PostContext = createContext();

function PostContextProvider({ children }) {
  const [post, setPost] = useState(null);
  const fetchAllPost = async () => {
    const resPost = await fetchPost();
    setPost(resPost.data.posts);
  };
  const createUserPost = async (input) => {
    await createPost(input);
    fetchAllPost();
  };
  useEffect(() => {
    fetchAllPost();
  }, []);
  return (
    <PostContext.Provider value={{ post, createUserPost }}>
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
