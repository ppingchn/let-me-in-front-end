import { useEffect, useState } from 'react';
import AddToYourFeed from '../Home/AddToYourFeed';
import MainProfile from '../userProfile/MainProfile';
import Experience from '../userProfile/Experience';
import Educations from '../userProfile/Education';
import Skill from '../userProfile/Skill';
import AboutCompany from '../userProfile/AboutCompany';
import PagePosts from '../userProfile/PagePosts';
import CreateJobAlert from '../userProfile/CreateJobAlert';
import RecentlyPostedJob from '../userProfile/RecentlyPostedJob';
import Overview from '../userProfile/Overview';
import Location from '../userProfile/Location';
import Employee from '../userProfile/Employee';
import PeopleYouMayKnow from '../userProfile/PeopleYouMayKnow';

export default function UserPage() {
  const [menuSelect, setMenuSelect] = useState('Home');
  const [isUser, setIsUser] = useState(true);

  useEffect(() => {}, []);

  return (
    <div className="relative top-14 bg-gray w-full sm:w-screen px-5 py-5 h-fit">
      <div className="h-full flex flex-col w-full sm:flex-row gap-5 mx-auto xl:w-[1128px] rounded-lg">
        {/* left section */}
        <div className="flex-auto w-full sm:min-w-[750px] rounded-lg gap-5">
          {/* profile */}
          <div className="flex flex-col gap-5 md:sticky md:top-16">
            <MainProfile
              setMenuSelect={setMenuSelect}
              menuSelect={menuSelect}
              role={'user'}
              isUser={isUser}
            />
            {true ? (
              // this zone for user component
              <>
                <Experience isUser={isUser} />
                <Educations isUser={isUser} />
                <Skill isUser={isUser} />
              </>
            ) : (
              // if user === 'company' then check menuselect
              <>
                {menuSelect === 'Home' && (
                  <>
                    <AboutCompany setMenuSelect={setMenuSelect} />
                    <PagePosts setMenuSelect={setMenuSelect} />
                  </>
                )}
                {menuSelect === 'About' && (
                  <>
                    <Overview />
                    <Location />
                  </>
                )}
                {menuSelect === 'Jobs' && (
                  <>
                    <CreateJobAlert companyName={'DNEG'} />
                    <RecentlyPostedJob />
                  </>
                )}
                {menuSelect === 'People' && (
                  <>
                    <Employee />
                    <PeopleYouMayKnow />
                  </>
                )}
              </>
            )}
          </div>
        </div>

        {/* right section */}
        <div className="hidden lg:flex lg:flex-auto w-[320px] min-w-[320px] max-w-[320px]">
          <AddToYourFeed />
        </div>
      </div>
    </div>
  );
}
