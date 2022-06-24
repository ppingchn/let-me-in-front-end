import CompanyAvatar from "../ui/CompanyAvatar";
import { BsCameraFill } from "react-icons/bs";
import { useRef, useState } from "react";

export default function MainProfile() {
  // set coverImage and uploadEl
  const [coverImage, setCoverImage] = useState(null);
  const uploadImage = useRef();

  const handleChangeCover = (e) => {
    if (e.target.files[0]) {
      const urlcover = URL.createObjectURL(e.target.files[0]);
      setCoverImage(urlcover);
    }
  };

  return (
    <div className="h-fit w-full sm:min-w-[636px] border-[1px] rounded-lg border-slate-200">
      {/* avatar */}
      <div className="h-fit w-full border-b-[1px] rounded-lg border-gray bg-white pb-3">
        {/* cover image */}
        <div>
          <img
            className="h-48 w-full rounded-t-lg bg-center bg-cover"
            src={
              coverImage
                ? coverImage
                : `https://media-exp1.licdn.com/dms/image/C5616AQF-aTScD20evQ/profile-displaybackgroundimage-shrink_350_1400/0/1647998353867?e=1661385600&v=beta&t=ywutaMC8DHiEag6UEHMKJAir9nvxvXyma0twjdl8ruQ`
            }
            alt="coverPhoto"
          />
          <input
            type="file"
            ref={uploadImage}
            className="hidden"
            onChange={handleChangeCover}
          />
          <div
            className="flex justify-center items-center absolute w-10 h-10 right-0 top-0 bg-white rounded-full mt-5 mr-5 cursor-pointer drop-shadow-sm"
            onClick={() => uploadImage.current.click()}
          >
            <BsCameraFill className="text-blue text-xl" />
          </div>
        </div>
        {/* profile image */}
        <div className="h-14 w-full relative flex justify-start pl-5">
          <div className="absolute bottom-2">
            <img
              class="inline-block h-40 w-40 sm:h-40 sm:w-40 rounded-full cursor-pointer border-4 border-white"
              src="https://media-exp1.licdn.com/dms/image/C5635AQFLYHLx2MfUTg/profile-framedphoto-shrink_400_400/0/1599535039224?e=1656594000&v=beta&t=O9y8eKEW1-wXS4dTovWyH7Nd17POXUuH0WvZFgFGLfA"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row px-3 gap-2 sm:gap-10">
          <div className="w-full sm:w-4/6 relative flex flex-col items-start px-3 gap-4">
            {/* profile common detail */}
            <div className="flex flex-col">
              <span className="text-black font-bold text-2xl">
                Tarinee (Bao) Suriyawongpaisal
              </span>
              <span className="text-darkgray">
                Graphic designer at ChillChat Company
              </span>
              <div className="flex gap-2 text-sm">
                <span className="text-center text-darkgray">
                  Bangkok City, Thailand
                </span>
                <span className="text-center text-darkgray">•</span>
                <span className="text-center text-blue hover:underline cursor-pointer">
                  Contact info
                </span>
              </div>
            </div>
            {/* button message */}
            <div className="flex gap-2">
              <button className="flex items-center px-4 py-[5px] bg-blue hover:bg-sky-900 transition-all text-white rounded-full font-bold">
                Message
              </button>
              <button className="flex items-center px-4 py-[5px] bg-white rounded-full transition-all hover:bg-gray text-darkgray border-[1px] font-bold">
                More
              </button>
            </div>
            {/* Status */}
            <div className="flex flex-col w-full bg-gray px-4 py-2 rounded-xl">
              <span className="font-bold">Open to work</span>
              <span className="text-sm">
                Concept Artist and Graphic Designer
              </span>
              <span className="text-sm text-blue cursor-pointer font-bold">
                See all details
              </span>
            </div>
          </div>
          <div className="hidden w-2/6 sm:flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <CompanyAvatar width={8} height={8} />
              <span>Chulalongkorn University</span>
            </div>
            <div className="flex items-center gap-2">
              <CompanyAvatar width={8} height={8} />
              <span>Chulalongkorn University</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
