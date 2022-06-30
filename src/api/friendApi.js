import axios from '../config/axios';


export function getAllFriend(input) {
  return axios.get('/friends', input);
}
export function findFriendId(input) {
  return axios.get('/friends/:requestToId', input);
}
export function requestFriend(input) {
  return axios.post('/friends', input);
}
export function updateFriend(input) {
  return axios.patch('/friends/:requestToId', input);
}
export function deleteFriend(input) {
  return axios.delete('/friends/:id', input);
}