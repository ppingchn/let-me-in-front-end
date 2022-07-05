import axios from '../config/axios';
export function fetchPost() {
  return axios.get(`/post/me`);
}
export function fetchPostByPage(page, limit) {
  return axios.get(`/post/postByPage?page=${page}&limit=${limit}`);
}
export function createPost(input) {
  return axios.post('/post', input);
}
export function updatePost(postId, input) {
  return axios.put(`/post/${postId}`, input);
}
export function deletePost(postId) {
  return axios.delete(`/post/${postId}`);
}
