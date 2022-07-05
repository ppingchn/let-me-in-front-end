/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IoMdClose } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import DatePicker from 'react-datepicker';
import validator from 'validator';
import { addExperience, getCompanyByLetter } from '../../api/userApi';
import { useParams } from 'react-router-dom';

export default function ModalAddExperience({ open, setOpen, fetchExperience }) {
  const [error, setError] = useState({});
  const cancelButtonRef = useRef(null);
  const { id } = useParams();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [companySuggest, setCompanySuggest] = useState(null);
  const [loading, setLoading] = useState(false);

  const [companyArray, setCompanyArray] = useState([
    {
      companyName: '',
      position: '',
      startDate: new Date(),
      endDate: new Date(),
      workDescription: '',
    },
  ]);

  const fetchCompanyByLetter = async (letter) => {
    try {
      setLoading(true);
      const res = await getCompanyByLetter(letter);
      setCompanySuggest(res.data.companies);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChangeCompanyName = (e) => {
    const clone = { ...companyArray };
    if (e.target.value.length < 3) {
      setCompanySuggest(null);
    } else {
      fetchCompanyByLetter(e.target.value);
    }
    clone[0].companyName = e.target.value;
    setCompanyArray(clone);
  };
  const handleChangePosition = (e) => {
    const clone = { ...companyArray };
    clone[0].position = e.target.value;
    setCompanyArray(clone);
  };
  const handleChangeWorkDescription = (e) => {
    const clone = { ...companyArray };
    clone[0].workDescription = e.target.value;
    setCompanyArray(clone);
  };
  const handleChangeStartDate = (date: Date) => {
    setStartDate(date);
    const clone = { ...companyArray };
    clone[0].startDate = date;
    setCompanyArray(clone);
  };
  const handleChangeEndDate = (date: Date) => {
    setEndDate(date);
    const clone = { ...companyArray };
    clone[0].endDate = date;
    setCompanyArray(clone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let error = {};

    if (validator.isEmpty(companyArray[0].companyName + '')) {
      error.companyName = 'Company name is required';
    }
    if (validator.isEmpty(companyArray[0].position + '')) {
      error.position = 'Position is required';
    }
    if (validator.isEmpty(companyArray[0].workDescription + '')) {
      error.workDescription = 'Work description is required';
    }
    setError({ ...error });

    if (Object.keys(error).length === 0) {
      await addExperience(
        companyArray[0].companyName,
        companyArray[0].position,
        companyArray[0].startDate,
        companyArray[0].endDate,
        id,
        companyArray[0].workDescription,
      );
    }
    fetchExperience();
    setOpen(false);
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
                      Add experience
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
                    {/* title */}
                    <div className="w-full flex flex-col gap-1">
                      <label
                        htmlFor="position"
                        className="text-sm text-darkgray"
                      >
                        Title *
                      </label>
                      <input
                        name="position"
                        className="w-full h-18 focus:outline-none border-[1px] border-darkgray px-3 py-1 rounded-lg"
                        placeholder="Ex: Retail Sales Manager"
                        onChange={handleChangePosition}
                      />
                      {error.position && (
                        <span className="flex gap-1 items-center text-redNotification">
                          <RiErrorWarningFill />
                          {error.position}
                        </span>
                      )}
                    </div>
                    {/* Company Name */}
                    <div className="w-full flex flex-col gap-1">
                      <label
                        htmlFor="companyName"
                        className="text-sm text-darkgray"
                      >
                        Company name *
                      </label>
                      <input
                        name="companyName"
                        className="w-full h-18 focus:outline-none border-[1px] border-darkgray px-3 py-1 rounded-lg"
                        placeholder="Ex: Microsoft"
                        value={companyArray[0].companyName}
                        onChange={handleChangeCompanyName}
                      />
                      {loading ? (
                        <span>loading</span>
                      ) : (
                        companySuggest && (
                          <div className="relative z-10 w-full bg-white">
                            <div className="absolute w-full h-18 flex flex-col gap-2 bg-white border-[1px] border-darkgray px-3 py-1 rounded-lg">
                              {companySuggest?.map((ele, idx) => (
                                <span
                                  key={idx}
                                  className="cursor-pointer"
                                  onClick={() => {
                                    const clone = { ...companyArray };
                                    clone[0].companyName = ele.companyName;
                                    console.log(clone);
                                    setCompanyArray(clone);
                                    setCompanySuggest(null);
                                  }}
                                >
                                  {ele.companyName}
                                </span>
                              ))}
                            </div>
                          </div>
                        )
                      )}
                      {error.companyName && (
                        <span className="flex gap-1 items-center text-redNotification">
                          <RiErrorWarningFill />
                          {error.companyName}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col w-full gap-1 items-start content-center">
                      <label
                        htmlFor="birthDate"
                        className="block text-sm text-darkgray"
                      >
                        Work duration *
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

                    {/* Work Description */}
                    <div className="w-full flex flex-col gap-1">
                      <label
                        htmlFor="workDescription"
                        className="text-sm text-darkgray"
                      >
                        Work description *
                      </label>
                      <textarea
                        name="workDescription"
                        className="w-full focus:outline-none border-[1px] border-darkgray px-3 py-1 rounded-lg"
                        placeholder="Ex: Collecting and analyzing financial, political and socioeconomic data"
                        onChange={handleChangeWorkDescription}
                        rows={6}
                      />
                      <span className="text-right text-xs text-darkgray">{`${companyArray[0].workDescription.length} / 2,000`}</span>
                      {error.workDescription && (
                        <span className="flex gap-1 items-center text-redNotification">
                          <RiErrorWarningFill />
                          {error.workDescription}
                        </span>
                      )}
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
