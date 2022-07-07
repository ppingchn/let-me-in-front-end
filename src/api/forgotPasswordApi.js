import axios from '../config/axios';
export function forgotPasswordApi(input) {
  return axios.post('/sendEmail', input);
}
export function changePasswordApi(input) {
  return axios.post('/sendEmail/changePassword', input);
}