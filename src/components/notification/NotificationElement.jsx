import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BsThreeDots } from 'react-icons/bs';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NotificationElement({ role }) {
  return (
    <div className="flex w-full gap-3 items-center px-5 py-4 border-b-[1px] border-slate-200 hover:bg-gray">
      {role === 'user' ? (
        <img
          class="inline-block h-12 w-12 sm:h-12 sm:w-12 rounded-full cursor-pointer"
          src="https://media-exp1.licdn.com/dms/image/C5635AQFLYHLx2MfUTg/profile-framedphoto-shrink_400_400/0/1599535039224?e=1656594000&v=beta&t=O9y8eKEW1-wXS4dTovWyH7Nd17POXUuH0WvZFgFGLfA"
          alt=""
        />
      ) : (
        <img
          class="inline-block h-12 w-12 sm:h-12 sm:w-12 cursor-pointer"
          src="https://media-exp1.licdn.com/dms/image/C560BAQEn3FvAF4Gpjg/company-logo_200_200/0/1654087026909?e=1664409600&v=beta&t=NTO3cCLbdpI5Q7OLiSHPusrPeo5BiJFNhjv9iYQYsYA"
          alt=""
        />
      )}
      {/* content */}
      <span className="w-full text-sm">
        Welcome to the Wrap-Up, your summary of the day's top news and talking
        points, curated by LinkedIn News Asia. Today, we ask: Is there a quote
        that motivates you at work?
      </span>
      {/* dropdown */}
      <div className="w-10 flex flex-col items-end">
        <span className="text-sm text-darkgray relative right-2">3h</span>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="flex justify-center items-center w-10 h-10 rounded-full shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray transition-all focus:outline-none ">
              <BsThreeDots />
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
    </div>
  );
}
