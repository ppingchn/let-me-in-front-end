import React, { useState } from 'react';
import { MdNotificationsNone, MdCheck } from 'react-icons/md';
import { createJobAlert } from '../../api/jobApi';

export default function CreateJobAlert({ userId, companyName }) {
  const [jobAlert, setJobAlert] = useState(false);

  const handleTogglejobAlert = async () => {
    try {
      setJobAlert(!jobAlert);
      await createJobAlert(userId);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-fit w-full sm:min-w-[636px] border-[1px] rounded-lg border-slate-200 bg-white">
      <div className="flex justify-between items-center px-5 py-3">
        <div className="flex gap-2 items-center max-w-[400px]">
          <MdNotificationsNone className="text-2xl" />
          <div className="flex flex-col">
            <h1 className="hidden sm:flex font-medium">{`Create job alert for ${companyName}`}</h1>
            <span className="hidden sm:flex">{`Get notified when ${companyName} posts new jobs that match your interest.`}</span>
          </div>
        </div>
        <div className="flex gap-2">
          {jobAlert ? (
            <button
              className="flex gap-2 items-center w-fit h-fit px-5 py-[5px] transition-all bg-darkgray rounded-full transition-all hover:text-gray text-white border-[1px] font-bold"
              onClick={handleTogglejobAlert}
            >
              <MdCheck className="text-2xl font-bold" />
              <span>Created alert</span>
            </button>
          ) : (
            <button
              className="flex gap-2 items-center w-fit h-fit px-5 py-[5px] transition-all bg-white rounded-full transition-all hover:bg-gray text-darkgray border-[1px] font-bold"
              onClick={handleTogglejobAlert}
            >
              <span>Create job alert</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
