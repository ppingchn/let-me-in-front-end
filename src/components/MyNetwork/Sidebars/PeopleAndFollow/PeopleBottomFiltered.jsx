import { useEffect, useState } from 'react';
import { createFollows, deleteFollows } from '../../../../api/followApi';

function PeopleBottomFiltered({
  companyId,
  followerId,
  profilePic,
  companyName,
  firstName,
  lastName,
}) {

  //bottom state
  const [follow, setFollow] = useState(true);

  //bottom
  const handleClickFollow = () => {
    // console.log(follow)
    setFollow(!follow);
    // console.log(!follow)
  };
  
  // useEffect(async()=>{
  //  if (follow) {
  //   if(companyId){
  //     await createFollows(companyId)
  //   }else if (followerId){
  //     await createFollows(followerId)
  //   }
  //  }else{
  //   if(companyId){
  //     await deleteFollows(companyId)
  //   }else if (followerId){
  //     await deleteFollows(followerId)
  //   }
  //  }
  // },[follow])
  return (
    <div className="col-1 bg-white border-slate-200 border-[1px] rounded-lg">
      <div className=" flex flex-col gap-2 px-3 py-3 rounded-l-lg">
        <img
          src={profilePic}
          loading="lazy"
          alt="Toyota Motor Corporation"
          id="ember1126"
          className="lazy-image EntityPhoto-square-5 ember-view rounded-full w-20 h-20"
        />
        <p className="text-black font-medium">
            {firstName} {lastName}
            {companyName}
        </p>
        {/* <p className="text-sm">Automotive</p> */}
        <p className="h-14"></p>
      </div>
      <div
        className="border-slate-200 border-t-[1px] text-center py-2 hover:bg-hover-light-blue"
        onClick={handleClickFollow}
      >
        {follow ? (
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              class="mercado-match"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M12.57 2H15L6 15l-5-5 1.41-1.41 3.31 3.3z"></path>
            </svg>
            <p className="ml-2">Following</p>
          </div>
        ) : (
          <div className="flex justify-center items-center text-blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              class="mercado-match"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
            </svg>
            <p className="ml-2 font-medium">Follow</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PeopleBottomFiltered;
