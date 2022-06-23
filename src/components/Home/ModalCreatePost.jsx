/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import { FaGlobeAsia } from "react-icons/fa";
import { RiArrowDownSFill, RiVideoFill } from "react-icons/ri";
import { BsImageFill } from "react-icons/bs";
import { TbMinusVertical } from "react-icons/tb";
import { BiMessageRoundedDetail } from "react-icons/bi";

export default function ModalCreatePost({ open, setOpen }) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-70 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-start sm:items-start justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div>
                  {/* <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <CheckIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div> */}
                  <div className="flex px-4 sm:px-6 py-3 justify-between rounded-t-lg items-center border-b-[1px] border-gray">
                    {/* <h1 className="text-xl">Create a post</h1> */}
                    <Dialog.Title as="h3" className="text-xl">
                      Create a post
                    </Dialog.Title>
                    <div
                      className="h-8 w-8 rounded-full hover:bg-gray flex justify-center items-center text-xl"
                      onClick={() => setOpen(false)}
                    >
                      <IoMdClose />
                    </div>
                  </div>
                  <div className="flex px-4 sm:px-6 py-4 justify-between rounded-t-lg items-center">
                    <div className="flex gap-2 items-center">
                      <img
                        class="inline-block h-12 w-12 sm:h-14 sm:w-14 rounded-full cursor-pointer"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <div className="flex flex-col">
                        <h1 className="font-bold">Tom Holland</h1>
                        <div className="w-28 h-8 px-3 border-[1px] hover:border-[2px] bg-white hover:bg-gray border-darkgray rounded-full transition-all">
                          <div className="w-full h-full flex items-center justify-between">
                            <FaGlobeAsia className="text-darkgray" />
                            <span className="text-sm text-darkgray">
                              Anyone
                            </span>
                            <RiArrowDownSFill className="text-darkgray" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-4 sm:px-6 py-4 justify-between rounded-t-lg items-start">
                    <textarea
                      className="w-full h-18 border-transparent focus:outline-none resize-none"
                      placeholder="What do you want to talk about?"
                      rows="6"
                    ></textarea>
                    <button className="px-2 py-2 hover:bg-gray text-blue rounded font-bold">
                      Add Hashtag
                    </button>
                  </div>
                  <div className="flex px-4 sm:px-6 pb-4 justify-between rounded-t-lg items-center">
                    <div className="flex items-center">
                      <div
                        className="h-10 w-10 rounded-full hover:bg-gray flex justify-center items-center text-xl"
                        onClick={() => setOpen(false)}
                      >
                        <BsImageFill />
                      </div>
                      <div
                        className="h-10 w-10 rounded-full hover:bg-gray flex justify-center items-center text-2xl"
                        onClick={() => setOpen(false)}
                      >
                        <RiVideoFill />
                      </div>
                      <div className="h-10 w-5 rounded-full flex justify-center items-center text-2xl">
                        <TbMinusVertical className="text-darkgray text-opacity-40" />
                      </div>
                      <div
                        className="h-8 w-24 rounded-full hover:bg-gray flex justify-center items-center text-sm"
                        onClick={() => setOpen(false)}
                      >
                        <BiMessageRoundedDetail className="text-xl" />
                        <span>Anyone</span>
                      </div>
                    </div>

                    <button className="h-10 w-16 rounded-full hover:bg-gray ">
                      Post
                    </button>
                  </div>
                </div>
                {/* <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Deactivate
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
