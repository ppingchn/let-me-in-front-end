import React from 'react';
import moment from 'moment';

export default function MessageListElement({ chatRoom, active, onClick }) {
  const timeSet = moment(chatRoom.createdAt).fromNow();
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
          src={chatRoom.user.profilePic}
          alt=""
        />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <span>{chatRoom.user.username}</span>
          <span className="text-darkgray text-sm">{timeSet}</span>
        </div>
        <span className="text-darkgray">
          {`Hi  ${chatRoom.user.username}`}
          {`Here&#39;s a revised version of the recommendation I wrote
          for you. Let me know if you need anything else. "Have 2 years
          experience. Can use Maya for 3D modeling and animated also use in 3D
          Rotomati`.length > 20
            ? `${`Here&#39;s a revised version of the recommendation I wrote
          for you. Let me know if you need anything else. "Have 2 years
          experience. Can use Maya for 3D modeling and animated also use in 3D
          Rotomati`.slice(0, 20)} ...`
            : ''}
        </span>
      </div>
    </div>
  );
}
