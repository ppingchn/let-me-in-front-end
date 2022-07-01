import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useState } from 'react';
import { BiCheck, BiX } from 'react-icons/bi';
import { useAuth } from '../../context/authContext';
import { usePost } from '../../context/postContext';
import EditComment from '../Comment/EditComment';
export default function AvatarWithComment({ data }) {
  dayjs.extend(relativeTime);
  const { user } = useAuth();
  const { editPostComment } = usePost();
  const [titleComment, setTitleComment] = useState(data.title);
  const [titleEdit, setTitleEdit] = useState(false);
  const handleEditComment = async () => {
    await editPostComment(data.id, { title: titleComment });
    setTitleEdit(false);
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
          <span className="text-xs text-darkgray cursor-pointer">Like</span>
          <span className="text-xs text-darkgray cursor-default">|</span>
          <span className="text-xs text-darkgray cursor-pointer">Reply</span>
          {data.Replies.length > 0 && (
            <>
              <span className="text-xs text-darkgray">•</span>
              <span className="text-xs text-darkgray">
                {data.Replies.length} reply
              </span>
            </>
          )}
        </div>

        {/* -------------------  reply area  ------------------- */}
        {data.Replies.length < 0 && (
          <div className="flex gap-2">
            {/* avatar */}
            <img
              className="inline-block h-10 w-10 sm:h-10 sm:w-10 rounded-full cursor-pointer"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQHcpbUcANnETg/profile-displayphoto-shrink_100_100/0/1654666437384?e=1661385600&v=beta&t=EPU0QYVtly7ZvonPgyOsbm4FjOftaxZf6TpEPio-1CE"
              alt=""
            />
            {/* comment box */}
            <div className="flex flex-col w-full gap-1 rounded">
              <div className="flex flex-col w-full bg-gray rounded p-2 gap-2">
                {/* name and position */}
                <div className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <span className="font-bold py-0">Pita Limjaroenrat</span>
                      <span className=" text-xs text-darkgray">reply</span>
                    </div>
                    <span className="text-xs text-darkgray">19hr</span>
                  </div>
                  <span className="text-xs text-darkgray">
                    Elected Member of Parliament, Thailand
                  </span>
                </div>
                <span className="text-sm">
                  this is comment ...
                  <br />
                  <br />
                  from Pita.
                </span>
              </div>
              <div className="flex gap-2">
                <span className="text-xs text-darkgray cursor-pointer">
                  Like
                </span>
                <span className="text-xs text-darkgray cursor-default">|</span>
                <span
                  className="text-xs text-darkgray cursor-pointer"
                  onClick={() => {}}
                >
                  Reply
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
