import axios from '../config/axios';
export function registerApi(input) {
  return axios.post('/register', input);
}
export function registerGoogleApi(input) {
  return axios.post('/register/google', input);
}
export function loginApi(input) {
  return axios.post('/login', input);
}

export function getMe() {
  return axios.get('/users/me');
}
