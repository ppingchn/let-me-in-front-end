import moment from 'moment';
export default function MessageElementWithAvatar({ message }) {
  // const time = moment(message.created_at).format('hh:mm:ss a');
  const time = moment(message?.createdAt).fromNow();
  console.log(message);

  return (
    <div className="flex gap-4 ">
      {/* avatar */}
      <img
        className="inline-block h-10 w-10 sm:h-10 sm:w-10 rounded-full cursor-pointer"
        src={message?.Sender.profilePic}
        alt=""
      />
      {/* comment box */}
      <div className="flex flex-col w-full gap-1 rounded">
        <div className="flex flex-col w-full rounded gap-2">
          {/* name and position */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <span className="font-bold py-0">
                {message?.Sender.UserDetails[0]?.firstName
                  ? message?.Sender.UserDetails[0]?.firstName
                  : message?.Sender.CompanyDetails[0]?.companyName}
              </span>
              <span className="text-xs text-darkgray">{time}</span>
            </div>
          </div>
          <span className="text-sm">{message.message}</span>
        </div>
      </div>
    </div>
  );
}
