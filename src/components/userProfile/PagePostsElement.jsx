import { TiThumbsUp } from "react-icons/ti";
import { BiCommentDetail, BiShare } from "react-icons/bi";
import { RiSendPlaneLine } from "react-icons/ri";
import { BsEmojiSmile, BsImageFill } from "react-icons/bs";

import { useState } from "react";
import ModalLikeList from "../Home/ModalLikeList";
import ModalSharePostList from "../Home/ModalSharePostList";
import AvatarWithNameTimePost from "../ui/AvatarWithNameTimePost";
import AvatarWithComment from "../ui/AvatarWithComment";

export default function PagePostsElement() {
  const [openLikeListModal, setOpenLikeListModal] = useState(false);
  const [openShareListModal, setOpenShareListModal] = useState(false);
  return (
    <div className="h-fit min-w-[350px] max-w-[400px] flex flex-col gap-2 bg-white border-[1px] rounded-lg border-slate-200 py-5">
      <ModalLikeList open={openLikeListModal} setOpen={setOpenLikeListModal} />
      <ModalSharePostList
        open={openShareListModal}
        setOpen={setOpenShareListModal}
      />
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
          <span
            className="text-sm font-medium text-darkgray cursor-pointer hover:text-blue hover:underline"
            onClick={() => setOpenLikeListModal(true)}
          >
            91
          </span>
        </div>
        <div className="flex gap-1">
          <span className="text-sm text-darkgray cursor-pointer hover:text-blue hover:underline">
            1 comment
          </span>
          <span className="text-sm text-darkgray">•</span>
          <span
            className="text-sm text-darkgray cursor-pointer hover:text-blue hover:underline"
            onClick={() => {
              setOpenShareListModal(true);
            }}
          >
            1 share
          </span>
        </div>
      </div>
      <div className="w-full grid grid-cols-4 gap-6 h-8 mb-1 px-4">
        <div className="flex flex-col hover:bg-gray h-full justify-center items-center rounded cursor-pointer">
          <TiThumbsUp className="hidden sm:flex text-darkgray text-xl" />
          <span className="text-darkgray">Like</span>
        </div>
        <div className="flex flex-col hover:bg-gray h-full justify-center items-center rounded cursor-pointer">
          <BiCommentDetail className="hidden sm:flex text-darkgray text-xl" />
          <span className="text-darkgray">Comment</span>
        </div>
        <div className="flex flex-col hover:bg-gray h-full justify-center items-center rounded cursor-pointer">
          <BiShare className="hidden sm:flex text-darkgray text-xl" />
          <span className="text-darkgray">Share</span>
        </div>
        <div className="flex flex-col hover:bg-gray h-full justify-center items-center rounded cursor-pointer">
          <RiSendPlaneLine className="hidden sm:flex text-darkgray text-xl" />
          <span className="text-darkgray">Send</span>
        </div>
      </div>
    </div>
  );
}
