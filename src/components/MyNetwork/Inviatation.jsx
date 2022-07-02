import { useEffect, useState } from 'react';
import { BsImageFill, BsFillCalendarDateFill } from 'react-icons/bs';
import { RiVideoFill } from 'react-icons/ri';
import { getAllFriend } from '../../api/friendApi';
import Avatar from '../ui/Avatar';
import CardInviatations from './CardInviatations';

function Inviatation() {

  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUserPending = async () => {
    try {
      const res = await getAllFriend('?status=pending');
      setFriends(res.data.users);
      // console.log(res.data.users);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  useEffect(() => {
    fetchUserPending();
  }, []);

  // console.log(friends);

  return (
    <div>
      <div className="h-fit w-full flex flex-col gap-1 bg-white border-[1px] rounded-t-lg border-slate-200 px-4 pt-3 pb-3 ">
        <div className="flex justify-between items-center">
          <span>Inviatations</span>
          <span className="text-gray-500 font-medium hover:bg-gray-200 rounded-md px-2 py-1">
            Manage
          </span>
        </div>
      </div>
      {/* Invitation1 */}
      {friends.length <= 0 ? (
         <div className="h-fit w-full flex flex-col gap-1 bg-white border-[1px] border-t-0 rounded-b-lg border-slate-200 px-4 pt-3 pb-3 ">
           {/* <span className='h-10'></span> */}
           <span>You don't have friend request yet.</span>
           {/* <span className='h-10'></span> */}
           </div>
      ) : (
        friends.map((el, idx) => {
          return <CardInviatations
          key={idx}
          profilePic={el.profilePic}
            firstName={el.UserDetails[0].firstName}
            lastName={el.UserDetails[0].lastName}
            requestFromId={el.id}
          />
        })
      )}
    </div>
  );
}

export default Inviatation;
