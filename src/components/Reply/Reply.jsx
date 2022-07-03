import React, { useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useAuth } from '../../context/authContext';
import EditReplyDropdown from './EditReplyDropdown';
import { BiCheck, BiX } from 'react-icons/bi';
import { usePost } from '../../context/postContext';
import { Link } from 'react-router-dom';

function Reply({ data }) {
  dayjs.extend(relativeTime);
  const [title, setTitle] = useState(data.title);
  const [editOpen, setEditOpen] = useState(false);
  const { user } = useAuth();
  const { editReplyComment, deleteReplyComment } = usePost();
  const handleClickEdit = async () => {
    await editReplyComment(data.id, { commentId: data.commentId, title });
    setEditOpen(false);
  };
  const handleDeleteReply = async () => {
    await deleteReplyComment(data.id);
  };
  return (
    <div className="flex gap-2">
      {/* avatar */}
      <Link to={`/user/${data.User.id}`}>
        <img
          className="inline-block h-10 w-10 sm:h-10 sm:w-10 rounded-full cursor-pointer"
          src={data?.User?.profilePic}
          alt=""
        />
      </Link>
      {/* comment box */}
      <div className="flex flex-col w-full gap-1 rounded">
        <div className="flex flex-col w-full bg-gray rounded p-2 gap-2">
          {/* name and position */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <Link to={`/user/${data.User.id}`}>
                  <span className="font-bold py-0 hover:underline hover:text-blue">
                    {data?.User?.username}
                  </span>
                </Link>
                <span className=" text-xs text-darkgray">reply</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-xs text-darkgray">
                  {dayjs(data.updatedAt).fromNow()}
                </span>
                {user.id === data?.User?.id && (
                  <EditReplyDropdown
                    setOpen={setEditOpen}
                    setDelete={handleDeleteReply}
                  />
                )}
              </div>
            </div>
            {/* <span className="text-xs text-darkgray">
              Elected Member of Parliament, Thailand
            </span> */}
          </div>
          {editOpen ? (
            <div className="">
              <form className="w-full flex">
                <input
                  type="text"
                  className="border-transparent w-full rounded-full focus:outline-none focus:border-none  focus:ring-0 active:ring-0 h-full"
                  placeholder="Add a comment..."
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <div className="flex">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickEdit();
                    }}
                  >
                    <BiCheck size="30" />
                  </button>
                  <button
                    onClick={() => {
                      setEditOpen(false);
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
        {/* <div className="flex gap-2">
              <span className="text-xs text-darkgray cursor-pointer">Like</span>
              <span className="text-xs text-darkgray cursor-default">|</span>
              <span
                className="text-xs text-darkgray cursor-pointer"
                onClick={() => {}}
              >
                Reply
              </span>
            </div> */}
      </div>
    </div>
  );
}

export default Reply;
