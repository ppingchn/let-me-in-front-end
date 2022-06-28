import axios from '../config/axios';
export function registerApi(input) {
  return axios.post('/register', input);
}
export function loginApi(input) {
  return axios.post('/login', input);
}
