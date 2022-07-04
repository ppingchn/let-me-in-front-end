import { Link } from 'react-router-dom';
import { deleteFriend } from '../../../../api/friendApi';
import Avatar from '../../../ui/Avatar';

function ProfileConnection({
  friendId,
  firstName,
  lastName,
  profilePic,
  fetchUserAccept,
}) {
  const handleClickRequest = async () => {
    console.log(friendId);
    await deleteFriend(friendId);
    fetchUserAccept();
  };

  return (
    <div className="h-fit w-full flex flex-col gap-1 bg-white border-[1px] border-t-0 rounded-b-lg border-slate-200 px-4 pt-3 pb-3 ">
      <div className="grid grid-cols-5 gap-4">
        <Link to={`/user/${friendId}`}>
          <Avatar width={[24]} height={[24]} picture={profilePic} />
        </Link>
        <div className="col-span-3 flex flex-col ">
          <span className="text-sm font-semibold">
            {firstName} {lastName}
          </span>
          <span className="text-gray-500">--</span>
          <div className="flex text-gray-500 mt-1">
            <span className="text-xs">Connected 17 hours ago</span>
          </div>
        </div>

        <div className="col-span-1 flex flex-col ">
          <div className="flex items-center mt-2  ">
            <button
              type="button"
              className="p-1 text-gray-500 font-medium hover:bg-gray-200 rounded-md"
              onClick={() => handleClickRequest()}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileConnection;
