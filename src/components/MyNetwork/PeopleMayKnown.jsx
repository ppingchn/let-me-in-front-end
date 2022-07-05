import { useEffect, useState } from 'react';
import { getAllFriend } from '../../api/friendApi';
import ProfileMayKnown from './ProfileMayKnown ';

function PeopleMayKnown() {
  const [allUser, setAllUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUserUnknown = async () => {
    try {
      const res = await getAllFriend('?status=unknown');
      setAllUser(res.data.users);
      // console.log(res.data.users);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };
  // console.log(allUser);
  const onlyFriends = allUser.filter((el, idx) => el.role === 'user');
  console.log(onlyFriends);

  useEffect(() => {
    fetchUserUnknown();
  }, []);

  return (
    <div className="h-fit w-full flex flex-col gap-2 bg-white border-[1px] rounded-lg border-slate-200 p-3">
      <div className="flex justify-between">
        <span>People you may know from Toyota Motor Corporation</span>
        <span className="text-gray-500 font-medium">See all</span>
      </div>
      <div className="grid grid-cols-2 gap-5  md:grid-cols-3  ">
<<<<<<< HEAD
        {onlyFriends.length > 0 ? (
          onlyFriends.map((el, idx) => {
            return (
              <ProfileMayKnown
                key={idx}
                profilePic={el.profilePic}
                firstName={el.UserDetails[0]?.firstName}
                lastName={el.UserDetails[0]?.lastName}
                requestToId={el.id}
              />
            );
          })
        ) : (
          <div></div>
        )}
=======
        {onlyFriends.map((el, idx) => {
          return (
            <ProfileMayKnown
              key={idx}
              profilePic={el.profilePic}
              firstName={el.UserDetails[0]?.firstName}
              lastName={el.UserDetails[0]?.lastName}
              requestToId={el.id}
            />
          );
        })}
>>>>>>> dev
      </div>
    </div>
  );
}

export default PeopleMayKnown;
