import Profile from '../Home/Profile';
import AddToYourFeed from '../Home/AddToYourFeed';
import Post from '../Home/Post';
import MainNotification from '../notification/MainNotification';

export default function NotificationPage() {
  return (
    <div className="relative top-14 bg-gray w-full sm:w-screen px-5 py-5 h-fit">
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
          {/* Main notifacation */}
          <MainNotification />
        </div>

        {/* right section */}
        <div className="hidden lg:flex lg:flex-auto w-[320px] min-w-[320px] max-w-[320px]">
          <AddToYourFeed />
        </div>
      </div>
    </div>
  );
}
