/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IoMdClose } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import validator from 'validator';
import { editIntro } from '../../api/userApi';

export default function ModalEditIntro({ open, setOpen, fetchEducation }) {
  const [error, setError] = useState({});
  const cancelButtonRef = useRef(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [headline, setHeadline] = useState('');
  const [industry, setIndustry] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [subDistrict, setSubDistrict] = useState('');
  const [district, setDistrict] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let error = {};

    if (validator.isEmpty(firstName + '')) {
      error.firstName = 'First name is required';
    }
    if (validator.isEmpty(lastName + '')) {
      error.lastName = 'Last name is required';
    }
    if (validator.isEmpty(email + '')) {
      error.email = 'Email is required';
    }
    if (validator.isEmpty(headline + '')) {
      error.headline = 'Headline is required';
    }
    if (validator.isEmpty(industry + '')) {
      error.industry = 'Industry is required';
    }
    if (validator.isEmpty(houseNumber + '')) {
      error.houseNumber = 'House number is required';
    }
    if (validator.isEmpty(subDistrict + '')) {
      error.subDistrict = 'Sub district is required';
    }
    if (validator.isEmpty(district + '')) {
      error.district = 'District is required';
    }
    if (validator.isEmpty(country + '')) {
      error.country = 'Country is required';
    }
    if (validator.isEmpty(city + '')) {
      error.city = 'City is required';
    }
    setError({ ...error });

    if (Object.keys(error).length === 0) {
      console.log('no error');
      try {
        await editIntro(
          firstName,
          lastName,
          email,
          headline,
          industry,
          houseNumber,
          subDistrict,
          district,
          country,
          city,
        );
        setOpen(false);
      } catch (err) {
        console.log(err);
      }
      // setOpen(false);
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
              <Dialog.Panel className="relative bg-white rounded-lg py-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-3xl sm:w-full">
                <div>
                  <div className="flex px-4 sm:px-6 py-3 justify-between rounded-t-lg items-center border-b-[1px] border-gray">
                    {/* <h1 className="text-xl">Create a post</h1> */}
                    <Dialog.Title as="h3" className="text-xl">
                      Edit intro
                    </Dialog.Title>
                    <div
                      className="h-8 w-8 rounded-full hover:bg-gray flex justify-center items-center text-xl"
                      onClick={() => setOpen(false)}
                    >
                      <IoMdClose />
                    </div>
                  </div>

                  {/* All form here */}
                  <div className="flex flex-col gap-5 max-h-[500px] overflow-y-auto px-4 sm:px-6 py-4 justify-between rounded-t-lg items-start">
                    <span className="text-sm text-darkgray">
                      * Indicates required
                    </span>

                    {/* University Name */}
                    <div className="w-full flex flex-col gap-1">
                      <label
                        htmlFor="university"
                        className="text-sm text-darkgray"
                      >
                        First name *
                      </label>
                      <input
                        name="firstName"
                        className="w-full h-18 focus:outline-none border-[1px] border-darkgray px-3 py-1 rounded-lg"
                        placeholder="Ex: John"
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      {error.firstName && (
                        <span className="flex gap-1 items-center text-redNotification">
                          <RiErrorWarningFill />
                          {error.firstName}
                        </span>
                      )}
                    </div>
                    {/* degree */}
                    <div className="w-full flex flex-col gap-1">
                      <label htmlFor="degree" className="text-sm text-darkgray">
                        Last name *
                      </label>
                      <input
                        name="lastName"
                        className="w-full h-18 focus:outline-none border-[1px] border-darkgray px-3 py-1 rounded-lg"
                        placeholder="Ex: Wick"
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      {error.lastName && (
                        <span className="flex gap-1 items-center text-redNotification">
                          <RiErrorWarningFill />
                          {error.lastName}
                        </span>
                      )}
                    </div>
                    <div className="w-full flex flex-col gap-1">
                      <label htmlFor="degree" className="text-sm text-darkgray">
                        Email *
                      </label>
                      <input
                        name="email"
                        className="w-full h-18 focus:outline-none border-[1px] border-darkgray px-3 py-1 rounded-lg"
                        placeholder="Ex: 123@gmail.com"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {error.email && (
                        <span className="flex gap-1 items-center text-redNotification">
                          <RiErrorWarningFill />
                          {error.email}
                        </span>
                      )}
                    </div>
                    {/* Work Description */}
                    <div className="w-full flex flex-col gap-1">
                      <label htmlFor="feild" className="text-sm text-darkgray">
                        Headline *
                      </label>
                      <input
                        name="headline"
                        className="w-full focus:outline-none border-[1px] border-darkgray px-3 py-1 rounded-lg"
                        placeholder="Ex: Freelance 3d animation"
                        onChange={(e) => setHeadline(e.target.value)}
                      />
                      {error.headline && (
                        <span className="flex gap-1 items-center text-redNotification">
                          <RiErrorWarningFill />
                          {error.headline}
                        </span>
                      )}
                    </div>
                    {/* Work Description */}
                    <div className="w-full flex flex-col gap-1">
                      <label htmlFor="feild" className="text-sm text-darkgray">
                        Industry *
                      </label>
                      <input
                        name="industry"
                        className="w-full focus:outline-none border-[1px] border-darkgray px-3 py-1 rounded-lg"
                        placeholder="Ex: Motion Pictures & Film"
                        onChange={(e) => setIndustry(e.target.value)}
                      />
                      <span className="text-sm text-darkgray">
                        Learn more about
                        <span className="text-sm font-medium text-blue cursor-pointer">
                          {' '}
                          industry options
                        </span>
                      </span>

                      {error.industry && (
                        <span className="flex gap-1 items-center text-redNotification">
                          <RiErrorWarningFill />
                          {error.industry}
                        </span>
                      )}
                    </div>
                    {/* Work Description */}
                    <div className="w-full flex flex-col gap-1">
                      <label htmlFor="feild" className="text-sm text-darkgray">
                        House number *
                      </label>
                      <input
                        name="houseNumber"
                        className="w-full focus:outline-none border-[1px] border-darkgray px-3 py-1 rounded-lg"
                        placeholder="Ex: 78/12"
                        onChange={(e) => setHouseNumber(e.target.value)}
                      />
                      {error.houseNumber && (
                        <span className="flex gap-1 items-center text-redNotification">
                          <RiErrorWarningFill />
                          {error.houseNumber}
                        </span>
                      )}
                    </div>
                    <div className="w-full flex flex-col gap-1">
                      <label htmlFor="feild" className="text-sm text-darkgray">
                        Sub district *
                      </label>
                      <input
                        name="subDistrict"
                        className="w-full focus:outline-none border-[1px] border-darkgray px-3 py-1 rounded-lg"
                        placeholder="Ex: Thailand"
                        onChange={(e) => setSubDistrict(e.target.value)}
                      />
                      {error.subDistrict && (
                        <span className="flex gap-1 items-center text-redNotification">
                          <RiErrorWarningFill />
                          {error.subDistrict}
                        </span>
                      )}
                    </div>
                    <div className="w-full flex flex-col gap-1">
                      <label htmlFor="feild" className="text-sm text-darkgray">
                        district *
                      </label>
                      <input
                        name="district"
                        className="w-full focus:outline-none border-[1px] border-darkgray px-3 py-1 rounded-lg"
                        placeholder="Ex: Thailand"
                        onChange={(e) => setDistrict(e.target.value)}
                      />
                      {error.district && (
                        <span className="flex gap-1 items-center text-redNotification">
                          <RiErrorWarningFill />
                          {error.district}
                        </span>
                      )}
                    </div>
                    {/* Work Description */}
                    <div className="w-full flex flex-col gap-1">
                      <label htmlFor="feild" className="text-sm text-darkgray">
                        City *
                      </label>
                      <input
                        name="city"
                        className="w-full focus:outline-none border-[1px] border-darkgray px-3 py-1 rounded-lg"
                        placeholder="Ex: Bangkok"
                        onChange={(e) => setCity(e.target.value)}
                      />
                      {error.city && (
                        <span className="flex gap-1 items-center text-redNotification">
                          <RiErrorWarningFill />
                          {error.city}
                        </span>
                      )}
                    </div>
                    <div className="w-full flex flex-col gap-1">
                      <label htmlFor="feild" className="text-sm text-darkgray">
                        Country *
                      </label>
                      <input
                        name="country"
                        className="w-full focus:outline-none border-[1px] border-darkgray px-3 py-1 rounded-lg"
                        placeholder="Ex: Thailand"
                        onChange={(e) => setCountry(e.target.value)}
                      />
                      {error.country && (
                        <span className="flex gap-1 items-center text-redNotification">
                          <RiErrorWarningFill />
                          {error.country}
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
