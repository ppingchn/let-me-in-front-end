import Avatar from "../../../ui/Avatar";

function ProfileConnection() {
  return (
    <div className="h-fit w-full flex flex-col gap-1 bg-white border-[1px] border-t-0 rounded-b-lg border-slate-200 px-4 pt-3 pb-3 ">
      <div className="grid grid-cols-5 gap-4">
        <div>
          <Avatar width={[24]} height={[24]} />
        </div>
        <div className="col-span-2 flex flex-col ">
          <span className="text-sm font-semibold">Tom holland</span>
          <span className="text-gray-500">--</span>
          <div className="flex text-gray-500 mt-1">
            <span className="text-xs">Connected 17 hours ago</span>
          </div>
        </div>
        <div className="col-span-1 flex flex-col ">
          <div className="flex items-center mt-2  ">
            <button
              type="button"
              className=" inline-flex items-center px-4 py-1.5 border text-blue text-sm leading-4 font-medium rounded-full shadow-sm  bg-white-600 hover:bg-hover-light-blue hover:border-2   focus:text-sky-500 "
            >
              Accept
            </button>
          </div>
        </div>
        <div className="col-span-1 flex flex-col ">
          <div className="flex items-center mt-2  ">
            <span className="p-1 text-gray-500 font-medium hover:bg-gray-200 rounded-md">
              Remove
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileConnection;
