/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaHome, FaPeopleArrows, FaSearch } from "react-icons/fa";
import { MdWork, MdNotifications } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { RiArrowDownSFill } from "react-icons/ri";

export default function Header() {
  const [toggleProfileMenu, setToggleProfileMenu] = useState(false);
  const [toggleSearchMobile, setToggleSearchMobile] = useState(false);

  return (
    <header className="w-96 sm:w-screen h-14 px-5 z-10 bg-white fixed">
      <div className="flex h-full mx-auto items-center justify-between xl:w-[1128px]">
        <div className="flex items-center gap-0 sm:gap-1 w-full mr-0 md:mr-12">
          <div className="min-w-fit cursor-pointer">
            <AiFillLinkedin className="text-[48px] text-blue" />
          </div>
          <div className="hidden md:flex min-w-full">
            <input
              name="search"
              class="w-full md:w-64 border h-9 px-5 bg-gray border-transparent rounded sm:text-sm focus:border-black border-2 focus:outline-none"
              placeholder="Search"
              type="search"
            />
          </div>

          {/* Search bar for mobile size */}
          {toggleSearchMobile && (
            <div className="flex md:hidden relative top-[-18px]">
              <div className="absolute flex min-w-full">
                <input
                  name="search"
                  class="w-[300px] z-10 md:z-0 md:w-64 border h-9 px-5 bg-gray border-transparent rounded sm:text-sm focus:border-black border-2 focus:outline-none"
                  placeholder="Search"
                  type="search"
                  onBlur={() => setToggleSearchMobile(false)}
                />
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center h-full">
          <div
            className="flex md:hidden flex-col items-center justify-center h-full w-12 sm:w-20 border-b-2 border-b-darkgray cursor-pointer text-darkgray hover:text-black"
            onClick={() => setToggleSearchMobile(!toggleSearchMobile)}
          >
            <FaSearch className="text-2xl" />
            <span className="hidden sm:flex text-xs">Search</span>
          </div>
          <div className="flex flex-col items-center justify-center h-full w-12 sm:w-20 border-b-2 border-b-darkgray cursor-pointer text-darkgray hover:text-black">
            <FaHome className="text-2xl" />
            <span className="hidden sm:flex text-xs">Home</span>
          </div>
          <div className="flex flex-col items-center justify-center h-full w-12 sm:w-20 cursor-pointer text-darkgray hover:text-black">
            <FaPeopleArrows className="text-2xl" />
            <span className="hidden sm:flex text-xs">My Network</span>
          </div>
          <div className="flex flex-col items-center justify-center h-full w-12 sm:w-20 cursor-pointer text-darkgray hover:text-black">
            <MdWork className="text-2xl" />
            <span className="hidden sm:flex text-xs">Jobs</span>
          </div>
          <div className="flex flex-col items-center justify-center h-full w-12 sm:w-20  cursor-pointer text-darkgray hover:text-black">
            <RiMessage2Fill className="text-2xl" />
            <span className="hidden sm:flex text-xs">Messaging</span>
          </div>
          <div className="flex flex-col items-center justify-center h-full w-12 sm:w-20  cursor-pointer text-darkgray hover:text-black">
            <MdNotifications className="text-2xl" />
            <span className="hidden sm:flex text-xs">Notification</span>
            <div className="relative">
              <div className="absolute w-4 h-4 rounded-full bg-redNotification top-[-28px] sm:top-[-40px] text-white text-sm text-center">
                <span className="relative right-[0.5px] top-[-1px]">1</span>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center h-full w-20"
            onClick={() => setToggleProfileMenu(!toggleProfileMenu)}
          >
            <img
              class="inline-block h-9 w-9 sm:h-6 sm:w-6 rounded-full cursor-pointer"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="hidden sm:flex cursor-pointer">
              <span className="text-xs text-darkgray">Me</span>
              <RiArrowDownSFill />
            </div>

            {/* drop down profile menu */}

            {toggleProfileMenu && (
              <div className="relative right-[216px] top-[18px] z-10">
                <div className="absolute w-64 h-fit bg-white rounded-b-lg rounded-tl-lg border-[0.5px] border-gray drop-shadow-md">
                  <div className="flex flex-col w-full border-b-[1px] border-gray p-2 gap-2">
                    <div className="flex items-center gap-1 cursor-pointer">
                      <img
                        class="inline-block h-14 w-14 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <div className="flex flex-col">
                        <span className="text-md">Tom Holland</span>
                        <span className="text-xs">actor</span>
                      </div>
                    </div>
                    <button className="w-full border-[1px] border-blue text-blue hover:border-[2px] rounded-full text-sm font-medium transition-all h-6">
                      View Profile
                    </button>
                  </div>
                  <div className="flex flex-col w-full border-b-[1px] border-gray px-4 py-2 gap-2">
                    <h3 className="text-black font-medium">Account</h3>
                    <span className="text-darkgray text-xs hover:underline decoration-1 cursor-pointer">
                      Setting & Privacy
                    </span>
                    <span className="text-darkgray text-xs hover:underline decoration-1 cursor-pointer">
                      Help
                    </span>
                    <span className="text-darkgray text-xs hover:underline decoration-1 cursor-pointer">
                      Language
                    </span>
                  </div>
                  <div className="flex flex-col w-full border-b-[1px] border-gray px-4 py-2 gap-2">
                    <h3 className="text-black font-medium">Manage</h3>
                    <span className="text-darkgray text-xs hover:underline decoration-1 cursor-pointer">
                      Post & Activity
                    </span>
                    <span className="text-darkgray text-xs hover:underline decoration-1 cursor-pointer">
                      Job Posting Account
                    </span>
                  </div>
                  <div className="flex flex-col w-full border-b-[1px] border-gray px-4 py-2 gap-2">
                    <span className="text-darkgray text-xs hover:underline decoration-1 cursor-pointer">
                      Sign Out
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
