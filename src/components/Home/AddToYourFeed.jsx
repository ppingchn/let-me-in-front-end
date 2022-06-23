import { BiHelpCircle } from "react-icons/bi";
import { HiArrowNarrowRight } from "react-icons/hi";

import AvatarWithNameFollow from "../ui/AvatarWithNameFollow";

export default function AddToYourFeed() {
  return (
    <div className="flex flex-col md:sticky md:top-16 gap-4 h-fit w-full sm:min-w-[230px] border-[1px] rounded-lg border-slate-200 bg-white py-3 px-3">
      <div className="flex justify-between items-center">
        <h1>Add to your feed</h1>
        <BiHelpCircle className="cursor-pointer" />
      </div>
      <div className="flex flex-col gap-3">
        <AvatarWithNameFollow />
        <AvatarWithNameFollow />
        <AvatarWithNameFollow />
      </div>
      <div>
        <button className="flex items-center gap-2 px-2 py-2 hover:bg-gray text-sm text-darkgray rounded font-medium">
          <span>View all recommendations</span>
          <HiArrowNarrowRight />
        </button>
      </div>
    </div>
  );
}
