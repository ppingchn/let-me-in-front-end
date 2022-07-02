import { useState } from 'react';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import dayjs from 'dayjs';

export default function RecentlyPostedJobsElement({
  position,
  companyName,
  address,
  date,
}) {
  const [bookMark, setBookMark] = useState(false);

  const now = dayjs();
  const dateFormat = dayjs(date);
  const dateDiff = now.diff(dateFormat, 'day');

  return (
    <div className="flex flex-col min-h-[240px] min-w-[200px] justify-between gap-4 border-[1px] mx-2 rounded p-3 border-gray cursor-pointer">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <img
            className="inline-block h-16 w-16 sm:h-16 sm:w-16 cursor-pointer"
            s
            src="https://media-exp1.licdn.com/dms/image/C560BAQEn3FvAF4Gpjg/company-logo_200_200/0/1654087026909?e=1664409600&v=beta&t=NTO3cCLbdpI5Q7OLiSHPusrPeo5BiJFNhjv9iYQYsYA"
            alt=""
          />
          <div
            className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray transition-all cursor-pointer"
            onClick={() => setBookMark(!bookMark)}
          >
            {bookMark ? (
              <BsBookmarkFill className="text-xl text-darkgray" />
            ) : (
              <BsBookmark className="text-xl" />
            )}
          </div>
        </div>
        <div className="flex flex-col">
          {/* position */}
          <span className="font-bold">{position}</span>
          <span className="text-sm text-darkgray leading-4">{companyName}</span>
          <span className="text-sm text-darkgray font-light">{address}</span>
        </div>
      </div>
      <span className="text-sm text-darkgray font-light">
        {`${dateDiff} days ago`}
      </span>
    </div>
  );
}
