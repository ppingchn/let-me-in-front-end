import axios from '../config/axios';

export function createFollow(companyId) {
  return axios.post('/follow', { companyId });
}

export function deleteFollow(companyId) {
  return axios.delete(`/follow/${companyId}`);
}

export function getFollowById(companyId) {
  return axios.get(`/follow/${companyId}`);
}
