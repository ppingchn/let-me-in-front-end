/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useCallback, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IoMdClose } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import validator from 'validator';
// Import React dependencies.
// Import the Slate editor factory.

// Import the Slate components and React plugin.
import RichTextEditor from '../SlateEditor/Draft';
// import JoditEditor from 'jodit-react';
import MDEditor from '@uiw/react-md-editor';
import { editOverviewCompany } from '../../api/userApi';
// import RichTextExample from '../SlateEditor/TestEditText';

export default function ModalEditOverView({
  open,
  setOpen,
  setOverviewTmp,
  overviewTmp,
}) {
  const [error, setError] = useState({});
  const cancelButtonRef = useRef(null);
  const [value, setValue] = useState('');
  const [content, setContent] = useState('Start writing');
  console.log(value);

  const [overview, setOverview] = useState({
    detailContent: '',
    website: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let error = {};

    if (validator.isEmpty(overview.detailContent + '')) {
      error.detailContent = 'detailContent name is required';
    }
    if (validator.isEmpty(overview.website + '')) {
      error.website = 'website is required';
    }

    setError({ ...error });

    if (Object.keys(error).length === 0) {
      console.log(overview);
      await editOverviewCompany(overview.detailContent, overview.website);
      setOpen(false);
    }
  };

  const handleChangeDetailContent = (value) => {
    const clone = { ...overview };
    clone.detailContent = value;
    setOverview(clone);
    console.log(clone);
  };
  const handleChangeWebsite = (e) => {
    const clone = { ...overview };
    clone.website = e.target.value;
    setOverview(clone);
  };

  const getValue = (value) => {
    console.log(value);
    setOverviewTmp(value);
    // setValue(value);
  };

  const config = {
    readonly: false,
    height: 400,
  };
  const handleUpdate = (event) => {
    const editorContent = event.target.innerHTML;
    setContent(editorContent);
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
              <Dialog.Panel className="relative bg-white rounded-lg py-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-3xl sm:w-full">
                <div>
                  <div className="flex px-4 sm:px-6 py-3 justify-between rounded-t-lg items-center border-b-[1px] border-gray">
                    {/* <h1 className="text-xl">Create a post</h1> */}
                    <Dialog.Title as="h3" className="text-xl">
                      Edit overview
                    </Dialog.Title>
                    <div
                      className="h-8 w-8 rounded-full hover:bg-gray flex justify-center items-center text-xl"
                      onClick={() => setOpen(false)}
                    >
                      <IoMdClose />
                    </div>
                  </div>

                  {/* All form here */}
                  <div className="flex flex-col gap-5 px-4 sm:px-6 py-4 justify-between rounded-t-lg items-start">
                    <span className="text-sm text-darkgray">
                      * Indicates required
                    </span>

                    {/* detailContent Name */}
                    <div className="w-full max-w-none flex flex-col gap-1 prose">
                      <label
                        htmlFor="detailContent"
                        className="text-sm text-darkgray"
                      >
                        Overview *
                      </label>
                      <RichTextEditor
                        initialValue=""
                        getValue={handleChangeDetailContent}
                      />
                      {/* <input
                        name="detailContent"
                        className="w-full h-18 focus:outline-none border-[1px] border-darkgray px-3 py-1 rounded-lg"
                        placeholder="Ex: Chulalongkorn detailContent"
                        onChange={handleChangeDetailContent}
                      /> */}
                      {error.detailContent && (
                        <span className="flex gap-1 items-center text-redNotification">
                          <RiErrorWarningFill />
                          {error.detailContent}
                        </span>
                      )}
                    </div>
                    {/* website */}
                    <div className="w-full flex flex-col gap-1">
                      <label
                        htmlFor="website"
                        className="text-sm text-darkgray"
                      >
                        website *
                      </label>
                      <input
                        name="website"
                        className="w-full h-18 focus:outline-none border-[1px] border-darkgray px-3 py-1 rounded-lg"
                        placeholder="Ex: http://www.google.com"
                        onChange={handleChangeWebsite}
                      />
                      {error.website && (
                        <span className="flex gap-1 items-center text-redNotification">
                          <RiErrorWarningFill />
                          {error.website}
                        </span>
                      )}
                    </div>
                    <div className="w-full flex flex-col gap-1 prose">
                      {/* <td dangerouslySetInnerHTML={{ __html: value }} /> */}
                    </div>
                  </div>

                  {/* bottom section */}
                  <div className="flex px-4 sm:px-6 py-3 justify-end rounded-t-lg items-center border-t-[1px] border-gray">
                    <button
                      className="flex items-center px-4 py-[5px] bg-blue hover:bg-sky-900 transition-all text-white rounded-full font-bold"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
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
