import AvatarWithComment from '../ui/AvatarWithComment';
import AvatarWithNameTimePost from '../ui/AvatarWithNameTimePost';
import { TiThumbsUp } from 'react-icons/ti';
import { BiCommentDetail, BiShare } from 'react-icons/bi';
import { RiSendPlaneLine } from 'react-icons/ri';
import { BsEmojiSmile, BsImageFill, BsThreeDots } from 'react-icons/bs';
import ModalLikeList from './ModalLikeList';
import ModalSharePostList from './ModalSharePostList';
import { useRef, useState } from 'react';
import { IoMdClose } from 'react-icons/io';

export default function Post({ data }) {
  const [openLikeListModal, setOpenLikeListModal] = useState(false);
  const [openShareListModal, setOpenShareListModal] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState('');
  const [image, setImage] = useState(null);

  const uploadImage = useRef(null);

  const handleAddImage = (e) => {
    if (e.target.files[0]) {
      const urlImage = URL.createObjectURL(e.target.files[0]);
      setImage(urlImage);
    }
  };

  const handleLike = () => {
    setLike(!like);
  };

  const submitComment = (e) => {
    e.preventDefault();
    console.log(`submit ${comment}`);
    setComment('');
  };

  return (
    <div className="h-fit w-full flex flex-col gap-2 bg-white border-[1px] rounded-lg border-slate-200 py-3">
      <ModalLikeList open={openLikeListModal} setOpen={setOpenLikeListModal} />
      <ModalSharePostList
        open={openShareListModal}
        setOpen={setOpenShareListModal}
      />
      <div className="flex justify-between items-center px-4">
        <AvatarWithNameTimePost
          username={data.User.username}
          profilePic={data.User.profilePic}
        />

        <BsThreeDots />
      </div>
      <p className="px-4 whitespace-pre">
        {/* Who remembers this? 🙂
        <br />
        <br />
        <br />
        Credit: @techAmazing */}
        {data.detail}
      </p>
      <div className="flex flex-col gap-2">
        <div className=" grid grid-cols-1 gap-2 px-4">
          {data?.PostPictures?.map((el, idx) => (
            <img
              key={idx}
              src={el.postPic}
              alt=""
              className="w-auto aspect-auto object-center object-cover cursor-pointer h-[200px]"
            />
          ))}
        </div>
      </div>
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
          <span
            className="text-sm text-darkgray cursor-pointer hover:text-blue hover:underline"
            onClick={() => setShowComment(!showComment)}
          >
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
        <div
          className="flex hover:bg-gray h-full justify-center items-center rounded gap-1 cursor-pointer"
          onClick={() => handleLike()}
        >
          {like ? (
            <>
              <TiThumbsUp className="hidden sm:flex text-blue text-2xl" />
              <span className="text-blue">Like</span>
            </>
          ) : (
            <>
              <TiThumbsUp className="hidden sm:flex text-darkgray text-2xl" />
              <span className="text-darkgray">Like</span>
            </>
          )}
        </div>
        <div
          className="flex hover:bg-gray h-full justify-center items-center rounded gap-1 cursor-pointer"
          onClick={() => setShowComment(!showComment)}
        >
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

      {showComment && (
        <>
          <div className="w-full h-fit mb-1 px-4">
            <div className="flex h-full gap-1">
              <img
                class="inline-block h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="flex flex-col w-full h-full px-3 border-[1px] bg-white border-darkgray rounded-xl transition-all">
                <div className="w-full h-full flex items-center justify-between">
                  <form onSubmit={submitComment} className="w-full">
                    <input
                      type="text"
                      className="border-transparent w-full rounded-full focus:outline-none focus:border-none  focus:ring-0 active:ring-0 h-full"
                      placeholder="Add a comment..."
                      value={comment}
                      onChange={(e) => {
                        setComment(e.target.value);
                      }}
                    />
                  </form>
                  <div className="flex gap-1">
                    <div className="w-9 h-9 rounded-full hover:bg-gray flex justify-center items-center transition-all">
                      <BsEmojiSmile className="text-lg text-darkgray" />
                    </div>
                    <div
                      className="w-9 h-9 rounded-full hover:bg-gray flex justify-center items-center transition-all"
                      onClick={() => uploadImage.current.click()}
                    >
                      <input
                        type="file"
                        ref={uploadImage}
                        className="hidden"
                        onChange={handleAddImage}
                      />
                      <BsImageFill className="text-lg text-darkgray" />
                    </div>
                  </div>
                </div>
                {image && (
                  <div className="relative px-4 py-2 border-t-[1px]">
                    <div className="absolute top-0 right-0">
                      <div
                        className="h-8 w-8 rounded-full mr-5 mt-3 bg-white transition-all hover:bg-gray flex justify-center items-center text-xl"
                        onClick={() => {
                          setImage(null);
                        }}
                      >
                        <IoMdClose />
                      </div>
                    </div>
                    <img src={image} alt="imageUpload" />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="px-4">
            <AvatarWithComment />
          </div>
        </>
      )}
    </div>
  );
}
