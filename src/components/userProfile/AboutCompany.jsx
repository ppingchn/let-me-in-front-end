import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineEdit } from 'react-icons/ai';

export default function AboutCompany({ overview, setMenuSelect }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="h-fit w-full sm:min-w-[636px] border-[1px] rounded-lg border-slate-200 bg-white">
      <div className="flex justify-between items-center px-5 py-5">
        <h1 className="font-bold">About</h1>
      </div>
      <div className="flex flex-col items-start px-5 py-3">
        <>
          {/* <span
            dangerouslySetInnerHTML={{
              __html: showMore ? overview : overview.slice(0, 200) + '...',
            }}
          /> */}
          <span
            dangerouslySetInnerHTML={{
              __html: showMore ? overview : overview + '...',
            }}
          />

          <span
            className="w-full flex justify-end text-darkgray font-bold cursor-pointer hover:underline"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? `show less` : `show more`}
          </span>
        </>
      </div>
      <div className="flex flex-col w-full">
        {/* if experience more than six Showmore appear */}
        <button
          className="flex justify-center items-center gap-2 w-full hover:bg-gray border-t-[1px] border-gray transition-all py-3 font-bold text-darkgray"
          onClick={() => setMenuSelect('About')}
        >
          See all details
        </button>
      </div>
    </div>
  );
}
