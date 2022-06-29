import { BsImageFill, BsFillCalendarDateFill } from 'react-icons/bs';
import { RiVideoFill } from 'react-icons/ri';
import { useAuth } from '../../context/authContext';

export default function CreatePost({ setOpenCreatePostModal }) {
  const { user } = useAuth();
  return (
    <div className="h-fit w-full flex flex-col gap-1 bg-white border-[1px] rounded-lg border-slate-200 px-4 py-3">
      <div className="flex h-12 gap-2">
        <img
          className="inline-block h-12 w-12 sm:h-12 sm:w-12 rounded-full cursor-pointer"
          src={user.profilePic}
          alt=""
        />
        <button
          className="w-full h-full px-5 border-[1px] bg-white hover:bg-gray border-darkgray text-darkgray text-left rounded-full text-sm font-medium transition-all"
          onClick={() => setOpenCreatePostModal(true)}
        >
          Start a post
        </button>
      </div>

      {/* upload image video panel */}
      {/* <div className="w-full grid grid-cols-4 gap-6 h-12 mb-1">
        <div className="flex hover:bg-gray h-full justify-center items-center rounded gap-4 cursor-pointer">
          <BsImageFill className="hidden sm:flex text-blue text-lg" />
          <span className="text-sm text-darkgray">Photo</span>
        </div>
        <div className="flex hover:bg-gray h-full justify-center items-center rounded gap-4 cursor-pointer">
          <RiVideoFill className="hidden sm:flex text-green-600 text-lg" />
          <span className="text-sm text-darkgray">Video</span>
        </div>
        <div className="flex hover:bg-gray h-full justify-center items-center rounded gap-4 cursor-pointer">
          <BsFillCalendarDateFill className="hidden sm:flex text-amber-600 text-lg" />
          <span className="text-sm text-darkgray">Event</span>
        </div>
        <div className="flex hover:bg-gray h-full justify-center items-center rounded gap-4 cursor-pointer">
          <BsImageFill className="hidden sm:flex text-blue text-lg" />
          <span className="text-sm text-darkgray">article</span>
        </div>
      </div> */}
    </div>
  );
}
