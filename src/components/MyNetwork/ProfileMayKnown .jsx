import { FaBookmark } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function ProfileMayKnown() {
  return (
    <div className="h-fit w-full sm:w-[200px] lg:w-[230px]  border-[1px] rounded-lg border-slate-200">
      {/* avatar */}
      <div className="h-fit w-full border-b-[1px] rounded-t-lg border-gray bg-white pb-3">
        <div className="h-14 w-full rounded-t-lg bg-slate-400 flex justify-end ">
          <div className="mt-1 mr-1 h-8 w-8 rounded-full  bg-slate-800 flex justify-center items-center text-xl text-white">
            <IoClose />
          </div>
        </div>
        <div className="h-14 w-full relative flex justify-center">
          <div className="absolute sm:bottom-4">
            <img
              class="inline-block h-14 w-14 sm:h-20 sm:w-20 rounded-full cursor-pointer border-2 border-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="w-full relative flex flex-col items-center px-3 gap-1">
          <span className="text-black font-medium">Tom Holland</span>
          <span className="text-center text-xs text-darkgray">
            Front-end at CodeCamp Thailand
          </span>

          <div className="mt-2 text-center text-darkgray">
            <img
              class="inline-block h-8 w-8 sm:h-8 sm:w-8 rounded-full cursor-pointer border-2 border-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span className="text-xs">CodeCamp Thailand</span>
          </div>

          <button
            type="button"
            className="inline-flex items-center px-16 py-1.5 border text-blue text-sm leading-4 font-medium rounded-full shadow-sm  bg-white-600 hover:bg-hover-light-blue hover:border-2   focus:text-sky-900 "
          >
            Accept
          </button>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default ProfileMayKnown;