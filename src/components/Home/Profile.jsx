import { FaBookmark } from 'react-icons/fa';
import { useAuth } from '../../context/authContext';

export default function Profile() {
  const { user } = useAuth();
  return (
    <div className="h-fit w-full sm:min-w-[230px] sm:max-w-[233px] border-[1px] rounded-lg border-slate-200">
      {/* avatar */}
      <div className="h-fit w-full border-b-[1px] rounded-t-lg border-gray bg-white pb-3">
        <div className="h-14 w-full rounded-t-lg bg-slate-400"></div>
        <div className="h-14 w-full relative flex justify-center">
          <div className="absolute sm:bottom-4">
            <img
              className="inline-block h-14 w-14 sm:h-20 sm:w-20 rounded-full cursor-pointer border-2 border-white"
              src={user.profilePic}
              alt=""
            />
          </div>
        </div>
        <div className="w-full relative flex flex-col items-center px-3 gap-1">
          <span className="text-black font-medium">{user.username}</span>
          <span className="text-center text-xs text-darkgray">
            My name is Kan. I previously work as a matchmove artist. Now my goal
            is being a web fullstack developer.
          </span>
        </div>
      </div>
      <div className="h-fit w-full border-b-[1px] border-gray bg-white py-3">
        <div className="w-full hover:bg-gray flex flex-col py-1">
          <div className="flex justify-between">
            <span className="px-3 text-darkgray text-xs">Connections</span>
            <span className="px-3 text-blue text-xs font-medium">1000</span>
          </div>
          <span className="px-3 text-black text-xs font-medium">
            Grow your network
          </span>
        </div>
        <div className="w-full hover:bg-gray flex flex-col py-1">
          <div className="flex justify-between">
            <span className="px-3 text-darkgray text-xs">Invitation</span>
            <span className="px-3 text-blue text-xs font-medium">200</span>
          </div>
        </div>
      </div>
      <div className="h-fit w-full bg-white py-3 hover:bg-gray rounded-b-lg">
        <div className="w-full flex flex-col py-1">
          <div className="flex items-center">
            <span className="pl-3 text-darkgray text-xs">
              <FaBookmark />
            </span>
            <span className="px-3 text-black text-xs font-medium">
              My items
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
