import AvatarWithNameTimePost from "../ui/AvatarWithNameTimePost";
import { TiThumbsUp } from "react-icons/ti";

export default function SharePostElement() {
  return (
    <div className="h-fit w-full flex flex-col gap-2 bg-white border-[1px] rounded-lg border-slate-200 py-3">
      <AvatarWithNameTimePost padding={4} />
      <span className="px-4">
        Who remembers this? 🙂
        <br />
        <br />
        <br />
        Credit: @techAmazing
      </span>
      <img
        src="https://media-exp1.licdn.com/dms/image/C5622AQFrI4paS9oNhg/feedshare-shrink_2048_1536/0/1655612102834?e=1658966400&v=beta&t=Ksdx44oeeRFldldABuhu_k5tbihip0PKNUmgFEYoTuQ"
        alt=""
        className="w-full cursor-pointer"
      />
      <div className="flex justify-between mx-4 pb-2 border-b-[1px] border-slate-200">
        <div className="flex gap-1 items-center">
          <div className="flex justify-center items-center w-4 h-4 rounded-full bg-blue">
            <TiThumbsUp className="text-white" />
          </div>
          <span className="text-sm font-medium text-darkgray cursor-pointer hover:text-blue hover:underline">
            91
          </span>
        </div>
        <div className="flex gap-1">
          <span className="text-sm text-darkgray cursor-pointer hover:text-blue hover:underline">
            1 comment
          </span>
          <span className="text-sm text-darkgray">•</span>
          <span className="text-sm text-darkgray cursor-pointer hover:text-blue hover:underline">
            1 share
          </span>
        </div>
      </div>
    </div>
  );
}
