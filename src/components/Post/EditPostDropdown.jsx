import React, { useState } from 'react';
import { Menu, Transition, Listbox } from '@headlessui/react';
import { BsThreeDots } from 'react-icons/bs';
import { HiTrash } from 'react-icons/hi';
import { MdModeEditOutline } from 'react-icons/md';
import EditPostModal from './EditPostModal';

function EditPostDropdown({ data }) {
  const [openEditPostModal, setOpenEditPostModal] = useState(false);
  return (
    <>
      <EditPostModal
        open={openEditPostModal}
        setOpen={setOpenEditPostModal}
        data={data}
      />
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex justify-center items-center w-10 h-10 rounded-full shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray transition-all focus:outline-none ">
            <BsThreeDots className="text-2xl" aria-hidden="true" />
          </Menu.Button>
        </div>
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex flex-col justify-around my-2">
            <Menu.Item>
              <button
                className="flex gap-2 items-center hover:bg-gray px-5 py-4"
                onClick={() => setOpenEditPostModal(true)}
              >
                <MdModeEditOutline size="20" />
                <span>Edit post</span>
              </button>
            </Menu.Item>
            <Menu.Item>
              <button className="flex gap-2 items-center hover:bg-gray px-5 py-4">
                <HiTrash size="20" />
                <span>Delete post</span>
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </>
  );
}

export default EditPostDropdown;
