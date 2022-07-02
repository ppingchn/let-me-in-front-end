import axios from '../config/axios';

export function createJobAlert(companyId) {
  return axios.post(`/job/createJobAlert/${companyId}`);
}
