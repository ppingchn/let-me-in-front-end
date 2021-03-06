import React, { useState, useEffect } from 'react';

import AddToYourFeed from '../Home/AddToYourFeed';
import JobElement from '../job/JobElement';
import MessageContent from '../message/MessageContent';
import MessageList from '../message/MessageList';
import { listChatRooms, listChatMsg } from '../../api/messageApi';
import { io } from 'socket.io-client';
import { API_ENDPOINT_URL } from '../../config/env';

export default function MessagePage() {
  const [currentChatRoom, setCurrentChatRoom] = useState(null);
  const [chatRooms, setChatRooms] = useState([]);
  const socket = io(API_ENDPOINT_URL);

  useEffect(() => {
    socket.on('chat', () => {
      listChatRooms().then((chatRooms) => {
        setChatRooms(chatRooms);
      });
    });
  }, []);

  useEffect(() => {
    listChatRooms().then((chatRooms) => {
      setChatRooms(chatRooms);
      if (chatRooms) {
        const curr = chatRooms[0];
        setCurrentChatRoom(curr);
      }
    });
  }, []);

  return (
    <div className="relative top-14 bg-gray w-full sm:w-screen px-5 py-5 h-fit">
      <div className="h-full flex flex-col w-full sm:flex-row gap-5 mx-auto xl:w-[1128px] rounded-lg">
        {/* left section */}
        <div className="flex flex-auto w-full h-[650px] 2xl:h-[800px] border-[1px] border-slate-200 rounded-lg">
          <div className="flex flex-col min-w-[300px] h-full border-r-[1px] border-slate-200">
            <MessageList
              chatRooms={chatRooms}
              currentChatRoom={currentChatRoom}
              setCurrentChatRoom={setCurrentChatRoom}
            />
          </div>
          <div className="flex flex-col w-full">
            {currentChatRoom && (
              <MessageContent
                chatRoom={currentChatRoom}
                key={currentChatRoom.id}
              />
            )}
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
