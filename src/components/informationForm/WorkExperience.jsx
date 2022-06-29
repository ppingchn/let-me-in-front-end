import { useLocation } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { useState } from 'react';

function WorkExperience({ index, companyArray, setCompanyArray }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleChangeCompanyName = (e) => {
    const clone = { ...companyArray };
    console.log(clone);
    clone[index].companyName = e.target.value;
    setCompanyArray(clone);
  };
  const handleChangePosition = (e) => {
    const clone = { ...companyArray };
    console.log(clone);
    clone[index].position = e.target.value;
    setCompanyArray(clone);
  };
  const handleChangeStartDate = (date: Date) => {
    setStartDate(date);
    const clone = { ...companyArray };
    console.log(clone);
    clone[index].startDate = date;
    setCompanyArray(clone);
  };
  const handleChangeEndDate = (date: Date) => {
    setEndDate(date);
    const clone = { ...companyArray };
    console.log(clone);
    clone[index].endDate = date;
    setCompanyArray(clone);
    console.log(companyArray);
  };
  const handleChangeWorkDescription = (e) => {
    const clone = { ...companyArray };
    console.log(clone);
    clone[index].workDescription = e.target.value;
    setCompanyArray(clone);
  };

  return (
    <>
      <h5 className="text-sm leading-6 font-medium text-gray-900 mt-5">
        Work Experience {index + 1}
      </h5>
      <div className="space-y-6 sm:space-y-5">
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Company name
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="text"
              name="companyName"
              id="companyName"
              autoComplete="given-name"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-500 rounded-md"
              onChange={handleChangeCompanyName}
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="position"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Position
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="text"
              name="position"
              id="position"
              autoComplete="family-name"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-500 rounded-md"
              onChange={handleChangePosition}
            />
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="position"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Work description
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="text"
              name="position"
              id="position"
              autoComplete="family-name"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-500 rounded-md"
              onChange={handleChangeWorkDescription}
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-12 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5 content-center">
          <label
            htmlFor="birthDate"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 sm:col-span-4"
          >
            Work duration
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-3 mr-0">
            <DatePicker
              selected={startDate}
              // onChange={(date: Date) => setStartDate(date)}
              onChange={handleChangeStartDate}
              className="border-gray-500 rounded-md"
            />
          </div>
          <div className=" block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 text-right">
            :
          </div>

          <div className="mt-1 sm:mt-0 sm:col-span-1">
            <DatePicker
              selected={endDate}
              // onChange={(date: Date) => setEndDate(date)}
              onChange={handleChangeEndDate}
              className="border-gray-500 rounded-md"
            />
          </div>
        </div>

        {/* <div className="sm:border-t sm:border-gray-00"></div> */}
      </div>
    </>
  );
}

export default WorkExperience;
