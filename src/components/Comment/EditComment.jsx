import React from 'react';
import { Menu } from '@headlessui/react';
import { BsThreeDots } from 'react-icons/bs';
import { HiTrash } from 'react-icons/hi';
import { MdModeEditOutline } from 'react-icons/md';
import { usePost } from '../../context/postContext';

function EditComment({ setOpenEdit, id }) {
  const { deletePostComment } = usePost();
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex justify-center items-center w-10 h-10 rounded-full shadow-sm text-sm font-medium text-gray-700 hover:bg-gray transition-all focus:outline-none ">
          <BsThreeDots className="text-2xl" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="flex flex-col justify-around my-2">
          <Menu.Item>
            <button
              className="flex gap-2 items-center hover:bg-gray px-5 py-4"
              onClick={() => setOpenEdit(true)}
            >
              <MdModeEditOutline size="20" />
              <span>Edit Comment</span>
            </button>
          </Menu.Item>
          <Menu.Item>
            <button
              className="flex gap-2 items-center hover:bg-gray px-5 py-4"
              onClick={() => deletePostComment(id)}
            >
              <HiTrash size="20" />
              <span>Delete Comment</span>
            </button>
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
}

export default EditComment;
