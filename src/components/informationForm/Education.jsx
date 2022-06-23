import { useLocation } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useState } from "react";

function Education({ index, educationArray, setEducationArray }) {
  //Education Information
  const [startDateEducation, setStartDateEducation] = useState(new Date());
  const [endDateEducation, setEndDateEducation] = useState(new Date());

  const handleChangeDegree = (e) => {
    const clone = { ...educationArray };
    // console.log(clone);
    clone[index].degree = e.target.value;
    setEducationArray(clone);
  };

  const handleChangeUniversity = (e) => {
    const clone = { ...educationArray };
    // console.log(clone);
    clone[index].university = e.target.value;
    setEducationArray(clone);
  };
  const handleChangeField = (e) => {
    const clone = { ...educationArray };
    // console.log(clone);
    clone[index].field = e.target.value;
    setEducationArray(clone);
  };
  const handleChangeStartDate = (date: Date) => {
    setStartDateEducation(date);
    const clone = { ...educationArray };
    console.log(clone);
    console.log(index);
    clone[index].startDateEducation = date;
    setEducationArray(clone);
  };
  const handleChangeEndDate = (date: Date) => {
    setEndDateEducation(date);
    const clone = { ...educationArray };
    // console.log(clone);
    clone[index].endDateEducation = date;
    setEducationArray(clone);
    // console.log(educationArray)
  };

  return (
    <>
      <h5 className="text-sm leading-6 font-medium text-gray-900 mt-5">
        Education {index + 1}
      </h5>
      <div className="space-y-6 sm:space-y-5">
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="degree"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Degree
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="text"
              name="degree"
              id="degree"
              autoComplete="given-name"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-500 rounded-md"
              onChange={handleChangeDegree}
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="university"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            University
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="text"
              name="university"
              id="university"
              autoComplete="family-name"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-500 rounded-md"
              onChange={handleChangeUniversity}
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="field"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Field
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="text"
              name="field"
              id="field"
              autoComplete="family-name"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-500 rounded-md"
              onChange={handleChangeField}
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
              selected={startDateEducation}
              onChange={handleChangeStartDate}
              className="border-gray-500 rounded-md"
            />
          </div>
          <div className=" block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 text-right">
            :
          </div>

          <div className="mt-1 sm:mt-0 sm:col-span-1">
            <DatePicker
              selected={endDateEducation}
              onChange={handleChangeEndDate}
              className="border-gray-500 rounded-md"
            />
          </div>
        </div>

        <div className="sm:border-t sm:border-gray-00"></div>
      </div>
    </>
  );
}

export default Education;
