import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function LeftSideJobs() {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <>
      <div className="h-fit w-full  border-b-[1px]  rounded-lg border-gray bg-white ">
        {/* My Jobs */}
        <div className="w-full flex flex-col ">
          <Link
            to="/jobs/myJobs"
            className="flex ml-5 text-gray-500 hover:bg-gray-200 py-2 mt-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z"></path>
            </svg>
            <span className="font-small ml-3">My Jobs</span>
          </Link>
        </div>
        {toggleShow ? (
          <>
            {/* Job alerts */}
            <div className="w-full flex flex-col ">
              <Link
                to="/myNetwork/contacts"
                className="flex ml-5 text-gray-500 hover:bg-gray-200 py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                </svg>
                <span className="font-small ml-3">Job alerts</span>
              </Link>
            </div>
            {/* Skill Assessments */}
            <div className="w-full flex flex-col ">
              <Link
                to="/myNetwork/peopleAndFollow"
                className="flex ml-5 text-gray-500 hover:bg-gray-200 py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M14.73 10H17l-5.5 8L8 14.5l1.34-1.34L11.21 15zM20 3v16a3 3 0 01-3 3H7a3 3 0 01-3-3V3h5.69l.52-1A2 2 0 0112 1a2 2 0 011.76 1l.52 1zm-2 2h-2.6l.6 1.1V7H8v-.9L8.6 5H6v14a1 1 0 001 1h10a1 1 0 001-1z"></path>
                </svg>
                <span className="font-small ml-3">Skill Assessments</span>
              </Link>
            </div>
            {/* Interview prep */}
            <div className="w-full flex flex-col ">
              <div className="flex ml-5 text-gray-500 hover:bg-gray-200 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z"></path>
                </svg>
                <span className="font-small ml-3">Interview prep</span>
              </div>
            </div>
            {/* Application settings */}
            <div className="w-full flex flex-col ">
              <Link
                to="/jobs/applicationSetting"
                className="flex ml-5 text-gray-500 hover:bg-gray-200 py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M9.18 2l-4.3 2.52L6.22 8l-.52.91-3.7.55v5l3.64.54.54.93-1.34 3.53L9.14 22l2.29-2.9h1.09l2.3 2.9 4.32-2.52L17.79 16l.53-.93 3.68-.53v-5L18.32 9l-.51-.9 1.36-3.51L14.86 2l-2.33 3h-1zM12 9a3 3 0 11-3 3 3 3 0 013-3z"></path>
                </svg>
                <span className="font-small ml-3">Application settings</span>
              </Link>
            </div>
          </>
        ) : null}
        {/* Show less */}
        <div className="w-full flex flex-col ">
          <div className=" text-gray-500 pb-2">
            <div
              className="flex items-center rounded-sm w-[7.8rem] ml-3 hover:bg-gray-200 px-2 pt-2 pb-1 "
              onClick={() => setToggleShow(!toggleShow)}
            >
              <span className="font-small ">
                {toggleShow ? 'Show less' : 'Show more'}
              </span>
              <div className="ml-2 text-[20px]">
                {toggleShow ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid">
        <Link
          to="/jobs/createJob"
          className="mt-3 flex items-center justify-center py-1.5 border text-blue text-sm leading-4 font-medium rounded-full shadow-sm  bg-white-600 hover:bg-hover-light-blue hover:border-2   focus:text-sky-900 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            className="mercado-match mr-2"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M19 12h2v6a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h6v2H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1zm4-8a2.91 2.91 0 01-.87 2l-8.94 9L7 17l2-6.14 9-9A3 3 0 0123 4zm-4 2.35L17.64 5l-7.22 7.22 1.35 1.34z"></path>
          </svg>
          <p> Post a free job</p>
        </Link>
      </div>
    </>
  );
}

export default LeftSideJobs;
