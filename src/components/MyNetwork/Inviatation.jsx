import { BsImageFill, BsFillCalendarDateFill } from "react-icons/bs";
import { RiVideoFill } from "react-icons/ri";
import Avatar from "../ui/Avatar";

function Inviatation() {
  return (
    <div>
      <div className="h-fit w-full flex flex-col gap-1 bg-white border-[1px] rounded-t-lg border-slate-200 px-4 pt-3 pb-3 ">
        <div className="flex justify-between items-center">
          <span>Inviatations</span>
          <span className="text-gray-500 font-medium hover:bg-gray-200 rounded-md px-2 py-1">Manage</span>
        </div>
      </div>
      {/* Invitation1 */}
      <div className="h-fit w-full flex flex-col gap-1 bg-white border-[1px] border-t-0 rounded-b-lg border-slate-200 px-4 pt-3 pb-3 ">
        <div className="grid grid-cols-6 gap-4">
          <div>
            <Avatar width={[24]} height={[24]}/>
          </div>
          <div className="col-span-3 flex flex-col ">
            <span className="text-sm font-semibold">Tom holland</span>
            <span className="text-gray-500">--</span>
            <div className="flex text-gray-500 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                width="14"
                height="14"
                focusable="false"
              >
                <path d="M13 13V2a1 1 0 00-1-1H4a1 1 0 00-1 1v11H2v2h12v-2h-1zm-2 0H9v-2H7v2H5V9h6v4zm0-5H5V6h6v2zm0-3H5V3h6v2z"></path>
              </svg>
              <span style={{ fontSize: 10 }}>CodeCamp Thailand</span>
            </div>
            <div className="flex items-center mt-2  ">
              <span className="p-1 text-gray-500 font-medium hover:bg-gray-200 rounded-md">Ignore</span>

              <button
                type="button"
                className="ml-3 inline-flex items-center px-4 py-1.5 border text-blue text-sm leading-4 font-medium rounded-full shadow-sm  bg-white-600 hover:bg-hover-light-blue hover:border-2   focus:text-sky-900 "
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Invitation2 */}
      <div className="h-fit w-full flex flex-col gap-1 bg-white border-[1px] border-t-0 rounded-b-lg border-slate-200 px-4 pt-3 pb-3 ">
        <div className="grid grid-cols-6 gap-4">
          <div>
            <Avatar width={[24]} height={[24]}/>
          </div>
          <div className="col-span-3 flex flex-col ">
            <span className="text-sm font-semibold">Tom holland</span>
            <span className="text-gray-500">--</span>
            <div className="flex text-gray-500 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                width="14"
                height="14"
                focusable="false"
              >
                <path d="M13 13V2a1 1 0 00-1-1H4a1 1 0 00-1 1v11H2v2h12v-2h-1zm-2 0H9v-2H7v2H5V9h6v4zm0-5H5V6h6v2zm0-3H5V3h6v2z"></path>
              </svg>
              <span style={{ fontSize: 10 }}>CodeCamp Thailand</span>
            </div>
            <div className="flex items-center mt-2  ">
              <span className="p-1 text-gray-500 font-medium hover:bg-gray-200 rounded-md">Ignore</span>

              <button
                type="button"
                className="ml-3 inline-flex items-center px-4 py-1.5 border text-blue text-sm leading-4 font-medium rounded-full shadow-sm  bg-white-600 hover:bg-hover-light-blue hover:border-2   focus:text-sky-900 "
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inviatation;
