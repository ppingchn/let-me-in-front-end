import axios from '../config/axios';

export function addExperience(
  companyName,
  position,
  yearStart,
  yearEnd,
  userId,
  workDescription,
) {
  return axios.post('/experience', {
    companyName,
    position,
    yearStart,
    yearEnd,
    userId,
    workDescription,
  });
}
