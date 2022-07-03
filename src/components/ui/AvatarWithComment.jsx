import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useState } from 'react';
import { BiCheck, BiX } from 'react-icons/bi';
import { TiThumbsUp } from 'react-icons/ti';
import { useAuth } from '../../context/authContext';
import { usePost } from '../../context/postContext';
import EditComment from '../Comment/EditComment';
import ReplyPostComment from '../Comment/ReplyPostComment';
export default function AvatarWithComment({ data }) {
  dayjs.extend(relativeTime);
  const { user } = useAuth();
  const { editPostComment, createLikePostComment, deleteLikePostComment } =
    usePost();
  const [showReply, setShowReply] = useState(false);
  const [titleComment, setTitleComment] = useState(data.title);
  const [titleEdit, setTitleEdit] = useState(false);
  const isLike = data?.LikeComments.find((like) => like.userId === user.id);
  const handleEditComment = async () => {
    await editPostComment(data.id, { title: titleComment });
    setTitleEdit(false);
  };
  const handleLike = async (id) => {
    try {
      if (isLike) {
        await deleteLikePostComment(id);
      } else {
        await createLikePostComment({ commentId: id });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex gap-2">
      {/* avatar */}
      <img
        className="inline-block h-10 w-10 sm:h-10 sm:w-10 rounded-full cursor-pointer"
        src={data.User.profilePic}
        alt=""
      />
      {/* comment box */}
      <div className="flex flex-col w-full gap-1 rounded">
        <div className="flex flex-col w-full bg-gray rounded p-2 gap-2">
          {/* name and position */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <span className="font-bold py-0">{data.User.username}</span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-darkgray ">
                  {dayjs(data.updatedAt).fromNow()}
                </span>
                {user.id === data.User.id && (
                  <EditComment setOpenEdit={setTitleEdit} id={data.id} />
                )}
              </div>
            </div>
            {/* <span className="text-xs text-darkgray">
              Elected Member of Parliament, Thailand
            </span> */}
          </div>
          {titleEdit ? (
            <div className="">
              <form className="w-full flex">
                <input
                  type="text"
                  className="border-transparent w-full rounded-full focus:outline-none focus:border-none  focus:ring-0 active:ring-0 h-full"
                  placeholder="Add a comment..."
                  value={titleComment}
                  onChange={(e) => {
                    setTitleComment(e.target.value);
                  }}
                />
                <div className="flex">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleEditComment();
                    }}
                  >
                    <BiCheck size="30" />
                  </button>
                  <button
                    onClick={() => {
                      setTitleEdit(false);
                    }}
                  >
                    <BiX size="30" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <span className="text-sm">{data.title}</span>
          )}
        </div>
        <div className="flex gap-2">
          {isLike ? (
            <span
              className="text-xs text-blue cursor-pointer"
              onClick={() => {
                handleLike(data.id);
              }}
            >
              Like
            </span>
          ) : (
            <span
              className="text-xs text-darkgray cursor-pointer"
              onClick={() => {
                handleLike(data.id);
              }}
            >
              Like
            </span>
          )}
          <span className="text-xs text-blue cursor-default">•</span>
          {data.LikeComments.length > 0 && (
            <>
              <span className="text-xs text-darkgray cursor-default">
                {data.LikeComments.length}
              </span>
              <TiThumbsUp className="text-blue" />
            </>
          )}
          <span className="text-xs text-blue cursor-default">|</span>
          <span
            className="text-xs text-darkgray cursor-pointer"
            onClick={() => setShowReply(!showReply)}
          >
            Reply
          </span>
          {data.Replies.length > 0 && (
            <>
              <span className="text-xs text-darkgray">•</span>
              <span className="text-xs text-darkgray">
                {data.Replies.length} reply
              </span>
            </>
          )}
        </div>
        {showReply && <ReplyPostComment data={data.Replies} id={data.id} />}
      </div>
    </div>
  );
}
