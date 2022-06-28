import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
// import uploadImagePic from "../../../assets/images/uploadImagePic.png";

function UploadProfilePic({
  profilePic,
  defaultprofilePic,
  onChange,
  onDelete,
}) {
  const inputEl = useRef();
  let location = useLocation();

  return (
    <>
      <div
        className="relative"
        role="button"
        onClick={() => inputEl.current.click()}
      >
        {profilePic ? (
          <>
            {/* <button
              className=" absolute"
              style={{ right: 6 }}
              onClick={(e) => {
                e.stopPropagation();
                inputEl.current.profilePic = "";
                onDelete();
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button> */}
            {/* <img
              className="h-full w-full text-gray-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              src={URL.createObjectURL(profilePic)}
              alt="profilePic"
                // className="img-fluid"
              style={{ width: 250, height: 250 }}

            /> */}
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="flex items-center">
                <img
                  className="rounded-full  "
                  style={{ width: 60 }}
                  src={URL.createObjectURL(profilePic)}
                >
                  {/* <img
                    className="h-full w-full text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    src={URL.createObjectURL(profilePic)}
                  >
                  </img> */}
                </img>
                <button
                  type="button"
                  className="ml-5 bg-white py-2 px-3 border border-gray-500 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Change
                </button>
                <button
                  type="button"
                  className="ml-5 bg-white py-2 px-3 border border-gray-500 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    inputEl.current.profilePic = '';
                    onDelete();
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="flex items-center">
                <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-200">
                  <svg
                    className="h-full w-full text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <button
                  type="button"
                  className="ml-5 bg-white py-2 px-3 border border-gray-500 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Change
                </button>
              </div>
            </div>
          </>
        )}
        {/* {location.pathname.startsWith("/Profile/EditProfile")  && ( */}
        <input
          type="file"
          className="hidden"
          ref={inputEl}
          onChange={onChange}
        />
        {/* )} */}
      </div>
    </>
  );
}

export default UploadProfilePic;

// onClick={() => inputEl.current.click()}  บอกว่าให้click กล่อง divนั้น แล้วให้เหมือนclick ที่ input
