import { useState, useEffect, useContext } from 'react';
import PeopleBottomFiltered from './PeopleBottomFiltered';
import PeopleFilter from './PeopleFilter';
import { getAllFollowing, getAllFollower } from '../../../../api/followApi';
import { findFriendId } from '../../../../api/friendApi';
import { useAuth } from '../../../../context/authContext';

function PeopleAndFollow() {
  const { user } = useAuth();
  const role = user.role;
  // console.log(role)

  const [bottomRenderArray, setBottomRenderArray] = useState([]);

  //top State
  //first fetch follower array
  const [followingArr, setFollowingArr] = useState([]);
  const [followerArr, setFollowerArr] = useState([]);

  //for toggle
  const [following, setFollowing] = useState(true);
  const [follower, setFollower] = useState(false);

  //setCount follow
  const [followingCount, setFollowingCount] = useState(0);
  const [followerCount, setFollowerCount] = useState(0);

  const fetchFollowData = async () => {
    try {
      const res = await getAllFollowing();
      setFollowingArr(res.data.follow);
      setFollowingCount(res.data.follow.length);
      const res2 = await getAllFollower();
      setFollowerArr(res2.data.follow);
      // console.log(res2.data.follow);
      setFollowerCount(res2.data.follow.length);

      setBottomRenderArray(res.data.follow);
      if (role === 'company') {
        setBottomRenderArray(res2.data.follow);
        setFollowing(false);
        setFollower(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFollowData();
  }, []);

  //middle State
  const [filter, setFilter] = useState('All');
  // console.log(filter)

  useEffect(() => {
    setBottomRenderArray([]);
    if (role === 'user') {
      if (following) {
        if (filter === 'All') {
          setBottomRenderArray(followingArr);
        } else if (filter === 'Connections') {
          followingArr?.filter(async (el, idx) => {
            if (el.FollowerUser) {
              const res = await findFriendId(el.followerId);
              console.log(res.data.friends);
              if (res.data.friends?.length > 0) {
                setBottomRenderArray((prev) => [...prev, el]);
              }
            }
          });
        } else if (filter === 'Out-of-Network') {
          followingArr?.filter(async (el, idx) => {
            if (el.FollowerUser) {
              const res = await findFriendId(el.followerId);
              if (res.data.friends?.length > 0) {
              } else {
                setBottomRenderArray((prev) => [...prev, el]);
              }
            }
          });
        } else if (filter === 'Companies') {
          followingArr?.filter(async (el, idx) => {
            if (el.Company) {
              setBottomRenderArray((prev) => [...prev, el]);
            }
          });
        }
      } else if (follower) {
        if (filter === 'All') {
          setBottomRenderArray(followerArr);
        } else if (filter === 'Connections') {
          followerArr?.filter(async (el, idx) => {
            if (el.FollowerUser) {
              // console.log(el.userId);
              const res = await findFriendId(el.userId);
              // console.log(res.data.friends);
              if (res.data.friends?.length > 0) {
                // console.log(res.data.friends)
                setBottomRenderArray((prev) => [...prev, el]);
              }
            }
          });
        } else if (filter === 'Out-of-Network') {
          followerArr?.filter(async (el, idx) => {
            if (el.FollowerUser) {
              const res = await findFriendId(el.userId);
              if (res.data.friends?.length > 0) {
              } else {
                setBottomRenderArray((prev) => [...prev, el]);
              }
            }
          });
        } else if (filter === 'Companies') {
          followerArr?.filter(async (el, idx) => {
            if (el.Company) {
              setBottomRenderArray((prev) => [...prev, el]);
            }
          });
        }
      }
    } else if (role === 'company') {
      if (follower) {
        setBottomRenderArray(followerArr);
      }
    }
  }, [following, follower, filter]);

  console.log(bottomRenderArray);

  return (
    <div className="relative top-14 bg-gray w-full sm:w-screen px-5 py-5 h-fit">
      <div className="h-full flex flex-col w-full sm:flex-row gap-5 mx-auto lg:w-[1000px] xl:w-[1128px] rounded-lg">
        {/* top section */}
        <div className="flex-auto w-full sm:w-28 rounded-lg gap-5 ">
          <div>
            <PeopleFilter
              setFollowingArr={setFollowingArr}
              followingArr={followingArr}
              setFollowerArr={setFollowerArr}
              followerArr={followerArr}
              setFilter={setFilter}
              filter={filter}
              setFollowing={setFollowing}
              following={following}
              setFollower={setFollower}
              follower={follower}
              setFollowingCount={setFollowingCount}
              followingCount={followingCount}
              setFollowerCount={setFollowerCount}
              followerCount={followerCount}
              role={user.role}
            />
            <div className="h-fit w-full grid grid-cols-5  mb-16 text-gray-500">
              {bottomRenderArray.map((el, idx) => {
                // console.log(el);
                // console.log(role)
                return role === 'user' ? (
                  // console.log("true")
                  following ? (
                    el.Company ? (
                      <PeopleBottomFiltered
                        key={idx}
                        profilePic={el.Company.profilePic}
                        companyName={el.Company.CompanyDetails[0].companyName}
                        companyId={el.companyId}
                        role={role}
                      />
                    ) : el.FollowerUser ? (
                      <PeopleBottomFiltered
                        key={idx}
                        profilePic={el.FollowerUser.profilePic}
                        firstName={el.FollowerUser.UserDetails[0].firstName}
                        lastName={el.FollowerUser.UserDetails[0].lastName}
                        followerId={el.followerId}
                        role={role}
                      />
                    ) : null
                  ) : follower ? (
                    el.Company ? (
                      <PeopleBottomFiltered
                        key={idx}
                        profilePic={el.Company.profilePic}
                        companyName={el.Company.CompanyDetails[0].companyName}
                        companyId={el.companyId}
                        role={role}
                      />
                    ) : el.User ? (
                      <PeopleBottomFiltered
                        key={idx}
                        profilePic={el.User.profilePic}
                        firstName={el.User.UserDetails[0].firstName}
                        lastName={el.User.UserDetails[0].lastName}
                        followerId={el.followerId}
                        userId={el.userId}
                        role={role}
                      />
                    ) : null
                  ) : null
                ) : (
                  <PeopleBottomFiltered
                    key={idx}
                    profilePic={el.User.profilePic}
                    firstName={el.User.UserDetails[0].firstName}
                    lastName={el.User.UserDetails[0].lastName}
                    followerId={el.followerId}
                    userId={el.userId}
                    role={role}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PeopleAndFollow;
