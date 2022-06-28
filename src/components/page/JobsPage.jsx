import AddToYourFeed from "../Home/AddToYourFeed";
import LeftSideJobs from "../Jobs/LeftSideJobs";
import MiddleBottomSideJob from "../Jobs/MiddleBottomSideJob";
import MiddleTopSideJobs from "../Jobs/MiddleTopSideJobs";

function JobsPage() {
  return (
    <div className="relative top-14 bg-gray w-full sm:w-screen px-10 py-5 h-fit">
      <div className="h-full flex flex-col w-full sm:flex-row gap-5 mx-auto lg:w-[1200px] xl:w-[1200px] rounded-lg">
        {/* left section */}
        <div className="flex-auto w-full sm:w-11 md:w-11 lg:w-16 rounded-lg gap-5 ">
          <LeftSideJobs />
        </div>

        {/* middle section */}
        <div className="flex flex-col flex-auto w-full sm:w-[500px] gap-5">
          <MiddleTopSideJobs />
          <MiddleBottomSideJob />
          {/* <Inviatation /> */}
          {/* PeopleMayKnown */}
          {/* <PeopleMayKnown /> */}
        </div>
        <div className="hidden lg:flex lg:flex-auto w-[250px]">
          <AddToYourFeed />
        </div>
      </div>
    </div>
  );
}

export default JobsPage;
