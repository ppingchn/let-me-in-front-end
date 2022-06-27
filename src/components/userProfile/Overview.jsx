import { useState } from "react";
import { AiOutlinePlus, AiOutlineEdit } from "react-icons/ai";
import ModalEditOverView from "./ModalEditOverview";

export default function Overview({ companySize }) {
  const [modalEditOverview, setModalEditOverview] = useState(false);

  return (
    <div className="h-fit w-full sm:min-w-[636px] border-[1px] rounded-lg border-slate-200 bg-white">
      <ModalEditOverView
        open={modalEditOverview}
        setOpen={setModalEditOverview}
      />
      <div className="flex justify-between items-center px-5 py-3">
        <h1 className="font-bold">Overview</h1>
        <div className="flex gap-2">
          {/* <div className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray cursor-pointer">
            <AiOutlinePlus className="text-2xl" />
          </div> */}
          <div
            className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray cursor-pointer"
            onClick={() => setModalEditOverview(true)}
          >
            <AiOutlineEdit className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-5 py-3">
        <p className="text-sm text-darkgray">
          We are DNEG, one of the world's leading visual effects, animation and
          stereo conversion companies for feature film and television, with
          studios in London, Vancouver, Mumbai, Los Angeles, Chennai, Montréal,
          Chandigarh, Bangalore and Toronto. Since the opening of our first
          studio in London in 1998, we’ve always focused on building close
          working relationships with filmmakers. We thrive on collaboration and
          the creative energy this provides, and we are dedicated to delivering
          excellence on every project we are involved with. We’ve brought home
          the Oscar for ‘Best VFX’ for six out of the last eight years. In
          total, we’ve been honoured with 7 Academy Award wins, 7 BAFTA Awards
          and 18 Visual Effects Society Awards for our visual effects work on
          shows like 'Dune', 'Foundation', 'Last Night in Soho', 'TENET', ‘First
          Man’, ‘Altered Carbon’, ‘Blade Runner 2049’, ‘Dunkirk’, ‘Ex Machina’,
          ‘Interstellar’, ‘Inception’ and ‘Harry Potter and The Deathly Hallows
          Part 2’. Recent movie projects include: 'Dune', 'The Matrix
          Resurrections', 'Venom: Let There Be Carnage', 'Ghostbusters:
          Afterlife', 'No Time To Die', 'Jungle Cruise', 'F9: The Fast Saga',
          'Zack Snyder’s Justice League' and 'TENET'. DNEG Episodic recent
          projects include: 'Foundation', 'Doctor Who Season 13', 'The Wheel of
          Time', ‘Shadow and Bone, ‘The Irregulars’, and ‘Cursed’. DNEG
          Animation has recently delivered DNEG's very first major animated
          feature - ‘Ron’s Gone Wrong’ – for Twentieth Century Fox and Locksmith
          Animation, along with animated short 'Mr. Spam Gets a New Hat'.
        </p>
        <div className="flex flex-col gap-2">
          <span className="font-bold">Website</span>
          <a
            className="text-sm text-darkgray hover:text-blue hover:underline"
            href="http://www.dneg.com"
          >
            http://www.dneg.com
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold">Company size</span>
          <span className="text-sm text-darkgray hover:text-blue hover:underline">
            {`${companySize} employees`}
          </span>
        </div>
      </div>
    </div>
  );
}
