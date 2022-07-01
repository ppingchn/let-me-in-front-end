import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import ProfileConnection from '../Connection/ProfileConnection';
import { Link } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function PeopleFilter() {
  //top State
  const [following, setFollowing] = useState(false);
  const [follower, setFollower] = useState(false);

  //middle State
  const [filter, setFilter] = useState('All');

  const handleClickFollowing = () => {
    setFollowing(!following);
    if (follower) {
      setFollower(false);
    }
  };

  const handleClickFollower = () => {
    setFollower(!follower);
    if (following) {
      setFollowing(false);
    }
  };

  return (
    <div>
      {/* top bar */}
      <div className="h-fit w-full grid grid-cols-3 gap-4 bg-white  shadow-darkgray shadow-md border-slate-200  mb-16 text-gray-500">
        <span className="col-1 font-medium px-4 pt-3 pb-3">
          Follow fresh perspectives
        </span>
        <div className="col-1">
          <button
            className={`font-medium px-1 pt-3 pb-3 ${
              following ? 'text-green-700 border-b-4 border-green-700 ' : ''
            }`}
            onClick={handleClickFollowing}
          >
            3 Following
          </button>
          <button
            className={`font-medium px-1 pt-3 pb-3 ml-5 ${
              follower ? 'text-green-700 border-b-4 border-green-700 ' : ''
            }`}
            onClick={handleClickFollower}
          >
            1 Follower
          </button>
        </div>
      </div>

      {/* middle bar */}
      <span className="text-sm">
        Unfollow to stop seeing their posts in your feed. Don’t worry, they
        won’t be notified.
      </span>
      <div className="h-fit w-full flex justify-between gap-1 bg-white border-[1px] rounded-lg border-slate-200 px-4 pt-3 pb-3 mb-3">
        <div className="flex gap-2">
          <span>Filter by</span>
          <span className="font-medium">{filter}</span>
          <span className="font-small"> · 3</span>
        </div>

        <div>
          {/* Dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full text-gray-500  text-sm  font-medium  hover:bg-gray-200 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M18.72 11H22v2h-3.28a2 2 0 01-2.74.7 2 2 0 01-.7-.7H2v-2h13.28a2 2 0 012.72-.7 2 2 0 01.72.7zM7 16a2 2 0 00-1.72 1H2v2h3.28a2 2 0 002.72.7 2 2 0 00.7-.7H22v-2H8.72A2 2 0 007 16zm6.72-11A2 2 0 0011 4.3a2 2 0 00-.7.7H2v2h8.28a2 2 0 002.72.7 2 2 0 00.7-.7H22V5z"></path>
                </svg>
                {/* <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                /> */}
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
              <Menu.Items className="origin-top-right absolute mt-5 w-56  -right-4 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="#"
                        className={classNames(
                          active ? 'bg-gray-200 ' : 'text-gray-500 ',
                          'block px-4 py-2 text-sm',
                        )}
                        onClick={() => setFilter('All')}
                      >
                        All
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="#"
                        className={classNames(
                          active ? 'bg-gray-200 ' : 'text-gray-500',
                          'block px-4 py-2 text-sm',
                        )}
                        onClick={() => setFilter('Connections')}
                      >
                        Connections
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="#"
                        className={classNames(
                          active ? 'bg-gray-200 ' : 'text-gray-500',
                          'block px-4 py-2 text-sm',
                        )}
                        onClick={() => setFilter('Out-of-Network')}
                      >
                        Out-of-Network
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="#"
                        className={classNames(
                          active ? 'bg-gray-200 ' : 'text-gray-500',
                          'block px-4 py-2 text-sm',
                        )}
                        onClick={() => setFilter('Companies')}
                      >
                        Companies
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default PeopleFilter;
