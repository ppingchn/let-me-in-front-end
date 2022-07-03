import CompanyAvatar from '../ui/CompanyAvatar';
import { BsCameraFill } from 'react-icons/bs';
import { FiCheck } from 'react-icons/fi';
import { MdCheck } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { useEffect, useRef, useState } from 'react';
import { uploadCoverImage } from '../../api/userApi';
import {
  createFollows,
  deleteFollows,
  getFollowById,
} from '../../api/followApi';

export default function MainProfile({
  role,
  menuSelect,
  setMenuSelect,
  isUser,
  coverPic,
  profilePic,
  firstName,
  lastName,
  province,
  country,
  companyName,
  userId,
}) {
  // set coverImage and uploadEl

  const [coverImage, setCoverImage] = useState(null);
  const [follow, setFollow] = useState(false);
  const [comfirmUpload, setComfirmUpload] = useState(false);
  const [loading, setLoading] = useState(false);
  const uploadImage = useRef();

  // useEffect(() => {
  //   const fetchFollow = async () => {
  //     try {
  //       const res = await getFollowById(userId);
  //       if (res.data.follow) {
  //         setFollow(true);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   if (!isUser) {
  //     fetchFollow();
  //   }
  // }, []);

  const handleChangeCover = (e) => {
    if (e.target.files[0]) {
      setCoverImage(e.target.files[0]);
      setComfirmUpload(true);
    }
  };

  const handleSubmitCoverImage = async () => {
    const formData = new FormData();
    formData.append('coverImage', coverImage);
    await uploadCoverImage(formData);
    setComfirmUpload(false);
  };

  const handleToggleFollow = async () => {
    try {
      // if (follow) {
      //   await deleteFollow(userId);
      //   setFollow(false);
      // } else {
      //   setFollow(true);
      //   await createFollow(userId);
      // }
    } catch (err) {}
  };

  return (
    <div className="h-fit w-full sm:min-w-[636px] border-[1px] rounded-lg border-slate-200">
      {/* avatar */}
      <div className="flex flex-col h-fit w-full border-b-[1px] rounded-lg border-gray bg-white">
        {/* cover image */}
        <div>
          <img
            className="h-48 w-full rounded-t-lg object-cover bg-center bg-clip-border"
            src={coverImage ? URL.createObjectURL(coverImage) : coverPic}
            alt="coverPhoto"
          />
          {isUser && (
            <>
              <input
                type="file"
                ref={uploadImage}
                className="hidden"
                onChange={handleChangeCover}
              />
              {comfirmUpload ? (
                <div className="flex">
                  <div
                    className="flex justify-center items-center absolute mr-20 w-10 h-10 right-0 top-0 bg-white text-blue rounded-full mt-5 mr-5 cursor-pointer drop-shadow-sm hover:bg-red-500 hover:text-white transition-all"
                    onClick={() => {
                      setCoverImage(null);
                      setComfirmUpload(false);
                    }}
                  >
                    <IoMdClose className="text-xl" />
                  </div>
                  <div
                    className="flex justify-center items-center text-blue absolute w-10 h-10 right-0 top-0 bg-white rounded-full mt-5 mr-5 cursor-pointer drop-shadow-sm hover:bg-blue hover:text-white transition-all"
                    onClick={handleSubmitCoverImage}
                  >
                    <FiCheck className="text-xl" />
                  </div>
                </div>
              ) : (
                <div
                  className="flex justify-center items-center absolute w-10 h-10 right-0 top-0 bg-white rounded-full mt-5 mr-5 cursor-pointer drop-shadow-sm"
                  onClick={() => uploadImage.current.click()}
                >
                  <BsCameraFill className="text-blue text-xl" />
                </div>
              )}
            </>
          )}
        </div>

        {/* profile image */}
        <div className="h-14 w-full relative flex justify-start pl-5">
          <div className="absolute bottom-2">
            {/* ------------ check user or company  ------------ */}
            {role === 'user' ? (
              <img
                className="inline-block h-40 w-40 sm:h-40 sm:w-40 rounded-full cursor-pointer border-4 border-white"
                src={profilePic}
                alt="userImage"
              />
            ) : (
              <img
                className="inline-block h-40 w-40 sm:h-40 sm:w-40 cursor-pointer border-4 border-white"
                src={profilePic}
                alt="userImage"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row px-3 gap-2 sm:gap-10">
          <div
            className={`w-full ${
              role === 'user' ? `sm:w-4/6` : 'sm:w-full'
            } relative flex flex-col items-start px-3 pb-5 gap-4`}
          >
            {/* profile common detail */}
            <div className="flex flex-col">
              <span className="text-black font-bold text-2xl">
                {` ${
                  role === 'user' ? `${firstName} ${lastName}` : companyName
                } `}
              </span>
              <span className="text-darkgray">
                Graphic designer at ChillChat Company
              </span>
              <div className="flex gap-2 text-sm">
                <span className="text-darkgray">
                  {`${province}, ${country} • ${
                    role === 'user' ? (
                      <span className="text-center text-blue hover:underline cursor-pointer">
                        Contact info
                      </span>
                    ) : (
                      `${4000} employees`
                    )
                  }`}
                </span>
              </div>
            </div>
            {/* button message */}
            <div className="flex gap-2">
              {role === 'user' ? (
                <>
                  {follow
                    ? !isUser && (
                        <button
                          className="flex items-center px-4 py-[5px] bg-white rounded-full transition-all hover:bg-gray text-darkgray border-[1px] font-bold"
                          onClick={handleToggleFollow}
                        >
                          <span>Connected</span>
                        </button>
                      )
                    : !isUser && (
                        <button
                          className="flex items-center gap-2 px-4 py-[5px] bg-white rounded-full transition-all hover:bg-gray text-blue border-[1px] border-blue font-bold"
                          onClick={handleToggleFollow}
                        >
                          <MdCheck className="text-2xl" />
                          <span>Connect</span>
                        </button>
                      )}
                  {!isUser && (
                    <button className="flex items-center px-4 py-[5px] bg-blue hover:bg-sky-900 transition-all text-white rounded-full font-bold">
                      Message
                    </button>
                  )}
                  <button className="flex items-center px-4 py-[5px] bg-white rounded-full transition-all hover:bg-gray text-darkgray border-[1px] font-bold">
                    More
                  </button>
                </>
              ) : (
                <>
                  {!follow ? (
                    <button
                      className="flex items-center px-4 py-[5px] bg-white rounded-full transition-all hover:bg-gray text-darkgray border-[1px] font-bold"
                      onClick={handleToggleFollow}
                    >
                      <span>Follow</span>
                    </button>
                  ) : (
                    <button
                      className="flex items-center gap-2 px-4 py-[5px] bg-white rounded-full transition-all hover:bg-gray text-blue border-[1px] border-blue font-bold"
                      onClick={handleToggleFollow}
                    >
                      <MdCheck className="text-2xl" />
                      <span>Follow</span>
                    </button>
                  )}
                  <button className="flex items-center gap-2 px-4 py-[5px] bg-blue hover:bg-sky-900 transition-all text-white rounded-full font-bold">
                    <span>Visit website</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      data-supported-dps="16x16"
                      fill="currentColor"
                      className="mercado-match"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"></path>
                    </svg>
                  </button>
                </>
              )}
            </div>
            {/* Status */}
            {role === 'user' ? (
              <div className="flex flex-col w-full bg-gray px-4 py-2 rounded-xl">
                <span className="font-bold">Open to work</span>
                <span className="text-sm">
                  Concept Artist and Graphic Designer
                </span>
                <span className="text-sm text-blue cursor-pointer font-bold">
                  See all details
                </span>
              </div>
            ) : (
              <></>
            )}
          </div>
          {role === 'user' ? (
            <div className="hidden w-2/6 sm:flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <CompanyAvatar width={8} height={8} />
                <span>Chulalongkorn University</span>
              </div>
              <div className="flex items-center gap-2">
                <CompanyAvatar width={8} height={8} />
                <span>Chulalongkorn University</span>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        {role === 'user' ? (
          <></>
        ) : (
          <div className="flex w-full overflow-x-auto border-t-[1px] border-gray rounded-b-lg mt-5">
            <span
              className={`px-4 py-3 ${
                menuSelect === 'Home'
                  ? 'border-lime-700 border-b-[3px] text-lime-700'
                  : 'text-darkgray'
              } ml-1 font-medium cursor-pointer`}
              onClick={() => setMenuSelect('Home')}
            >
              Home
            </span>
            <span
              className={`px-4 py-3 font-medium ${
                menuSelect === 'About'
                  ? 'border-lime-700 border-b-[3px] text-lime-700'
                  : 'text-darkgray'
              } cursor-pointer`}
              onClick={() => setMenuSelect('About')}
            >
              About
            </span>
            <span
              className={`px-4 py-3 font-medium ${
                menuSelect === 'Posts'
                  ? 'border-lime-700 border-b-[3px] text-lime-700'
                  : 'text-darkgray'
              } cursor-pointer`}
              onClick={() => setMenuSelect('Posts')}
            >
              Posts
            </span>
            <span
              className={`px-4 py-3 font-medium ${
                menuSelect === 'Jobs'
                  ? 'border-lime-700 border-b-[3px] text-lime-700'
                  : 'text-darkgray'
              } cursor-pointer`}
              onClick={() => setMenuSelect('Jobs')}
            >
              Jobs
            </span>
            <span
              className={`px-4 py-3 font-medium ${
                menuSelect === 'People'
                  ? 'border-lime-700 border-b-[3px] text-lime-700'
                  : 'text-darkgray'
              } cursor-pointer`}
              onClick={() => setMenuSelect('People')}
            >
              People
            </span>
            <span
              className={`px-4 py-3 font-medium ${
                menuSelect === 'Videos'
                  ? 'border-lime-700 border-b-[3px] text-lime-700'
                  : 'text-darkgray'
              } cursor-pointer`}
              onClick={() => setMenuSelect('Videos')}
            >
              Videos
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
