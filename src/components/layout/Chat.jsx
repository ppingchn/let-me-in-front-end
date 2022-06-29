import Avatar from '../ui/Avatar';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { HiSearch } from 'react-icons/hi';
import { useState } from 'react';
import { useAuth } from '../../context/authContext';

export default function Chat() {
  const { user } = useAuth();
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <div
      className={`fixed ${
        toggleShow ? `bottom-2/4 lg:bottom-1/2` : `bottom-0`
      } right-0 w-72 h-12 bg-white rounded-t-xl transition-all`}
    >
      <div
        className="flex justify-between items-center border-b-[1px] border-gray h-12 p-2 border-l-[1px] border-r-[1px] border-slate-200"
        onClick={() => setToggleShow(!toggleShow)}
      >
        <div className="flex items-center gap-2">
          <div className="relative">
            <Avatar width={8} height={8} picture={user.profilePic} />
            <div className="absolute w-3 h-3 bg-green-700 bottom-[-2px] right-[-2px] rounded-full border-2 border-white"></div>
          </div>
          <span className="text-sm font-medium">Messaging</span>
        </div>
        <div>
          <div className="h-8 w-8 rounded-full hover:bg-gray flex justify-center items-center text-xl">
            {toggleShow ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
          </div>
        </div>
      </div>
      <div className="relative border-l-[1px] border-r-[1px] border-slate-200">
        <div className="flex flex-col absolute w-full h-[700px] bg-white">
          <div className="p-2">
            <div className="flex items-center p-2 bg-inputColor rounded gap-2">
              <HiSearch />
              <input
                type="search"
                placeholder="Search"
                className="bg-inputColor focus:outline-none w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
