import React from 'react';
import moment from 'moment';

export default function MessageListElement({ chatRoom, active, onClick }) {
  return (
    <div
      className={`flex gap-2 border-l-4 border-white h-20 px-3 items-center hover:bg-gray cursor-pointer ${
        active ? 'bg-gray border-green-800' : ''
      }`}
      onClick={onClick}
    >
      <div>
        <img
          className="inline-block h-12 w-12 sm:h-12 sm:w-12 cursor-pointer"
          src={chatRoom?.user.profilePic}
          alt=""
        />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <span>{chatRoom?.user.username}</span>
          <span className="text-darkgray text-sm">
            {chatRoom &&
              chatRoom?.ChatMessages &&
              moment(chatRoom?.ChatMessages[0]?.createdAt).fromNow()}
          </span>
        </div>
        <span className="text-darkgray">
          {chatRoom &&
            chatRoom?.ChatMessages &&
            chatRoom?.ChatMessages[0]?.message}
        </span>
      </div>
    </div>
  );
}
