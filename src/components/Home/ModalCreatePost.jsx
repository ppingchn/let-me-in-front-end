/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IoMdClose } from 'react-icons/io';
import { FaGlobeAsia } from 'react-icons/fa';
import { RiArrowDownSFill, RiVideoFill } from 'react-icons/ri';
import { BsImageFill } from 'react-icons/bs';
import { TbMinusVertical } from 'react-icons/tb';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { useAuth } from '../../context/authContext';
import { usePost } from '../../context/postContext';

export default function ModalCreatePost({ open, setOpen }) {
  const { user } = useAuth();
  const { createUserPost } = usePost();
  const cancelButtonRef = useRef(null);
  const [show, setShow] = useState('main');
  const [detail, setDetail] = useState('');
  const [imageUpload, setImageUpload] = useState('');
  const inputPhotoEl = useRef(null);

  const handleCreatePost = async () => {
    try {
      const postFormData = new FormData();
      postFormData.append('detail', detail);
      for (let img of imageUpload) {
        console.log(img);
        postFormData.append('postPicArr', img);
      }
      await createUserPost(postFormData);
      setImageUpload('');
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeCover = (e) => {
    if (e.target.files) {
      setImageUpload(e.target.files);
    }
  };

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
                {show === 'main' && (
                  <div>
                    <div className="flex px-4 sm:px-6 py-3 justify-between rounded-t-lg items-center border-b-[1px] border-gray">
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
                          className="inline-block h-12 w-12 sm:h-14 sm:w-14 rounded-full cursor-pointer"
                          src={user.profilePic}
                          alt=""
                        />
                        <div className="flex flex-col">
                          <h1 className="font-bold">{user.username}</h1>
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
                        onChange={(e) => {
                          setDetail(e.target.value);
                        }}
                        // onKeyPress={(e) => {
                        //   if (e.key === 'Enter') {
                        //     setContent((prev) => prev + `<br/>`);
                        //   }
                        // }}
                      ></textarea>
                      <input
                        multiple
                        type="file"
                        className="hidden"
                        ref={inputPhotoEl}
                        onChange={handleChangeCover}
                      />
                      {imageUpload && (
                        <div className="relative">
                          {Array.from(imageUpload).map((el, idx) => (
                            <img
                              key={idx}
                              src={URL.createObjectURL(el)}
                              alt="imageUpload"
                              onClick={() => inputPhotoEl.current.click()}
                            />
                          ))}
                          <div
                            className="absolute flex justify-center items-center mr-1 mt-1 right-0 top-0 bg-white w-8 h-8 rounded-full"
                            onClick={() => setImageUpload(null)}
                          >
                            <IoMdClose />
                          </div>
                        </div>
                      )}
                      <button className="px-2 py-2 hover:bg-gray text-blue rounded font-bold">
                        Add Hashtag
                      </button>
                    </div>
                    <div className="flex px-4 sm:px-6 pb-4 justify-between rounded-t-lg items-center">
                      <div className="flex items-center">
                        <div
                          className="h-10 w-10 rounded-full hover:bg-gray flex justify-center items-center text-xl"
                          onClick={() => setShow('addPhoto')}
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

                      <button
                        className="h-10 w-16 rounded-full hover:bg-gray"
                        onClick={() => handleCreatePost()}
                      >
                        Post
                      </button>
                    </div>
                  </div>
                )}
                {show === 'addPhoto' && (
                  <div>
                    <div className="flex px-4 sm:px-6 py-3 justify-between rounded-t-lg items-center border-b-[1px] border-gray">
                      <Dialog.Title as="h3" className="text-xl">
                        Edit your photo
                      </Dialog.Title>
                      <div
                        className="h-8 w-8 rounded-full hover:bg-gray flex justify-center items-center text-xl"
                        onClick={() => setOpen(false)}
                      >
                        <IoMdClose />
                      </div>
                    </div>
                    <div className="flex flex-col px-4 sm:px-6 py-4 min-h-32 justify-center rounded-t-lg items-center">
                      <input
                        multiple
                        type="file"
                        className="hidden"
                        ref={inputPhotoEl}
                        onChange={handleChangeCover}
                      />
                      {imageUpload ? (
                        Array.from(imageUpload).map((el, idx) => (
                          <img
                            key={idx}
                            src={URL.createObjectURL(el)}
                            alt="imageUpload"
                            onClick={() => inputPhotoEl.current.click()}
                          />
                        ))
                      ) : (
                        <button
                          className="p-2 font-bold text-blue hover:bg-gray rounded transition-all"
                          onClick={() => inputPhotoEl.current.click()}
                        >
                          Select images to share
                        </button>
                      )}
                    </div>

                    <div className="flex px-4 sm:px-6 pb-4 justify-end gap-4 rounded-t-lg items-center">
                      <div
                        className="w-fit h-7 px-4 border-[1px] hover:border-[2px] bg-white hover:bg-gray border-darkgray rounded-full transition-all cursor-pointer"
                        onClick={() => setShow('main')}
                      >
                        <button className="w-full h-full flex items-center justify-center">
                          <span className="text-sm text-darkgray">back</span>
                        </button>
                      </div>
                      <div
                        className="w-fit h-7 px-4 border-[1px] hover:border-[2px] bg-white hover:bg-gray border-darkgray rounded-full transition-all cursor-pointer"
                        onClick={() => setShow('main')}
                      >
                        <button className="w-full h-full flex items-center justify-center">
                          <span className="text-sm text-darkgray">done</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
