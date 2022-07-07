import ManageMyWork from "../../ManageMyWork";
import Inviatation from "../../Inviatation";
import PeopleMayKnown from "../../PeopleMayKnown";
import ConnectionLeft from "./ConnectionLeft";

function Connections() {
  return (
    <>
     <div className="relative top-14 bg-gray w-full sm:w-screen px-5 py-5 h-fit">
      <div className="h-full flex flex-col w-full sm:flex-row gap-5 mx-auto lg:w-[1000px] xl:w-[1128px] rounded-lg">
        {/* left section */}
        <div className="flex-auto w-full sm:w-28 rounded-lg gap-5 ">
          <ConnectionLeft/>
        </div>

        {/* middle section */}
        <div className="flex flex-col flex-auto w-3  gap-5">
          {/* Invitation */}
          <Inviatation />
          {/* PeopleMayKnown */}
          {/* <PeopleMayKnown /> */}
        </div>
      </div>
    </div> 
    </>
  );
}

export default Connections;
