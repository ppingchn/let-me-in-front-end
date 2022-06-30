import Profile from '../Home/Profile';
import ModalCreatePost from '../Home/ModalCreatePost';
import { useState } from 'react';
import AddToYourFeed from '../Home/AddToYourFeed';
import CreatePost from '../Home/CreatePost';
import Post from '../Home/Post';
import { usePost } from '../../context/postContext';

export default function HomePage() {
  const { post } = usePost();
  const [openCreatePostModal, setOpenCreatePostModal] = useState(false);
  return (
    <div className="relative top-14 bg-gray w-full sm:w-screen px-5 py-5 h-fit">
      <ModalCreatePost
        open={openCreatePostModal}
        setOpen={setOpenCreatePostModal}
      />

      <div className="h-full flex flex-col w-full sm:flex-row gap-5 mx-auto xl:w-[1128px] rounded-lg">
        {/* left section */}
        <div className="flex-auto w-full sm:w-56 rounded-lg gap-5">
          {/* profile */}
          <div className="flex flex-col gap-5 md:sticky md:top-16">
            <Profile />
          </div>
        </div>

        {/* middle section */}
        <div className="flex flex-col flex-auto w-full sm:w-[540px] gap-5">
          {/* start post */}
          <CreatePost setOpenCreatePostModal={setOpenCreatePostModal} />
          {post?.map((el, idx) => (
            <Post key={idx} data={el} />
          ))}
        </div>

        {/* right section */}
        <div className="hidden lg:flex lg:flex-auto w-[320px] min-w-[320px] max-w-[320px]">
          <AddToYourFeed />
        </div>
      </div>
    </div>
  );
}
