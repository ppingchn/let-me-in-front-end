import { useRef } from "react";
import { useLocation } from "react-router-dom";
import dayjs from "dayjs";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import { FiDownload } from "react-icons/fi";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function capitalize(word) {
  const lower = word.toLowerCase();
  return word.charAt(0).toUpperCase() + lower.slice(1);
}

function UploadResume({ resume, defaultresume, onChange, onDelete }) {
  const inputEl = useRef();
  let location = useLocation();

  const fileTypes = [
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/pdf"
  ];

  return (
    <>
      <div className="position-relative">
        {resume ? (
          fileTypes.includes(resume?.type) ? (
            <>
              <div className="border-[1px] border-gray-200  rounded-lg grid grid-cols-8 mt-4 w-[350px]  ">
                <div className="col-1 flex justify-center bg-red-600 py-5 px-5 rounded-l-lg">
                  <p className="font-medium text-white">
                    {/* {capitalize(resume.name?.split(".")[1])} */}
                    {resume.name?.split(".")[1].toUpperCase()}
                  </p>
                </div>
                <div className="flex items-center ml-2 col-span-5">
                  <div>
                    {/* {file.name} */}
                    <p>{resume.name}</p>
                    {/* {file.lastModifiedDate} */}
                    <p className="text-sm text-gray-500">
                      {`Uploaded on ${dayjs().format("DD/MM/YYYY")}`}
                    </p>
                  </div>
                </div>
                <div className="col-span-2 border-l-[1px] border-gray-200 text-gray-500 flex justify-center items-center">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="bg-gray-100 rounded-full flex items-center text-gray-400 hover:bg-gray-200 px-2 py-2 ">
                        <span className="sr-only">Open options</span>
                        <DotsVerticalIcon
                          className="h-5 w-5"
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
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                                    : "text-gray-700",
                                  "block px-4 py-3 text-sm"
                                )}
                              >
                                <div
                                  className="flex items-center"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    inputEl.current.value = "";
                                    onDelete();
                                  }}
                                >
                                  <i className="fa-solid fa-trash-can mr-2 text-[20px]"></i>
                                  Delete
                                </div>
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                                    : "text-gray-700 ",
                                  "block px-4 py-3 text-sm"
                                )}
                              >
                                <div className="flex items-center">
                                  <FiDownload className="mr-2 text-[20px]" />
                                  Download
                                </div>
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item onClick={() => inputEl.current.click()}>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                                    : "text-gray-700",
                                  "block px-4 py-3 text-sm"
                                )}
                              >
                                <div className="flex items-center">
                                  <FiDownload className="mr-2 text-[20px]" />
                                  Change
                                </div>
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="border-[1px] border-gray-200  rounded-lg grid grid-cols-8 mt-4 w-[350px] outline-none ring-2 ring-offset-2 ring-red-600 ">
                <div className="bg-gray-500 py-5 px-3 rounded-l-lg">
                  <i class="fa-solid fa-file-lines text-white"></i>
                </div>
                <div className="flex items-center ml-2 col-span-5">
                  <div>
                    {/* {file.name} */}
                    <p>{resume.name}</p>
                    {/* {file.lastModifiedDate} */}
                    <p className="text-sm text-gray-500">
                    {`Uploaded on ${dayjs().format("DD/MM/YYYY")}`}
                    </p>
                  </div>
                </div>
                <div
                  className="col-span-2 border-l-[1px] border-gray-200 text-gray-500 flex justify-center items-center "
                  onClick={(e) => {
                    e.stopPropagation();
                    inputEl.current.value = "";
                    onDelete();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    class="mercado-match"
                    width="35"
                    height="35"
                    focusable="false"
                    className="hover:bg-gray-200 px-2 py-2 rounded-full"
                  >
                    <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
                  </svg>
                </div>
              </div>
              {/* Error span (DOCX,PDF) */}
              <div className="flex items-center mt-3 text-red-600 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  class="mercado-match"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M10.8 1H5.2L1 5.2v5.6L5.2 15h5.6l4.2-4.2V5.2zM12 9H4V7h8z"></path>
                </svg>
                <span className="ml-2 text-sm">
                  Please upload an acceptable document format (DOCX, PDF).
                </span>
              </div>
            </>
          )
        ) : (
          <button
            type="button"
            className="mt-3 inline-flex items-center px-4 py-1.5 border text-blue text-sm leading-4 font-medium rounded-full shadow-sm  bg-white-600 hover:bg-hover-light-blue hover:border-2   focus:text-sky-900 "
            onClick={() => inputEl.current.click()}
          >
            Upload resume
          </button>
        )}
      </div>
      <input type="file" className="hidden" ref={inputEl} onChange={onChange} />
    </>
  );
}

export default UploadResume;

// onClick={() => inputEl.current.click()}  บอกว่าให้click กล่อง divนั้น แล้วให้เหมือนclick ที่ input
