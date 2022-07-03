import axios from '../config/axios';

export function getAllFriend(input) {
  console.log('/friends/' + input)
  return axios.get('/friends/' + input);
}
export function findFriendId(input) {
  return axios.get('/friends/' + input);
}
export function requestFriend(input) {
  return axios.post('/friends/'+ input);
}
export function updateFriend(input) {
  return axios.patch('/friends/' + input);
}
export function deleteFriend(input) {
  return axios.delete('/friends/' + input);
}
