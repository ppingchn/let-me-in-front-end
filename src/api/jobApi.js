import axios from '../config/axios';

export function createJobAlert(companyId) {
  return axios.post(`/job/createJobAlert/${companyId}`);
}

export function getJobAlertById(companyId) {
  return axios.get(`/job/getJobAlertById/${companyId}`);
}

export function createJob(
  position,
  jobDescription,
  jobTypeName,
  workEnviromentType,
) {
  return axios.post(`/jobList`, {
    position,
    jobDescription,
    jobTypeName,
    workEnviromentType,
  });
}
