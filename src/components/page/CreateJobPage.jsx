import React, { useState } from 'react';
import RichTextEditor from '../SlateEditor/Draft';
import validator from 'validator';
import { RiErrorWarningFill } from 'react-icons/ri';
import { createJob } from '../../api/jobApi';
import { useNavigate } from 'react-router-dom';

export default function CreateJobPage() {
  const navigate = useNavigate();
  const [jobDescription, setJobDescription] = useState('');
  const [error, setError] = useState({});
  const [position, setPosition] = useState('');
  const [jobType, setJobType] = useState('');
  const [workEnvironment, setWorkEnvironment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let error = {};

    if (validator.isEmpty(position + '')) {
      error.position = 'Position is required';
    }
    if (validator.isEmpty(jobType + '')) {
      error.jobType = 'Job Type is required';
    }
    if (validator.isEmpty(jobDescription + '')) {
      error.jobDescription = 'Job description is required';
    }
    if (validator.isEmpty(workEnvironment + '')) {
      error.workEnvironment = 'Onsite Or Remote is required';
    }
    setError({ ...error });

    if (Object.keys(error).length === 0) {
      console.log('no error');
      await createJob(position, jobDescription, jobType, workEnvironment);
      navigate('/jobs');
      // await addExperience(
      //   companyArray[0].companyName,
      //   companyArray[0].position,
      //   companyArray[0].startDate,
      //   companyArray[0].endDate,
      //   id,
      //   companyArray[0].workDescription,
      // );
    }
  };

  return (
    <div className="relative top-14 bg-gray w-full sm:w-screen px-5 py-5 h-fit">
      <div className="h-full flex flex-col w-full sm:flex-row gap-5 mx-auto xl:w-[1128px] rounded-lg">
        <div className="flex-auto w-full sm:w-56 rounded-lg gap-5">
          <div className="h-fit w-full flex flex-col gap-3 bg-white border-[1px] rounded-lg border-slate-200 px-4 py-3">
            <div className="flex px-4 sm:px-6 py-3 justify-between rounded-t-lg items-center border-b-[1px] border-gray">
              <span className="text-2xl">Create job</span>
            </div>

            <div className="flex px-4 sm:px-6 flex-col w-full">
              <span>Position *</span>
              <input
                name="position"
                className="w-full h-9 focus:outline-none border-[1px] border-darkgray text-sm px-3 py-1 rounded-lg"
                placeholder="Ex: Retail Sales Manager"
                onChange={(e) => setPosition(e.target.value)}
              />
              {error.position && (
                <span className="flex gap-1 items-center text-redNotification">
                  <RiErrorWarningFill />
                  {error.position}
                </span>
              )}
            </div>
            <div className="flex px-4 sm:px-6 flex-col w-full">
              <span>jobType *</span>
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                onChange={(e) => setJobType(e.target.value)}
                className="max-w-lg block focus:ring-blue focus:border-blue w-full sm:max-w-xs sm:text-sm border-darkgray rounded-lg"
              >
                <option value="" selected disabled hidden>
                  Job type
                </option>
                <option value="Full time">Full time</option>
                <option value="Part time">Part time</option>
              </select>
              {error.jobType && (
                <span className="flex gap-1 items-center text-redNotification">
                  <RiErrorWarningFill />
                  {error.jobType}
                </span>
              )}
            </div>
            <div className="flex px-4 sm:px-6 flex-col w-full">
              <span>workEnvironment *</span>
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                onChange={(e) => setWorkEnvironment(e.target.value)}
                className="max-w-lg block focus:ring-blue focus:border-blue w-full sm:max-w-xs sm:text-sm border-darkgray rounded-lg"
              >
                <option value="" selected disabled hidden>
                  Select work environment
                </option>
                <option value="On-site">On-site</option>
                <option value="Remote">Remote</option>
              </select>
              {error.workEnvironment && (
                <span className="flex gap-1 items-center text-redNotification">
                  <RiErrorWarningFill />
                  {error.workEnvironment}
                </span>
              )}
            </div>

            <div className="relative px-4 sm:px-6 prose max-w-none w-full flex flex-col gap-2">
              <span>Job description *</span>
              <RichTextEditor initialValue="" getValue={setJobDescription} />
              {error.jobDescription && (
                <span className="flex gap-1 items-center text-redNotification">
                  <RiErrorWarningFill />
                  {error.jobDescription}
                </span>
              )}
            </div>
            <div className="flex px-4 sm:px-6 py-3 justify-end rounded-t-lg items-center border-t-[1px] border-gray">
              <button
                className="flex items-center mb-5 px-4 py-[5px] bg-blue hover:bg-sky-900 transition-all text-white rounded-full font-bold"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
