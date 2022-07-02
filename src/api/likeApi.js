import axios from '../config/axios';

export function createLike(input) {
  return axios.post('/like', input);
}
export function deleteLike(postId) {
  return axios.delete(`/like/posts/${postId}`);
}
export function createLikeComment(input) {
  return axios.post('/likeComment', input);
}
export function deleteLikeComment(commentId) {
  return axios.delete(`/likeComment/comment/${commentId}`);
}
