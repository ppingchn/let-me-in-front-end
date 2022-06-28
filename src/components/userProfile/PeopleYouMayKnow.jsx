import { HiArrowNarrowDown } from "react-icons/hi";
import PeopleYouMayKnowElement from "./PeopleYouMayKnowElement";

export default function PeopleYouMayKnow({ employee }) {
  return (
    <div className="h-fit w-full sm:min-w-[636px] border-[1px] rounded-lg border-slate-200 bg-white">
      <div className="flex flex-col mx-5 py-3 gap-5 border-b-[1px] border-gray">
        {/* add number to employees */}
        <h1 className="font-bold">People you may know</h1>
        <div className="flex gap-5 w-full grid grid-cols-1 sm:grid-cols-3">
          <PeopleYouMayKnowElement />
          <PeopleYouMayKnowElement />
          <PeopleYouMayKnowElement />
          <PeopleYouMayKnowElement />
          <PeopleYouMayKnowElement />
        </div>
      </div>
    </div>
  );
}
