import ModalCreatePost from '../Home/ModalCreatePost';
import { useState } from 'react';
import ModalLikeList from '../Home/ModalLikeList';
import ModalSharePostList from '../Home/ModalSharePostList';
import ManageMyWork from '../MyNetwork/ManageMyWork';
import Inviatation from '../MyNetwork/Inviatation';
import PeopleMayKnown from '../MyNetwork/PeopleMayKnown';
import { Outlet } from 'react-router-dom';

function MyNetwork() {
  const [openCreatePostModal, setOpenCreatePostModal] = useState(false);
  const [openLikeListModal, setOpenLikeListModal] = useState(false);
  const [openShareListModal, setOpenShareListModal] = useState(false);

  return (
    <>
      <div className="relative top-14 bg-gray w-full sm:w-screen px-5 py-5 h-fit">
        <ModalCreatePost
          open={openCreatePostModal}
          setOpen={setOpenCreatePostModal}
        />
        <ModalLikeList
          open={openLikeListModal}
          setOpen={setOpenLikeListModal}
        />
        <ModalSharePostList
          open={openShareListModal}
          setOpen={setOpenShareListModal}
        />
        <div className="h-full flex flex-col w-full gap-5 mx-auto lg:w-[1000px] xl:w-[1128px] rounded-lg">
          {/* left section */}
          <div className="flex flex-col flex-auto sm:flex-row w-full rounded-lg gap-5 ">
            <ManageMyWork />
            <div className="flex flex-col flex-auto w-full sm:w-[540px] gap-5">
              {/* Invitation */}
              <Inviatation />
              {/* PeopleMayKnown */}
              <PeopleMayKnown />
            </div>
          </div>

          {/* middle section */}
        </div>
      </div>
    </>
  );
}

export default MyNetwork;
