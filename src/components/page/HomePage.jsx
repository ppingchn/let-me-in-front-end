import Profile from "../Home/Profile";
import ModalCreatePost from "../Home/ModalCreatePost";
import { useState } from "react";
import AddToYourFeed from "../Home/AddToYourFeed";
import CreatePost from "../Home/CreatePost";
import AvatarWithNameTimePost from "../ui/AvatarWithNameTimePost";
import { TiThumbsUp } from "react-icons/ti";
import { BiCommentDetail, BiShare } from "react-icons/bi";
import { RiSendPlaneLine } from "react-icons/ri";
import { BsEmojiSmile, BsImageFill } from "react-icons/bs";
import AvatarWithComment from "../ui/AvatarWithComment";
import ModalLikeList from "../Home/ModalLikeList";
import ModalSharePostList from "../Home/ModalSharePostList";

export default function HomePage() {
  const [openCreatePostModal, setOpenCreatePostModal] = useState(false);
  const [openLikeListModal, setOpenLikeListModal] = useState(false);
  const [openShareListModal, setOpenShareListModal] = useState(false);

  return (
    <div className="relative top-14 bg-gray w-full sm:w-screen px-5 py-5 h-fit">
      <ModalCreatePost
        open={openCreatePostModal}
        setOpen={setOpenCreatePostModal}
      />
      <ModalLikeList open={openLikeListModal} setOpen={setOpenLikeListModal} />
      <ModalSharePostList
        open={openShareListModal}
        setOpen={setOpenShareListModal}
      />
      <div className="h-full flex flex-col w-full sm:flex-row gap-5 mx-auto xl:w-[1128px] rounded-lg">
        {/* left section */}
        <div className="flex-auto w-full sm:w-56 rounded-lg gap-5">
          {/* profile */}
          <div className="flex flex-col gap-5 md:sticky md:top-16">
            <Profile />
            <Profile />
          </div>
        </div>

        {/* middle section */}
        <div className="flex flex-col flex-auto w-full sm:w-[540px] gap-5">
          {/* start post */}
          <CreatePost setOpenCreatePostModal={setOpenCreatePostModal} />
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
            <div className="w-full grid grid-cols-4 gap-6 h-12 mb-1 px-4">
              <div className="flex hover:bg-gray h-full justify-center items-center rounded gap-1 cursor-pointer">
                <TiThumbsUp className="hidden sm:flex text-darkgray text-2xl" />
                <span className="text-darkgray">Like</span>
              </div>
              <div className="flex hover:bg-gray h-full justify-center items-center rounded gap-1 cursor-pointer">
                <BiCommentDetail className="hidden sm:flex text-darkgray text-2xl" />
                <span className="text-darkgray">Comment</span>
              </div>
              <div className="flex hover:bg-gray h-full justify-center items-center rounded gap-1 cursor-pointer">
                <BiShare className="hidden sm:flex text-darkgray text-2xl" />
                <span className="text-darkgray">Share</span>
              </div>
              <div className="flex hover:bg-gray h-full justify-center items-center rounded gap-1 cursor-pointer">
                <RiSendPlaneLine className="hidden sm:flex text-darkgray text-2xl" />
                <span className="text-darkgray">Send</span>
              </div>
            </div>
            <div className="w-full h-10 mb-1 px-4">
              <div className="flex h-full gap-1">
                <img
                  class="inline-block h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="w-full h-full px-3 border-[1px] bg-white border-darkgray rounded-full transition-all">
                  <div className="w-full h-full flex items-center justify-between">
                    <input
                      type="text"
                      className="border-transparent focus:outline-none w-10/12 h-full"
                      placeholder="Add a comment..."
                    />
                    <div className="flex gap-1">
                      <div className="w-9 h-9 rounded-full hover:bg-gray flex justify-center items-center transition-all">
                        <BsEmojiSmile className="text-lg text-darkgray" />
                      </div>
                      <div className="w-9 h-9 rounded-full hover:bg-gray flex justify-center items-center transition-all">
                        <BsImageFill className="text-lg text-darkgray" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4">
              <AvatarWithComment />
            </div>
          </div>
        </div>

        {/* right section */}
        <div className="hidden lg:flex lg:flex-auto w-[320px] min-w-[320px] max-w-[320px]">
          <AddToYourFeed />
        </div>
      </div>
    </div>
  );
}
