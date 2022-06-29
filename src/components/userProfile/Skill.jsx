import { HiArrowNarrowRight } from 'react-icons/hi';
import { AiOutlinePlus, AiOutlineEdit } from 'react-icons/ai';
import SkillElement from './SkillElement';

export default function Skill(props) {
  const { isUser } = props;
  return (
    <div className="h-fit w-full sm:min-w-[636px] border-[1px] rounded-lg border-slate-200 bg-white">
      <div className="flex justify-between items-center px-5 py-3">
        <h1 className="font-bold">Skills</h1>
        <div className="flex gap-2">
          {isUser && (
            <>
              <div className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray">
                <AiOutlinePlus className="text-2xl" />
              </div>
              <div className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray">
                <AiOutlineEdit className="text-2xl" />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col w-full">
        <SkillElement />
        <SkillElement />
        <SkillElement />
        <SkillElement />
        {/* if experience more than six Showmore appear */}
        <button className="flex justify-center items-center gap-2 w-full hover:bg-gray border-t-[1px] border-gray transition-all py-3 font-bold text-darkgray">
          Show all 6 Skills <HiArrowNarrowRight className="text-xl" />
        </button>
      </div>
    </div>
  );
}
