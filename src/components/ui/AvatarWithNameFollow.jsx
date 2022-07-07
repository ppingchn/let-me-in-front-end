import { IoMdAdd } from 'react-icons/io';

export default function AvatarWithNameFollow() {
  return (
    <div className="flex gap-2">
      <img
        className="inline-block h-12 w-12 sm:h-12 sm:w-12 rounded-full cursor-pointer"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQHcpbUcANnETg/profile-displayphoto-shrink_100_100/0/1654666437384?e=1661385600&v=beta&t=EPU0QYVtly7ZvonPgyOsbm4FjOftaxZf6TpEPio-1CE"
        alt=""
      />
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <span className="font-bold">Pita Limjaroenrat</span>
          <span className="text-xs text-darkgray">
            Elected Member of Parliament, Thailand
          </span>
        </div>
        <div className="w-24 h-7 px-3 border-[1px] hover:border-[2px] bg-white hover:bg-gray border-darkgray rounded-full transition-all cursor-pointer">
          <div className="w-full h-full flex items-center justify-center">
            <IoMdAdd className="text-darkgray" />
            <span className="text-sm text-darkgray">Follow</span>
          </div>
        </div>
      </div>
    </div>
  );
}
