import axios from '../config/axios';

export function getAllFriend(input) {
  // console.log('/friends/' + input)
  return axios.get('/friends/' + input);
}
export function getAllUserByLetter(input) {
  console.log(input);
  console.log('/friends/allUserByLetter?' + input);
  return axios.get('/friends/allUserByLetter?' + input);
}
export function findFriendId(input) {
  return axios.get('/friends/' + input);
}
export function requestFriend(input) {
  return axios.post('/friends/' + input);
}
export function updateFriend(input) {
  return axios.patch('/friends/' + input);
}
export function deleteFriend(input) {
  console.log('/friends/' + input);
  return axios.delete('/friends/' + input);
}
