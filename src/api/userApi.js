import axios from '../config/axios';

export function getUserById(userId) {
  return axios.get(`/users/${userId}`);
}

export function getExperience(id) {
  return axios.get(`/experience/${id}`);
}

export function deleteExperience(id) {
  return axios.delete(`/experience/${id}`);
}

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

export function editExperience(
  companyName,
  position,
  yearStart,
  yearEnd,
  experienceId,
  workDescription,
) {
  return axios.put(`/experience/${experienceId}`, {
    companyName,
    position,
    yearStart,
    yearEnd,
    workDescription,
  });
}

export function getEducation(id) {
  return axios.get(`/education/${id}`);
}
export function addEducation(degree, university, field, yearStart, yearEnd) {
  return axios.post('/education', {
    degree,
    university,
    field,
    yearStart,
    yearEnd,
  });
}
export function editEducation(
  degree,
  university,
  field,
  yearStart,
  yearEnd,
  id,
) {
  return axios.put(`/education/${id}`, {
    degree,
    university,
    field,
    yearStart,
    yearEnd,
  });
}

export function deleteEducation(id) {
  return axios.delete(`/education/${id}`);
}

export function getCompanyByLetter(letter) {
  return axios.get(`/users/companyByLetter/${letter}`);
}

export function uploadCoverImage(coverImage) {
  return axios.put('/users/coverImage', coverImage);
}
