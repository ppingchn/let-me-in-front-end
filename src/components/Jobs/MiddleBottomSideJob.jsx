import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function MiddleBottomSideJob() {
  const CompanyArray = [
    {
      position: 'Project management engineer',
      companyName: 'Google',
      location: 'Bangkok,Bangkok City, Thailand',
      workEnvironment: 'Remote',
      updatedAtPost: '1 week ago',
    },
    {
      position: 'Project management engineer',
      companyName: 'Google',
      location: 'Bangkok,Bangkok City, Thailand',
      workEnvironment: 'Remote',
      updatedAtPost: '1 week ago',
    },
    {
      position: 'Project management engineer',
      companyName: 'Google',
      location: 'Bangkok,Bangkok City, Thailand',
      workEnvironment: 'Remote',
      updatedAtPost: '1 week ago',
    },
  ];
  return (
    <div className="h-fit w-full  border-b-[1px]  rounded-lg border-gray bg-white px-4 py-4">
      {/* Header: Suggested job searches */}
      <div>
        <p className="text-lg font-medium">Recommended for you</p>
        <p className="text-sm text-gray-500">
          Based on your profile and search history
        </p>
      </div>
      {/* Body: Job searches */}
      <div className="flex flex-col  mt-3 ">
        {/* Suggest job searches */}
        {CompanyArray.map((el, idx) => {
          return (
            <div className="py-3">
              <div className="grid grid-cols-8 gap-3 border-b-[1px] border-gray-200 pb-4">
                {/* Img */}
                <img
                  width="56"
                  src="https://media-exp1.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_100_100/0/1519856215226?e=1664409600&amp;v=beta&amp;t=AixSwaKqIgJMn2IGCOShWaFpuXBZ8jro06PcuDikRUo"
                  loading="lazy"
                  height="56"
                  alt="google logo"
                  id="ember169"
                  className="col-1 ivm-view-attr__img--centered EntityPhoto-square-3  lazy-image ember-view"
                />
                {/* middle */}
                <div className="col-span-6">
                  <p className="text-lg text-blue font-medium">{el.position}</p>
                  <p className="text-sm">{el.companyName}</p>
                  <div className="flex gap-2">
                    <p className="text-sm text-gray-500">{el.location}</p>
                    <p className="text-sm text-gray-500">
                      ({el.workEnvironment})
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                      className="text-green-700"
                    >
                      <path d="M12 20a8 8 0 010-16 7.91 7.91 0 014.9 1.69l-1.43 1.42a6 6 0 101.42 1.42l3.82-3.82a1 1 0 000-1.41A1 1 0 0020 3a1 1 0 00-.7.29l-1 1A10 10 0 1022 12h-2a8 8 0 01-8 8zm5-8a5 5 0 11-5-5 4.93 4.93 0 012.76.82l-2.24 2.24A2.24 2.24 0 0012 10a2 2 0 102 2 2.24 2.24 0 00-.07-.51l2.24-2.24A5 5 0 0117 12z"></path>
                    </svg>
                    <Link to="/" className="text-xs text-gray-500">
                      Activity recruting
                    </Link>
                  </div>
                  <div className="text-xs text-gray-500 mt-3">
                    {el.updatedAtPost}
                  </div>
                </div>
                {/* wishlist */}
                <div className="flex justify-end py-2 ">
                  <div className="flex justify-center items-center hover:bg-gray-200 h-8 w-8 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                      className="text-gray-500 "
                    >
                      <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22zm-3-1a1 1 0 011 1v12.51L12 13l-5 4.51V4z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Show all */}
      <div className="text-blue text-center font-medium py-1 ">
        <button className="px-3 py-1 hover:bg-hover-light-blue rounded-lg">
          Show all
        </button>
      </div>
    </div>
  );
}

export default MiddleBottomSideJob;
