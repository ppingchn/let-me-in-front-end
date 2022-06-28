import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
// import uploadImagePic from "../../../assets/images/uploadImagePic.png";

function UploadCoverPhoto({
  coverPhoto,
  defaultCoverPhoto,
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
        {coverPhoto ? (
          <>
            <button
              className=" absolute"
              style={{ right: 6 }}
              onClick={(e) => {
                e.stopPropagation();
                inputEl.current.CoverPhoto = '';
                onDelete();
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <img
              src={URL.createObjectURL(coverPhoto)}
              alt="coverPhoto"
              className="img-fluid"
              // style={{ width: 250, height: 250 }}
            />
          </>
        ) : (
          <>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-500 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
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

export default UploadCoverPhoto;

// onClick={() => inputEl.current.click()}  บอกว่าให้click กล่อง divนั้น แล้วให้เหมือนclick ที่ input
