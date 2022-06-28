import PeopleBottomFiltered from "./PeopleBottomFiltered";
import PeopleFilter from "./PeopleFilter";

function PeopleAndFollow() {
  const bottomIdArray = [1, 2, 3, 4, 5];
  return (
    <div className="relative top-14 bg-gray w-full sm:w-screen px-5 py-5 h-fit">
      <div className="h-full flex flex-col w-full sm:flex-row gap-5 mx-auto lg:w-[1000px] xl:w-[1128px] rounded-lg">
        {/* top section */}
        <div className="flex-auto w-full sm:w-28 rounded-lg gap-5 ">
          <div>
            <PeopleFilter />
            <div className="h-fit w-full grid grid-cols-5  mb-16 text-gray-500">
              {bottomIdArray.map((el, idx) => {
                // let bottomArrayLength = bottomIdArray.length;
                // console.log(bottomArrayLength);
                return (
                  <PeopleBottomFiltered
                    index={idx}
                    //  length={bottomArrayLength}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PeopleAndFollow;
