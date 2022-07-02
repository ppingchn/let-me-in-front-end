import { useEffect, useState } from 'react';
import { updateFriend, deleteFriend } from '../../api/friendApi';

function CardInviatations({ firstName, lastName, profilePic, requestFromId }) {
  const [click, setClick] = useState('');

  // //bottom
  const handleClickRequest = async () => {
  if (click === 'Accept') {
    await updateFriend(requestFromId);
  } else if (click === 'Ignore') {
    await deleteFriend(requestFromId );
  }
};
  useEffect(()=>{
    handleClickRequest()
},[click])

  return (
    <div className="h-fit w-full flex flex-col gap-1 bg-white border-[1px] border-t-0 rounded-b-lg border-slate-200 px-4 pt-3 pb-3 ">
      <div className="grid grid-cols-6 gap-4">
        <div>
          {/* <Avatar width={[24]} height={[24]} /> */}
          <img
            className={`inline-block h-24 w-24 rounded-full`}
            src={
              profilePic
                ? profilePic
                : `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`
            }
            alt="profile"
          />
        </div>
        <div className="col-span-3 flex flex-col ">
          <span className="text-sm font-semibold">
            {firstName} {lastName}
          </span>
          <span className="text-gray-500">--</span>
          <div className="flex text-gray-500 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              width="14"
              height="14"
              focusable="false"
            >
              <path d="M13 13V2a1 1 0 00-1-1H4a1 1 0 00-1 1v11H2v2h12v-2h-1zm-2 0H9v-2H7v2H5V9h6v4zm0-5H5V6h6v2zm0-3H5V3h6v2z"></path>
            </svg>
            <span style={{ fontSize: 10 }}>--</span>
          </div>
          <div className="flex items-center mt-2  ">
            {click === '' ? (
              <>
                <button
                  type="button"
                  className="p-1 text-gray-500 font-medium hover:bg-gray-200 rounded-md"
                  onClick={() => {
                    setClick('Ignore');
                    // handleClickRequest();
                  }}
                >
                  Ignore
                </button>

                <button
                  type="button"
                  className="ml-3 inline-flex items-center px-4 py-1.5 border text-blue text-sm leading-4 font-medium rounded-full shadow-sm  bg-white-600 hover:bg-hover-light-blue hover:border-2   focus:text-sky-900 "
                  onClick={() => {
                    setClick('Accept');
                    // handleClickRequest();
                  }}
                >
                  Accept
                </button>
              </>
            ) : click === 'Ignore' ? (
              <span className="text-gray-500">Request removed</span>
            ) : click === 'Accept' ? (
              <span className="text-green-700">Request accepted</span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardInviatations;
