import { useLocation } from "react-router-dom";
import UploadCoverPhoto from "../uploadImage/UploadCoverPhoto";
import UploadProfilePic from "../uploadImage/UploadProfilePic";

function Profile({ profilePic, setProfilePic, coverPhoto, setCoverPhoto }) {
  let location = useLocation();

  return (
    <div>
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {location.pathname === "/signup"
            ? "Profile"
            : location.pathname === "/signupCompany"
            ? "Company Profile"
            : null}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          This information will be displayed publicly so be careful what you
          share.
        </p>
      </div>

      <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="photo"
            className="block text-sm font-medium text-gray-700"
          >
            Photo
          </label>

          <UploadProfilePic
            profilePic={profilePic}
            // defaultProfilePic={user.profilePic}
            onChange={(e) => {
              // console.dir(e.target.files)
              if (e.target.files[0]) {
                setProfilePic(e.target.files[0]);
              }
            }}
            onDelete={() => setProfilePic(null)}
          />
         
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5 ">
          <label
            htmlFor="cover-photo"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Cover photo
          </label>

          <UploadCoverPhoto
            coverPhoto={coverPhoto}
            // defaultCoverPhoto={user.coverPhoto}
            onChange={(e) => {
              if (e.target.files[0]) {
                setCoverPhoto(e.target.files[0]);
              }
            }}
            onDelete={() => setCoverPhoto(null)}
          />
         
        </div>
      </div>
    </div>
  );
}

export default Profile;
