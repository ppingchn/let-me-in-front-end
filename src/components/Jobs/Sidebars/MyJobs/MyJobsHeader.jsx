function MyJobsHeader() {
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
            className="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
          </svg>
        </div>
      </div>
      {/* Body: Job searches */}
      <div className="grid grid-cols-3 gap-3 mt-3 "></div>
    </div>
  );
}

export default MyJobsHeader;
