import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { FaGlobeAsia } from 'react-icons/fa';

export default function AvatarWithNameTimePost({
  padding,
  username,
  time,
  profilePic,
}) {
  dayjs.extend(relativeTime);

  return (
    <div
      className={`flex items-center gap-2 ${
        padding ? `px-${padding}` : `px-0`
      }`}
    >
      <img
        className="inline-block h-12 w-12 sm:h-12 sm:w-12 rounded-full cursor-pointer"
        src={profilePic}
        alt=""
      />
      <div className="flex flex-col">
        <span className="font-bold text-xs hover:underline hover:text-blue">
          {username}
        </span>
        {/* <span className="text-xs text-darkgray">
          Elected Member of Parliament, Thailand
        </span> */}
        <div className="flex gap-1 items-center">
          <span className="text-xs text-darkgray">{dayjs(time).fromNow()}</span>
          <span className="text-xs text-darkgray">•</span>
          <FaGlobeAsia className="text-darkgray text-sm" />
        </div>
      </div>
    </div>
  );
}
