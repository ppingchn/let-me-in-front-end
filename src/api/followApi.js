import axios from '../config/axios';

export function getAllFollowing() {
  return axios.get('/follow/following');
}
export function getAllFollower() {
  return axios.get('/follow/follower');
}
export function createFollows(input) {
  console.log('/follow', input);
  return axios.post('/follow', input);
}
export function deleteFollows(input) {
  return axios.delete('/follow/' + input);
}
export function getFollowById(userId) {
  return axios.get(`/follow/${userId}`);
}
