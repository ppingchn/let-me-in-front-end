import { Link } from "react-router-dom";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import UploadResume from "./UploadResume";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ApplicationSetting() {
  const [enabled, setEnabled] = useState(false);

  const [resume, setResume] = useState("");
  console.log(resume);

  return (
    <div className="relative top-14 bg-gray w-full sm:w-screen px-10 pt-5 pb-96 h-fit">
      <div className="h-full flex flex-col w-full  gap-5 mx-auto lg:w-[1200px] xl:w-[1200px] px-5 py-5 bg-white rounded-lg">
        {/* < Back */}
        <div className="text-blue ">
          <Link to="/jobs" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              class="mercado-match"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M11 1L6.39 8 11 15H8.61L4 8l4.61-7z"></path>
            </svg>
            <p className="font-medium">Back</p>
          </Link>
        </div>
        <p className="text-2xl">Job application settings</p>
        {/* Border */}
        <div className="flex flex-col gap-4 border-[1px] border-gray-200 rounded-lg px-5 py-5">
          {/* Top boder */}
          <div className="flex justify-between border-b-[1px] pb-5 border-gray-200">
            <div>
              <p className="text-xl">
                Save and manage your resumes and answers
              </p>
              <p className="text-sm mt-2">
                Allow LinkedIn to save your resumes and answers about your work
                experience and skills. You can always change your answers when
                you apply.
              </p>
            </div>
            <div className="flex mt-1">
              <p className="mr-2">{enabled ? "on" : "off"}</p>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={classNames(
                  enabled ? "bg-green-700" : "bg-gray-200",
                  "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none "
                )}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    enabled ? "translate-x-5" : "translate-x-0",
                    "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                  )}
                />
              </Switch>
            </div>
          </div>
          {/* Down border */}
          <div>
            <p className="text-xl ">Manage your resumes</p>
            <p className="text-sm">
              You can submit the following resumes with your application
            </p>

            <UploadResume
              resume={resume}
              defaultResumeFile={"user.resume"}
              // ถ้า resume ยังไม่มีค่า จะเป้น null ถ้ากดcancel เป็น undefined
              onChange={(e) => {
                if (e.target.files[0]) {
                  setResume(e.target.files[0]);
                }
              }}
              onDelete={() => setResume(null)}
            />
            <p className="text-xs text-gray-500 mt-2">DOC, DOCX, PDF (5MB)</p>
          </div>
        </div>
          <div className="flex justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16"
              focusable="false"
              className="mt-1 mr-2"
            >
              <path d="M8 1a10.89 10.89 0 01-5.13 2A1 1 0 002 4v5.33a5.67 5.67 0 002.91 5L8 16l3.09-1.71a5.67 5.67 0 002.91-5V4a1 1 0 00-.87-1A10.89 10.89 0 018 1zM4 4.7a12.92 12.92 0 004-1.44 12.61 12.61 0 003.15 1.25l-6.7 6.69A3.66 3.66 0 014 9.46V4.7zm6.11 8L8 13.84l-2.11-1.18a3.65 3.65 0 01-.89-.74l7-7v4.54a3.67 3.67 0 01-1.89 3.2z"></path>
            </svg>
            <div>
                <p className="font-medium">Your privacy is important</p>
                <p className="text-sm text-gray-500">We include a copy of your full profile with your application.</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default ApplicationSetting;
