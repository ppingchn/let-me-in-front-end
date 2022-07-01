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
import { getEducation, getUserById } from '../../api/userApi';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

export default function UserPage() {
  const [menuSelect, setMenuSelect] = useState('Home');
  const [isUser, setIsUser] = useState(true);
  const [loading, setLoading] = useState(false);
  const [userById, setUserById] = useState(null);
  const [education, setEducation] = useState(null);
  const { id } = useParams();

  const { user } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const res = await getUserById(id);
        const resEducation = await getEducation(id);
        setUserById(res.data.user);
        setEducation(resEducation.data.educations);

        if (user.id === res.data.user.id) {
          setIsUser(true);
        } else {
          setIsUser(false);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      {loading ? (
        <div className="relative top-14 bg-gray w-full sm:w-screen px-5 py-5 h-fit">
          <div className="h-fit p-10 w-full sm:min-w-[636px] border-[1px] rounded-lg border-slate-200 bg-white">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative top-14 bg-gray w-full sm:w-screen px-5 py-5 h-fit">
          <div className="h-full flex flex-col w-full sm:flex-row gap-5 mx-auto xl:w-[1128px] rounded-lg">
            {/* left section */}
            <div className="flex-auto w-full sm:min-w-[750px] rounded-lg gap-5">
              {/* profile */}
              <div className="flex flex-col gap-5 md:sticky md:top-16">
                <MainProfile
                  setMenuSelect={setMenuSelect}
                  menuSelect={menuSelect}
                  role={userById?.role}
                  isUser={isUser}
                  coverPic={userById?.coverPic}
                  profilePic={userById?.profilePic}
                  firstName={userById?.userDetail?.firstName}
                  lastName={userById?.userDetail?.lastName}
                  province={userById?.province}
                  country={userById?.country}
                  companyName={userById?.companyDetail?.companyName}
                />
                {userById?.role === 'user' ? (
                  // this zone for user component
                  <>
                    <Experience isUser={isUser} />
                    <Educations isUser={isUser} education={education} />
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
                        <Location
                          location={userById?.companyDetail?.location}
                        />
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
      )}
    </>
  );
}
