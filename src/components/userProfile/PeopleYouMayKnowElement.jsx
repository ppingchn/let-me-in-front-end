import { FaBookmark } from 'react-icons/fa';

export default function PeopleYouMayKnowElement() {
  return (
    <div className="h-fit w-full sm:min-w-[230px] border-[1px] rounded-lg border-slate-200">
      {/* avatar */}
      <div className="flex flex-col h-fit w-full border-b-[1px] rounded-lg border-gray bg-white pb-3 gap-2">
        <div className="h-14 w-full rounded-t-lg bg-slate-400"></div>
        <div className="h-8 sm:h-12 w-full relative flex justify-center">
          <div className="absolute bottom-0 sm:bottom-2">
            <img
              className="inline-block h-20 w-20 sm:h-20 sm:w-20 rounded-full cursor-pointer border-2 border-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="w-full relative flex flex-col items-center px-3 gap-1">
          <span className="text-black font-medium">Tom Holland</span>
          <span className="text-center text-xs text-darkgray">
            My name is Kan. I previously work as a matchmove artist. Now my goal
            is being a web fullstack developer.
          </span>
        </div>
        <div className="w-full relative flex flex-col items-center px-3 gap-1">
          <button className="flex items-center w-full justify-center px-4 py-[3px] bg-white rounded-full transition-all hover:bg-gray text-blue border-[1px] border-blue font-medium">
            <span>Follow</span>
          </button>
        </div>
      </div>
    </div>
  );
}
