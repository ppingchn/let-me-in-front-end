import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineEdit } from "react-icons/ai";

export default function AboutCompany({ content, setMenuSelect }) {
  content = `We are DNEG, one of the world's leading visual effects, animation and stereo conversion companies for feature film and television, with studios in London, Vancouver, Mumbai, Los Angeles, Chennai, Montréal, Chandigarh, Bangalore and Toronto.

  Since the opening of our first studio in London in 1998, we’ve always focused on building close working relationships with filmmakers. We thrive on collaboration and the creative energy this provides, and we are dedicated to delivering excellence on every project we are involved with.
  
  We’ve brought home the Oscar for ‘Best VFX’ for six out of the last eight years. In total, we’ve been honoured with 7 Academy Award wins, 7 BAFTA Awards and 18 Visual Effects Society Awards for our visual effects work on shows like 'Dune', 'Foundation', 'Last Night in Soho', 'TENET', ‘First Man’, ‘Altered Carbon’, ‘Blade Runner 2049’, ‘Dunkirk’, ‘Ex Machina’, ‘Interstellar’, ‘Inception’ and ‘Harry Potter and The Deathly Hallows Part 2’.
  
  Recent movie projects include: 'Dune', 'The Matrix Resurrections', 'Venom: Let There Be Carnage', 'Ghostbusters: Afterlife', 'No Time To Die', 'Jungle Cruise', 'F9: The Fast Saga', 'Zack Snyder’s Justice League' and 'TENET'.
  
  DNEG Episodic recent projects include: 'Foundation', 'Doctor Who Season 13', 'The Wheel of Time', ‘Shadow and Bone, ‘The Irregulars’, and ‘Cursed’.
  
  DNEG Animation has recently delivered DNEG's very first major animated feature - ‘Ron’s Gone Wrong’ – for Twentieth Century Fox and Locksmith Animation, along with animated short 'Mr. Spam Gets a New Hat'.`;

  const [showMore, setShowMore] = useState(false);
  return (
    <div className="h-fit w-full sm:min-w-[636px] border-[1px] rounded-lg border-slate-200 bg-white">
      <div className="flex justify-between items-center px-5 py-5">
        <h1 className="font-bold">About</h1>
      </div>
      <div className="flex flex-col items-start px-5 py-3">
        {content.length >= 200 ? (
          <>
            <p className="text-darkgray text-sm">
              {showMore ? content : content.slice(0, 200) + "..."}
            </p>
            <span
              className="w-full flex justify-end text-darkgray font-bold cursor-pointer hover:underline"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? `show less` : `show more`}
            </span>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="flex flex-col w-full">
        {/* if experience more than six Showmore appear */}
        <button
          className="flex justify-center items-center gap-2 w-full hover:bg-gray border-t-[1px] border-gray transition-all py-3 font-bold text-darkgray"
          onClick={() => setMenuSelect("About")}
        >
          See all details
        </button>
      </div>
    </div>
  );
}
