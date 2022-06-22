/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import AvatarWithName from "../ui/AvatarWithName";

export default function ModalLikeList({ open, setOpen }) {
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
                  <div className="flex px-4 sm:px-6 py-3 justify-between rounded-t-lg items-center">
                    <Dialog.Title as="h3" className="text-xl">
                      Reactions
                    </Dialog.Title>
                    <div
                      className="h-8 w-8 rounded-full hover:bg-gray flex justify-center items-center text-xl"
                      onClick={() => setOpen(false)}
                    >
                      <IoMdClose />
                    </div>
                  </div>

                  <div className="grid grid-cols-7 px-4 sm:px-6 justify-between rounded-t-lg items-center border-b-[1px] border-gray">
                    <span className="py-2 text-center text-lime-700 border-b-4 border-lime-700 cursor-pointer">
                      All 10
                    </span>
                  </div>

                  <div className="flex max-h-[400px] flex-col px-4 sm:px-6 py-4 rounded-t-lg items-start gap-4 overflow-y-scroll">
                    <AvatarWithName />
                    <AvatarWithName />
                    <AvatarWithName />
                    <AvatarWithName />
                    <AvatarWithName />
                    <AvatarWithName />
                    <AvatarWithName />
                    <AvatarWithName />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
