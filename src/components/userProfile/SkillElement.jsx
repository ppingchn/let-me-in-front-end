import { FaPeopleArrows } from "react-icons/fa";

export default function SkillElement() {
  return (
    <div className="flex flex-col w-11/12 gap-3 py-4 border-b-[1px] border-gray mx-5 p-2">
      {/* Skill Name */}
      <span className="font-bold">Adobe photoshop</span>
      {/* endorse number */}
      <div className="flex items-center gap-2">
        <FaPeopleArrows className="text-2xl" />
        <span className="">5 endorsements</span>
      </div>
      {/* button endorse */}
      <div className="w-24 h-7 px-3 border-[1px] hover:border-[2px] bg-white hover:bg-gray border-darkgray rounded-full transition-all cursor-pointer">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-sm text-darkgray font-bold">Endorse</span>
        </div>
      </div>
    </div>
  );
}
