/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IoMdClose } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import DatePicker from 'react-datepicker';
import validator from 'validator';
import { addEducation } from '../../api/userApi';

export default function ModalAddEducation({ open, setOpen, fetchEducation }) {
  const [error, setError] = useState({});
  const cancelButtonRef = useRef(null);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [education, setEducation] = useState([
    {
      university: '',
      degree: '',
      feild: '',
      startDate: '',
      endDate: '',
    },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let error = {};

    if (validator.isEmpty(education.university + '')) {
      error.university = 'University name is required';
    }
    if (validator.isEmpty(education.degree + '')) {
      error.degree = 'Degree is required';
    }
    if (validator.isEmpty(education.feild + '')) {
      error.feild = 'Feild is required';
    }
    setError({ ...error });

    if (Object.keys(error).length === 0) {
      await addEducation(
        education[0].degree,
        education[0].university,
        education[0].feild,
        education[0].startDate,
        education[0].endDate,
      );
      fetchEducation();
      setOpen(false);
    }
  };

  const handleChangeUniversity = (e) => {
    const clone = { ...education };
    clone[0].university = e.target.value;
    setEducation(clone);
  };
  const handleChangeDegree = (e) => {
    const clone = { ...education };
    clone[0].degree = e.target.value;
    setEducation(clone);
  };
  const handleChangeFeild = (e) => {
    const clone = { ...education };
    clone[0].feild = e.target.value;
    setEducation(clone);
  };
  const handleChangeStartDate = (date: Date) => {
    setStartDate(date);
    const clone = { ...education };
    clone[0].startDate = date;
    setEducation(clone);
  };
  const handleChangeEndDate = (date: Date) => {
    setEndDate(date);
    const clone = { ...education };
    clone[0].endDate = date;
    setEducation(clone);
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
                      Add education
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

                    {/* University Name */}
                    <div className="w-full flex flex-col gap-1">
                      <label
                        htmlFor="university"
                        className="text-sm text-darkgray"
                      >
                        University *
                      </label>
                      <input
                        name="university"
                        className="w-full h-18 focus:outline-none border-[1px] border-darkgray px-3 py-1 rounded-lg"
                        placeholder="Ex: Chulalongkorn University"
                        onChange={handleChangeUniversity}
                      />
                      {error.university && (
                        <span className="flex gap-1 items-center text-redNotification">
                          <RiErrorWarningFill />
                          {error.university}
                        </span>
                      )}
                    </div>
                    {/* degree */}
                    <div className="w-full flex flex-col gap-1">
                      <label htmlFor="degree" className="text-sm text-darkgray">
                        degree *
                      </label>
                      <input
                        name="degree"
                        className="w-full h-18 focus:outline-none border-[1px] border-darkgray px-3 py-1 rounded-lg"
                        placeholder="Ex: Bachelor's"
                        onChange={handleChangeDegree}
                      />
                      {error.degree && (
                        <span className="flex gap-1 items-center text-redNotification">
                          <RiErrorWarningFill />
                          {error.degree}
                        </span>
                      )}
                    </div>
                    {/* Work Description */}
                    <div className="w-full flex flex-col gap-1">
                      <label htmlFor="feild" className="text-sm text-darkgray">
                        Field *
                      </label>
                      <input
                        name="feild"
                        className="w-full focus:outline-none border-[1px] border-darkgray px-3 py-1 rounded-lg"
                        placeholder="Ex: Microsoft"
                        onChange={handleChangeFeild}
                      />
                      {error.feild && (
                        <span className="flex gap-1 items-center text-redNotification">
                          <RiErrorWarningFill />
                          {error.feild}
                        </span>
                      )}
                    </div>
                    {/* study duration */}
                    <div className="flex flex-col w-full gap-1 items-start content-center">
                      <label
                        htmlFor="birthDate"
                        className="block text-sm text-darkgray"
                      >
                        Study duration *
                      </label>
                      <div className="flex gap-3 items-center">
                        <div className="">
                          <DatePicker
                            selected={startDate}
                            // onChange={(date: Date) => setStartDate(date)}
                            onChange={handleChangeStartDate}
                            className="border-gray-500 rounded-md w-[150px]"
                          />
                        </div>
                        <div className="text-sm font-medium text-gray-700 text-right">
                          :
                        </div>

                        <div className="">
                          <DatePicker
                            selected={endDate}
                            // onChange={(date: Date) => setEndDate(date)}
                            onChange={handleChangeEndDate}
                            className="border-gray-500 rounded-md w-[150px]"
                          />
                        </div>
                      </div>
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
