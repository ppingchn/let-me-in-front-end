export default function AvatarWithName() {
  return (
    <div className="flex gap-2">
      <img
        className="inline-block h-12 w-12 sm:h-12 sm:w-12 rounded-full cursor-pointer"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQHcpbUcANnETg/profile-displayphoto-shrink_100_100/0/1654666437384?e=1661385600&v=beta&t=EPU0QYVtly7ZvonPgyOsbm4FjOftaxZf6TpEPio-1CE"
        alt=""
      />
      <div className="flex flex-col gap-1">
        <span className="font-bold py-0">Pita Limjaroenrat</span>
        <span className="text-xs text-darkgray">
          Elected Member of Parliament, Thailand
        </span>
      </div>
    </div>
  );
}
