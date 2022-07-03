import Avatar from '../../../ui/Avatar';
import { Fragment, useEffect, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/solid';
import ProfileConnection from '../Connection/ProfileConnection';
import { getAllFriend, getAllUserByLetter } from '../../../../api/friendApi';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function ConnectionLeft() {
  const [sort, setSort] = useState('Recently added');
  const [search, setSearch] = useState('');
  const [fetchByFilter, setFetchByFilter] = useState([]);

  const [friends, setFriends] = useState([]);

  const fetchUserAccept = async () => {
    try {
      const res = await getAllFriend('');
      setFriends(res.data.users);
      console.log(res.data.users);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUserAccept();
  }, []);

  //search

  let typingTimer;

  useEffect(() => {
    try {
      clearTimeout(typingTimer);
      typingTimer = setTimeout(async () => {
        if (sort === 'Recently added') {
          if (search.length >= 3) {
            // console.log('1111111');
            const res = await getAllUserByLetter(
              `sort=Recently added&letter=${search}`,
            );
            setFriends(res.data.users);
          } else {
            // console.log('444444');
            const res = await getAllUserByLetter(`sort=Recently added&letter=`);
            setFriends(res.data.users);
          }
        } else if (sort === 'First name') {
          if (search.length >= 3) {
            // console.log('2222222');
            const res = await getAllUserByLetter(
              `sort=First name&letter=${search}`,
            );
            setFriends(res.data.users);
          } else {
            // console.log('55555');
            const res = await getAllUserByLetter(`sort=First name&letter=`);
            setFriends(res.data.users);
          }
        } else if (sort === 'Last name') {
          if (search.length >= 3) {
            const res = await getAllUserByLetter(
              `sort=Last name&letter=${search}`,
            );
            setFriends(res.data.users);
          } else {
            const res = await getAllUserByLetter(`sort=Last name&letter=`);
            setFriends(res.data.users);
          }
        }
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  }, [sort, search]);

  // console.log(fetchByFilter);
  console.log(friends);

  return (
    <div>
      <div className="h-fit w-full flex flex-col gap-1 bg-white border-[1px] rounded-t-lg border-slate-200 px-4 pt-3 pb-3 ">
        <span>{friends?.length} Connections</span>
        <div>
          <span className="text-gray-500">Sort by : </span>
          {/* Dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full text-gray-500  text-sm  font-medium  hover:bg-gray-200 ">
                {sort}
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
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
              <Menu.Items className="top-5 z-20 absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="button"
                        className={classNames(
                          active ? 'bg-gray-200 ' : 'text-gray-500',
                          'block w-full text-left px-4 py-2 text-sm',
                        )}
                        onClick={() => setSort('Recently added')}
                      >
                        Recently added
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="button"
                        className={classNames(
                          active ? 'bg-gray-200 ' : 'text-gray-500',
                          'block w-full text-left px-4 py-2 text-sm',
                        )}
                        onClick={() => setSort('First name')}
                      >
                        First name
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="button"
                        className={classNames(
                          active ? 'bg-gray-200 ' : 'text-gray-500',
                          'block w-full text-left px-4 py-2 text-sm',
                        )}
                        onClick={() => setSort('Last name')}
                      >
                        Last name
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="">
          <div className="w-full sm:max-w-xs">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <SearchIcon
                  className="h-5 w-5 text-gray-500"
                  aria-hidden="true"
                />
              </div>
              <input
                id="search"
                name="search"
                className="block w-full bg-white border border-gray-500 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500  hover:border-2 focus:text-sky-500 
                 sm:text-sm"
                placeholder="Search by name"
                type="search"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                autoComplete="off"
              />
            </div>
          </div>
        </div>
      </div>
      {friends?.map((el, idx) => (
        <ProfileConnection
          key={idx}
          friendId={el.id}
          profilePic={el.profilePic}
          firstName={el?.UserDetails[0]?.firstName}
          lastName={el?.UserDetails[0]?.lastName}
          fetchUserAccept={fetchUserAccept}
        />
      ))}
    </div>
  );
}

export default ConnectionLeft;
