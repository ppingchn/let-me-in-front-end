import { TiContacts } from "react-icons/ti";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ManageMyWork() {
  let navigate = useNavigate;
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <>
      <div className="h-fit w-full  border-b-[1px]  rounded-t-lg border-gray bg-white ">
        <div className="py-2">
          <span className="ml-3 ">Manage my work</span>
        </div>
        {/* Connections */}
        <div className="w-full flex flex-col ">
          <Link
            to="/myNetwork/connections"
            className="text-gray-500 hover:bg-gray-200 py-2"
          >
            <i className="fa-solid fa-user-group ml-5"></i>
            <span className="font-small ml-3">Connections</span>
          </Link>
        </div>
        {toggleShow ? (
          <>
            {/* Contacts */}
            <div className="w-full flex flex-col ">
              <Link
                to="/myNetwork/contacts"
                className="flex text-gray-500 hover:bg-gray-200 py-2"
              >
                <TiContacts className="text-[23px] ml-4" />
                <span className="font-small ml-3">Contacts</span>
              </Link>
            </div>
            {/* People | Follow */}
            <div className="w-full flex flex-col ">
              <Link
                to="/myNetwork/peopleAndFollow"
                className="flex text-gray-500 hover:bg-gray-200 py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  width="24"
                  height="24"
                  focusable="false"
                  className="ml-4"
                >
                  <path d="M12 2h-.94a10 10 0 00-7.78 14.88L2.1 21a.72.72 0 00.69.92h.2l4.12-1.17A10 10 0 0012 22a10.32 10.32 0 001.57-.12A10 10 0 0012 2zm1.28 18a8.48 8.48 0 01-1.28.1 8.11 8.11 0 01-3-.59L11 18v-1.18a3 3 0 001 .18 3 3 0 001-.18V18l2 1.53a7.81 7.81 0 01-1.72.47zM10 11.16V9.85a2 2 0 014 0v1.3a6 6 0 01-.71 2.85l-.29.6a1 1 0 01-.88.53h-.2a1 1 0 01-.92-.53l-.29-.6a6 6 0 01-.71-2.84zm10.09 1.61a8.15 8.15 0 01-3.16 5.68L15 17v-2.17A8 8 0 0016 11v-1a4 4 0 00-8 0v1a8 8 0 001 3.86V17l-2.65 2-1.87.53.6-2.13.21-.75-.38-.65a8.12 8.12 0 016.32-12.09H12a8.13 8.13 0 018.09 8.86z"></path>
                </svg>
                <span className="font-small ml-3">People I Follow</span>
              </Link>
            </div>
            {/* Groups */}
            <div className="w-full flex flex-col ">
              <div className="flex  text-gray-500 hover:bg-gray-200 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                  className="ml-4"
                >
                  <path d="M15 13.25V21H9v-7.75A2.25 2.25 0 0111.25 11h1.5A2.25 2.25 0 0115 13.25zm5-.25h-1a2 2 0 00-2 2v6h5v-6a2 2 0 00-2-2zM12 3a3 3 0 103 3 3 3 0 00-3-3zm7.5 8A2.5 2.5 0 1017 8.5a2.5 2.5 0 002.5 2.5zM5 13H4a2 2 0 00-2 2v6h5v-6a2 2 0 00-2-2zm-.5-7A2.5 2.5 0 107 8.5 2.5 2.5 0 004.5 6z"></path>
                </svg>
                <span className="font-small ml-3">Groups</span>
              </div>
            </div>
            {/* Events */}
            <div className="w-full flex flex-col ">
              <div className="flex  text-gray-500 hover:bg-gray-200 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                  className="ml-4"
                >
                  <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
                </svg>
                <span className="font-small ml-3">Events</span>
              </div>
            </div>
            {/* Pages */}
            <div className="w-full flex flex-col ">
              <div className="flex  text-gray-500 hover:bg-gray-200 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                  className="ml-4"
                >
                  <path d="M4 2v20h16V2zm14 18h-4v-2h-4v2H6V4h12zm-7-8H8v-2h3zm0 4H8v-2h3zm5-4h-3v-2h3zm-5-4H8V6h3zm5 0h-3V6h3zm0 8h-3v-2h3z"></path>
                </svg>
                <span className="font-small ml-3">Pages</span>
              </div>
            </div>
            {/* Newsletters */}
            <div className="w-full flex flex-col ">
              <div className="flex  text-gray-500 hover:bg-gray-200 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                  className="ml-4"
                >
                  <path d="M13 13h5v1h-5zm5-5H6v3h12zm-5 8h5v-1h-5zm9-12v13a3 3 0 01-3 3H5a3 3 0 01-3-3V4zm-2 2H4v11a1 1 0 001 1h14a1 1 0 001-1zm-9 7H6v3h5z"></path>
                </svg>
                <span className="font-small ml-3">Newsletters</span>
              </div>
            </div>
            {/* Hashtags */}
            <div className="w-full flex flex-col ">
              <div className="flex  text-gray-500 hover:bg-gray-200 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                  className="ml-4"
                >
                  <path d="M21 10V8h-4.56L17 3h-2l-.56 5h-4L11 3H9l-.56 5H3v2h5.22l-.44 4H3v2h4.56L7 21h2l.56-5h4L13 21h2l.56-5H21v-2h-5.22l.44-4zm-7.22 4h-4l.44-4h4z"></path>
                </svg>
                <span className="font-small ml-3">Hashtags</span>
              </div>
            </div>
          </>
        ) : null}
        {/* Show less */}
        <div className="w-full flex flex-col ">
          <div className=" text-gray-500 pb-2">
            <div
              className="flex items-center rounded-sm w-[7.8rem] ml-3 hover:bg-gray-200 px-2 pt-2 pb-1 "
              onClick={() => setToggleShow(!toggleShow)}
            >
              <span className="font-small ">
                {toggleShow ? "Show less" : "Show more"}
              </span>
              <div className="ml-2 text-[20px]">
                {toggleShow ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageMyWork;
