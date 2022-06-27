
function MiddleTopSideJobs() {
  const buttonArray = [
    "engineer",
    "senior engineer",
    "associate engineer",
    "engineering specialist",
    "project management engineer",
    "special project engineer",
    "project design engineer",
  ];

  return (
    <div className="h-fit w-full  border-b-[1px]  rounded-lg border-gray bg-white px-4 py-4">
      {/* Header: Suggested job searches */}
      <div className="flex justify-between items-center">
        <p className="text-lg font-medium">Suggested job searches</p>
        <div className="mt-1 mr-1 h-8 w-8 rounded-full  hover:bg-gray-200 flex justify-center items-center text-xl text-gray-500">
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
            <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
          </svg>
        </div>
      </div>
      {/* Body: Job searches */}
      <div className="grid grid-cols-3 gap-3 mt-3 ">
        {/* button1 */}
        {buttonArray.map((el, idx) => {
          return (
            <button
              type="button"
              className=" inline-flex items-center px-4 py-1.5 border text-blue text-sm leading-4 font-medium rounded-full shadow-sm  bg-white-600 hover:bg-hover-light-blue hover:border-2   focus:text-sky-900 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                width="16"
                height="16"
                focusable="false"
                className="mr-2"
              >
                <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
              </svg>
              {el}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default MiddleTopSideJobs;
