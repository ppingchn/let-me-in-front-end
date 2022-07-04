import React, { Fragment, useRef, useState, useEffect } from 'react';
import { Menu, Transition, Listbox } from '@headlessui/react';
import { BsThreeDots } from 'react-icons/bs';
import MessageElementWithAvatar from './MessageElementWithAvatar';
import { listChatMsg, createChatMsg } from '../../api/messageApi';

import {
  EmojiHappyIcon as EmojiHappyIconOutline,
  PaperClipIcon,
} from '@heroicons/react/outline';
import {
  EmojiHappyIcon as EmojiHappyIconSolid,
  EmojiSadIcon,
  FireIcon,
  HeartIcon,
  ThumbUpIcon,
  XIcon,
} from '@heroicons/react/solid';
import { io } from 'socket.io-client';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const moods = [
  {
    name: 'Excited',
    value: 'excited',
    icon: FireIcon,
    iconColor: 'text-white',
    bgColor: 'bg-red-500',
  },
  {
    name: 'Loved',
    value: 'loved',
    icon: HeartIcon,
    iconColor: 'text-white',
    bgColor: 'bg-pink-400',
  },
  {
    name: 'Happy',
    value: 'happy',
    icon: EmojiHappyIconSolid,
    iconColor: 'text-white',
    bgColor: 'bg-green-400',
  },
  {
    name: 'Sad',
    value: 'sad',
    icon: EmojiSadIcon,
    iconColor: 'text-white',
    bgColor: 'bg-yellow-400',
  },
  {
    name: 'Thumbsy',
    value: 'thumbsy',
    icon: ThumbUpIcon,
    iconColor: 'text-white',
    bgColor: 'bg-blue-500',
  },
  {
    name: 'I feel nothing',
    value: null,
    icon: XIcon,
    iconColor: 'text-gray-400',
    bgColor: 'bg-transparent',
  },
];

export default function MessageContent({ chatRoom }) {
  const [selected, setSelected] = useState(moods[5]);

  const attachFileEl = useRef(null);

  // //socket io state
  const [msg, setMsg] = useState('');
  const socket = io('http://localhost:9001');

  const [messages, setMessages] = useState([]);

  // make event chat
  const sendChat = (e) => {
    e.preventDefault();

    const chat = createChatMsg(chatRoom.id, msg).then(() => setMsg(''));
  };

  const updateChat = () => {
    console.log(chatRoom);
    if (chatRoom) {
      listChatMsg(chatRoom.id).then((messages) => setMessages(messages));
    }
  };

  useEffect(() => {
    socket.on('chat', updateChat);
  }, []);

  useEffect(() => {
    updateChat();
  }, [chatRoom]);

  if (!chatRoom) {
    return <></>;
  }

  return (
    <div className="h-full bg-white w-full">
      <div className="flex justify-between h-13 px-3 py-1 rounded-tr-lg border-b-[1px] border-slate-200">
        <div className="flex flex-col">
          <span>{chatRoom.user.username}</span>
        </div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="flex justify-center items-center w-10 h-10 rounded-full shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray transition-all focus:outline-none ">
              <BsThreeDots className="text-2xl" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      )}
                    >
                      Archive
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      )}
                    >
                      Delete
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      )}
                    >
                      Mark as unread
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full text-left px-4 py-2 text-sm',
                      )}
                    >
                      Mute
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className="flex flex-col px-3 py-3 xl:h-[450px] 2xl:h-[600px] overflow-y-auto gap-5">
        {messages &&
          messages.map((message) => (
            <MessageElementWithAvatar message={message} key={message.id} />
          ))}
      </div>
      {/* post */}
      <div>
        <div className="flex items-start px-4">
          <div className="min-w-0 flex-1">
            <form action="#" onSubmit={sendChat}>
              <div className="border-t-[1px] border-gray-200 focus-within:border-green-800">
                <label htmlFor="comment" className="sr-only">
                  Add your comment
                </label>
                <textarea
                  rows={3}
                  name="comment"
                  id="comment"
                  className="block w-full border-0 border-transparent p-0 py-2 resize-none focus:ring-0 focus:border-indigo-600 sm:text-sm"
                  placeholder="Add your comment..."
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                />
              </div>
              <div className="pt-2 flex justify-between">
                <div className="flex items-center space-x-5">
                  <div className="flow-root">
                    <button
                      type="button"
                      className="-m-2 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
                      onClick={() => {
                        attachFileEl.current.click();
                      }}
                    >
                      <PaperClipIcon className="h-6 w-6" aria-hidden="true" />
                      <input
                        type="file"
                        className="hidden"
                        ref={attachFileEl}
                      />
                      <span className="sr-only">Attach a file</span>
                    </button>
                  </div>
                  <div className="flow-root">
                    <Listbox value={selected} onChange={setSelected}>
                      {({ open }) => (
                        <>
                          <Listbox.Label className="sr-only">
                            Your mood
                          </Listbox.Label>
                          <div className="relative">
                            <Listbox.Button className="relative -m-2 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500">
                              <span className="flex items-center justify-center">
                                {selected.value === null ? (
                                  <span>
                                    <EmojiHappyIconOutline
                                      className="flex-shrink-0 h-6 w-6"
                                      aria-hidden="true"
                                    />
                                    <span className="sr-only">
                                      Add your mood
                                    </span>
                                  </span>
                                ) : (
                                  <span>
                                    <span
                                      className={classNames(
                                        selected.bgColor,
                                        'w-8 h-8 rounded-full flex items-center justify-center',
                                      )}
                                    >
                                      <selected.icon
                                        className="flex-shrink-0 h-5 w-5 text-white"
                                        aria-hidden="true"
                                      />
                                    </span>
                                    <span className="sr-only">
                                      {selected.name}
                                    </span>
                                  </span>
                                )}
                              </span>
                            </Listbox.Button>

                            <Transition
                              show={open}
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="absolute z-10 -ml-6 w-60 bg-white shadow rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm">
                                {moods.map((mood) => (
                                  <Listbox.Option
                                    key={mood.value}
                                    className={({ active }) =>
                                      classNames(
                                        active ? 'bg-gray-100' : 'bg-white',
                                        'cursor-default select-none relative py-2 px-3',
                                      )
                                    }
                                    value={mood}
                                  >
                                    <div className="flex items-center">
                                      <div
                                        className={classNames(
                                          mood.bgColor,
                                          'w-8 h-8 rounded-full flex items-center justify-center',
                                        )}
                                      >
                                        <mood.icon
                                          className={classNames(
                                            mood.iconColor,
                                            'flex-shrink-0 h-5 w-5',
                                          )}
                                          aria-hidden="true"
                                        />
                                      </div>
                                      <span className="ml-3 block font-medium truncate">
                                        {mood.name}
                                      </span>
                                    </div>
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Listbox>
                  </div>
                </div>
                <div className="flex-shrink-0 py-5">
                  <div className="h-7 px-5 border-[1px] hover:border-[2px] bg-white hover:bg-gray border-darkgray rounded-full transition-all cursor-pointer">
                    <div className="w-full h-full flex items-center justify-center">
                      <button className="text-sm text-darkgray">Send</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
