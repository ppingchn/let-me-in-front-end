export default function MessageElementWithAvatar() {
  return (
    <div className="flex gap-4">
      {/* avatar */}
      <img
        className="inline-block h-10 w-10 sm:h-10 sm:w-10 rounded-full cursor-pointer"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQHcpbUcANnETg/profile-displayphoto-shrink_100_100/0/1654666437384?e=1661385600&v=beta&t=EPU0QYVtly7ZvonPgyOsbm4FjOftaxZf6TpEPio-1CE"
        alt=""
      />
      {/* comment box */}
      <div className="flex flex-col w-full gap-1 rounded">
        <div className="flex flex-col w-full rounded gap-2">
          {/* name and position */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <span className="font-bold py-0">Pita Limjaroenrat</span>
              <span className="text-xs text-darkgray">19hr</span>
            </div>
            <span className="text-xs text-darkgray">
              Elected Member of Parliament, Thailand
            </span>
          </div>
          <span className="text-sm">
            this is comment ...
            <br />
            from Pita.
          </span>
        </div>
      </div>
    </div>
  );
}
