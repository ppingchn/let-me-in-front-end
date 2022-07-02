import axios from '../config/axios';
export function createReply(input) {
  return axios.post('/repliesComment', input);
}
export function editReply(replyId, input) {
  return axios.put(`/repliesComment/${replyId}`, input);
}
export function deleteReply(replyId) {
  return axios.delete(`/repliesComment/${replyId}`);
}
