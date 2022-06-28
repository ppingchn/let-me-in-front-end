import { FaGlobeAsia } from 'react-icons/fa';

export default function AvatarWithNameTimePost({ padding }) {
  return (
    <div
      className={`flex items-center gap-2 ${
        padding ? `px-${padding}` : `px-0`
      }`}
    >
      <img
        className="inline-block h-12 w-12 sm:h-12 sm:w-12 rounded-full cursor-pointer"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQHcpbUcANnETg/profile-displayphoto-shrink_100_100/0/1654666437384?e=1661385600&v=beta&t=EPU0QYVtly7ZvonPgyOsbm4FjOftaxZf6TpEPio-1CE"
        alt=""
      />
      <div className="flex flex-col">
        <span className="font-bold text-xs">Pita Limjaroenrat</span>
        <span className="text-xs text-darkgray">
          Elected Member of Parliament, Thailand
        </span>
        <div className="flex gap-1 items-center">
          <span className="text-xs text-darkgray">13hr</span>
          <span className="text-xs text-darkgray">•</span>
          <FaGlobeAsia className="text-darkgray text-sm" />
        </div>
      </div>
    </div>
  );
}
