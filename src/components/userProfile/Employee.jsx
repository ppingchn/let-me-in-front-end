import { HiArrowNarrowDown } from "react-icons/hi";

export default function Employee({ employee }) {
  return (
    <div className="h-fit w-full sm:min-w-[636px] border-[1px] rounded-lg border-slate-200 bg-white">
      <div className="flex flex-col mx-5 py-3 gap-5 border-b-[1px] border-gray">
        {/* add number to employees */}
        <h1 className="font-bold">{`${employee} Employees`}</h1>
        <input
          type="search"
          className="rounded h-8 text-sm text-darkgray max-w-[400px]"
          placeholder="Search employees by title, keyword or school"
        />
      </div>
      <div className="flex flex-col w-full">
        <button className="flex justify-center items-center gap-2 w-full hover:bg-gray border-t-[1px] border-gray transition-all py-3 font-bold text-darkgray">
          Show more <HiArrowNarrowDown />
        </button>
      </div>
    </div>
  );
}
