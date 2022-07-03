import React, { useState, useEffect } from 'react';

import AddToYourFeed from '../Home/AddToYourFeed';
import JobElement from '../job/JobElement';
import MessageContent from '../message/MessageContent';
import MessageList from '../message/MessageList';
import { listChatRooms } from '../../api/messageApi';
import { io } from 'socket.io-client';

export default function MessagePage() {
  const [currentChatRoom, setCurrentChatRoom] = useState(null);
  const [chatRooms, setChatRooms] = useState([]);
  const socket = io('http://localhost:9001');

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
        setCurrentChatRoom(chatRooms[0]);
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
            <MessageContent chatRoom={currentChatRoom} />
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
