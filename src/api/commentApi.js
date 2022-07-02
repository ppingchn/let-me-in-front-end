import axios from '../config/axios';
export function createComment(input) {
  return axios.post('/comment', input);
}
export function editComment(postId, input) {
  return axios.put(`/comment/${postId}`, input);
}
export function deleteComment(postId) {
  return axios.delete(`/comment/${postId}`);
}
