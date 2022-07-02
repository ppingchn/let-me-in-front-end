import React, { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { BsEmojiSmile, BsImageFill } from 'react-icons/bs';
import { usePost } from '../../context/postContext';
import Reply from '../Reply/Reply';

function ReplyPostComment({ data, id }) {
  const [title, setTitle] = useState('');
  const { createReplyComment } = usePost();
  const { user } = useAuth();
  const handleCreateReply = async () => {
    await createReplyComment({ title, commentId: id });
  };
  return (
    <>
      <div className="w-full h-fit mb-1 px-4">
        <div className="flex h-full gap-1">
          <img
            className="inline-block h-10 w-10 rounded-full"
            src={user.profilePic}
            alt=""
          />
          <div className="flex flex-col w-full h-full px-3 border-[1px] bg-white border-darkgray rounded-xl transition-all">
            <div className="w-full h-full flex items-center justify-between">
              <form
                className="w-full"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCreateReply();
                }}
              >
                <input
                  type="text"
                  className="border-transparent w-full rounded-full focus:outline-none focus:border-none  focus:ring-0 active:ring-0 h-full"
                  placeholder="Add a Reply..."
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </form>
              <div className="flex gap-1">
                <div className="w-9 h-9 rounded-full hover:bg-gray flex justify-center items-center transition-all">
                  <BsEmojiSmile className="text-lg text-darkgray" />
                </div>
                <div
                  className="w-9 h-9 rounded-full hover:bg-gray flex justify-center items-center transition-all"
                  //   onClick={() => uploadImage.current.click()}
                >
                  <input
                    type="file"
                    // ref={uploadImage}
                    className="hidden"
                    // onChange={handleAddImage}
                  />
                  <BsImageFill className="text-lg text-darkgray" />
                </div>
              </div>
            </div>
            {/* {image && (
              <div className="relative px-4 py-2 border-t-[1px]">
                <div className="absolute top-0 right-0">
                  <div
                    className="h-8 w-8 rounded-full mr-5 mt-3 bg-white transition-all hover:bg-gray flex justify-center items-center text-xl"
                    onClick={() => {
                      setImage(null);
                    }}
                  >
                    <IoMdClose />
                  </div>
                </div>
                <img src={image} alt="imageUpload" />
              </div>
            )} */}
          </div>
        </div>
      </div>

      {data.length > 0 && data.map((el, idx) => <Reply data={el} key={idx} />)}
    </>
  );
}

export default ReplyPostComment;
