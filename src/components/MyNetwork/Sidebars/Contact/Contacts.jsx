function Contacts() {
  return (
    <div className="relative top-9 bg-gray w-full sm:w-screen  py-5 h-fit">
      <div className="bg-white px-4 py-4 text-lg border-[1px] border-slate-200">
        Saved contacts
      </div>
      <div className="relative top-9 px-24 pb-[570px] grid grid-cols-2 gap-x-8 gap-y-5">
        <div className="col-1 bg-white border-[1px] border-slate-200 rounded-lg">
          <div className="p-3">0 Imported Contacts</div>
          <div className="border-t-[1px] border-slate-200 py-3">
            <div className="grid grid-cols-4 gap-3">
              <div className="col-1 text-center">
                <i className="fa-solid fa-address-book text-[60px]  "></i>
              </div>
              <div className="col-span-3">
                <p className=" text-xl">Connect with people you know, fast</p>
                <p className=" text-lg">
                  Importing contacts helps you keep in touch with your
                  connections.
                </p>
                <div>
                  <button className="text-blue font-medium py-1 mt-2 hover:bg-hover-light-blue rounded-lg">
                    Sync your contacts
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1 flex flex-col gap-y-5 mr-5">
          <button
            type="button"
            className=" inline-flex items-center justify-center px-4 py-1.5 border text-blue text-sm leading-4 font-medium rounded-full shadow-sm  bg-white-600 hover:bg-hover-light-blue hover:border-2   focus:text-sky-500 "
          >
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
              <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
            </svg>
            <p className="ml-3 text-base">Add more contacts</p>
          </button>
          <button
            type="button"
            className=" inline-flex items-center justify-center px-4 py-1.5 border text-blue text-sm leading-4 font-medium rounded-full shadow-sm  bg-white-600 hover:bg-hover-light-blue hover:border-2   focus:text-sky-500 "
          >
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
              <path d="M21 14v5a3 3 0 01-3 3H6a3 3 0 01-3-3v-5h2v5a1 1 0 001 1h12a1 1 0 001-1v-5zm-4-.57V11l-4 2.85V3h-2v10.85L7 11v2.43L12 17z"></path>
            </svg>
            <p className="ml-3 text-base">Export contacts</p>
          </button>
          <button
            type="button"
            className=" inline-flex items-center justify-center px-4 py-1.5 border text-blue text-sm leading-4 font-medium rounded-full shadow-sm  bg-white-600 hover:bg-hover-light-blue hover:border-2   focus:text-sky-500 "
          >
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
              <path d="M13.39 16L16 20l-2.61 4H11l2-3.07a8.4 8.4 0 01-1 .07A9 9 0 014 8h2.26a7 7 0 006.65 10.93L11 16zM12 3a8.4 8.4 0 00-1 .07L13 0h-2.39L8 4l2.61 4H13l-1.91-2.93A6.93 6.93 0 0119 12a7.05 7.05 0 01-1.26 4h2.31A9 9 0 0012 3z"></path>
            </svg>
            <p className="ml-3 text-base">Manage synced contacts</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
