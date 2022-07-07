import React, { useEffect, useState } from 'react';
import AddToYourFeed from '../Home/AddToYourFeed';
import { MdWork } from 'react-icons/md';
import { BiBuilding } from 'react-icons/bi';
import { FaPeopleArrows } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { getJobById } from '../../api/jobApi';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export default function JobsDetailPage() {
  dayjs.extend(relativeTime);
  const { jobId } = useParams();
  console.log(jobId);
  const [loading, setLoading] = useState(false);
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobById = async () => {
      try {
        setLoading(true);
        const res = await getJobById(jobId);
        setJob(res.data.job);
        console.log(res.data.job);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobById();
  }, []);

  return (
    <div className="relative top-14 bg-gray w-full sm:w-screen px-5 py-5 h-fit">
      <div className="h-full flex flex-col w-full sm:flex-row gap-5 mx-auto xl:w-[1128px] rounded-lg">
        {/* left section */}
        <div className="flex flex-col flex-auto w-full sm:min-w-[750px] rounded-lg gap-5">
          <div className="flex flex-col gap-4 px-5 py-4 h-fit w-full sm:min-w-[636px] border-[1px] rounded-lg border-slate-200 bg-white">
            <img
              className="inline-block h-12 w-12 sm:h-12 sm:w-12 cursor-pointer"
              src={job?.User.profilePic}
              alt=""
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold">{job?.position}</span>
              <span className="text-sm">
                {job?.User.CompanyDetails[0]?.companyName} {job?.User.province},
                {job?.User.country} ({job?.WorkEnviroment.workEnviromentType}){' '}
                {dayjs(job?.createdAt).fromNow()}
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <MdWork className="text-2xl text-darkgray" />
                <span className="text-sm">
                  {job?.JobType.jobTypeName.split(' ').join('-')} · Mid-Senior
                  level
                </span>
              </div>
              <div className="flex items-center gap-3">
                <BiBuilding className="text-2xl text-darkgray" />
                <span className="text-sm">
                  1,001-5,000 employees · Movies and Sound Recording
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaPeopleArrows className="text-2xl text-darkgray" />
                <span className="text-sm">2 connections · 1 school alumni</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button class="flex items-center gap-2 px-4 py-[8px] bg-blue hover:bg-sky-900 transition-all text-white rounded-full font-bold">
                <span>Apply</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  class="mercado-match"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4 px-5 py-6 h-fit w-full sm:min-w-[636px] border-[1px] rounded-lg border-slate-200 bg-white">
            <td dangerouslySetInnerHTML={{ __html: job?.jobDescription }} />
          </div>
        </div>
        {/* right section */}
        <div className="hidden lg:flex lg:flex-auto w-[320px] min-w-[320px] max-w-[320px]">
          <AddToYourFeed />
        </div>
      </div>
    </div>
  );
}
