import { Link } from "react-router-dom";

function MyJobsLeft() {
  return (
    <div className="h-fit w-full  border-[1px]  rounded-lg border-gray-200 bg-white  ">
      {/* My Jobs */}
      <div className="w-full flex flex-col  border-b-[1px] border-gray-200 ">
        <div
          className="flex text-gray-500 hover:bg-gray-200 py-3 pl-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z"></path>
          </svg>
          <span className="font-medium ml-3">My items</span>
        </div>
      </div>

      <>
        {/* My jobs */}
        <div className="flex justify-between text-gray-500 hover:bg-gray-200 py-3  border-l-[4px] border-blue ">
          <span className="font-small ml-3 text-blue font-medium">My jobs</span>
          <span className="mr-3">3</span>
        </div>
      </>
    </div>
  );
}

export default MyJobsLeft;
