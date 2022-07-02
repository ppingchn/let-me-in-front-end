import AddToYourFeed from '../../Home/AddToYourFeed';
import MiddleBottomSideJob from '../MiddleBottomSideJob';
import MiddleSIdeJobs from '../MiddleTopSideJobs';
import MyJobsLeft from './MyJobs/MyJobsLeft';
import MyJobsMiddle from './MyJobs/MyJobsMiddle';

function MyJobs() {
  return (
    <div className="relative top-14 bg-gray w-full sm:w-screen px-5 py-5 pb-40 h-fit">
      <div className="relative h-fit w-full grid grid-cols-8 gap-4 gap-1 bg-white border-[1px] rounded-lg border-slate-200 px-4 pt-3 pb-3  mb-3 font-medium text-lg">
        <div className="col-1">
          <i className="fa-solid fa-address-card text-[45px]"></i>
        </div>
        <div className="col-span-6 ">
          <p>Welcome to My Jobs</p>
          <span className="text-sm font-normal text-gray-500">
            To help you stay organized, we’ve made updates to the experience and
            moved some things around.
          </span>
        </div>
        <div className="absolute right-1">
          <div className=" h-8 w-8 rounded-full  hover:bg-gray-200 flex justify-center items-center text-xl text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="h-full flex flex-col w-full sm:flex-row gap-5 mx-auto lg:w-[1000px] xl:w-[1128px] rounded-lg">
        {/* left section */}
        <div className="flex-auto w-full sm:w-11 md:w-11 lg:w-16 rounded-lg gap-5 ">
          <MyJobsLeft />
        </div>

        {/* middle section */}
        <div className="flex flex-col flex-auto w-full sm:w-[500px] gap-5">
          <MyJobsMiddle />
        </div>
        <div className="hidden lg:flex lg:flex-auto w-[250px]">
          <AddToYourFeed />
        </div>
      </div>
    </div>
  );
}

export default MyJobs;
