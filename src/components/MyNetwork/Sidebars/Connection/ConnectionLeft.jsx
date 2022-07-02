import Avatar from '../../../ui/Avatar';
import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/solid';
import ProfileConnection from '../Connection/ProfileConnection';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function ConnectionLeft() {
  const [sort, setSort] = useState('Recently added');
  return (
    <div>
      <div className="h-fit w-full flex flex-col gap-1 bg-white border-[1px] rounded-t-lg border-slate-200 px-4 pt-3 pb-3 ">
        <span>2 Connections</span>
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
              <Menu.Items className="origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-200 ' : 'text-gray-500 ',
                          'block px-4 py-2 text-sm',
                        )}
                      >
                        Account settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-200 ' : 'text-gray-500',
                          'block px-4 py-2 text-sm',
                        )}
                        onClick={() => setSort('Recently added')}
                      >
                        Recently added
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-200 ' : 'text-gray-500',
                          'block px-4 py-2 text-sm',
                        )}
                        onClick={() => setSort('First name')}
                      >
                        First name
                      </a>
                    )}
                  </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="submit"
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
              />
            </div>
          </div>
        </div>
      </div>
      {/* Invitation1 */}
      <div className="h-fit w-full flex flex-col gap-1 bg-white border-[1px] border-t-0 rounded-b-lg border-slate-200 px-4 pt-3 pb-3 ">
        <div className="grid grid-cols-5 gap-4">
          <div>
            <Avatar width={[24]} height={[24]} />
          </div>
          <div className="col-span-2 flex flex-col ">
            <span className="text-sm font-semibold">Tom holland</span>
            <span className="text-gray-500">--</span>
            <div className="flex text-gray-500 mt-1">
              <span className="text-xs">Connected 17 hours ago</span>
            </div>
            {/* <div className="flex items-center mt-2  ">
              <span className="p-1 text-gray-500 font-medium hover:bg-gray-200 rounded-md">
                Ignore
              </span>

              <button
                type="button"
                className="ml-3 inline-flex items-center px-4 py-1.5 border text-blue text-sm leading-4 font-medium rounded-full shadow-sm  bg-white-600 hover:bg-hover-light-blue hover:border-2   focus:text-sky-500 "
              >
                Accept
              </button>
            </div> */}
          </div>
          <div className="col-span-1 flex flex-col ">
            <div className="flex items-center mt-2  ">
              <button
                type="button"
                className=" inline-flex items-center px-4 py-1.5 border text-blue text-sm leading-4 font-medium rounded-full shadow-sm  bg-white-600 hover:bg-hover-light-blue hover:border-2   focus:text-sky-500 "
              >
                Accept
              </button>
            </div>
          </div>
          <div className="col-span-1 flex flex-col ">
            <div className="flex items-center mt-2  ">
              <span className="p-1 text-gray-500 font-medium hover:bg-gray-200 rounded-md">
                Remove
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Invitation2 */}
      <ProfileConnection />
    </div>
  );
}

export default ConnectionLeft;
