import CompanyAvatar from "../ui/CompanyAvatar";

export default function ExperienceElement() {
  return (
    <div className="flex w-11/12 gap-3 py-4 border-b-[1px] border-gray mx-5 p-2">
      <CompanyAvatar
        width={10}
        height={10}
        picture={
          "https://media-exp1.licdn.com/dms/image/C560BAQF8CVQ4bI6aAg/company-logo_100_100/0/1638025513053?e=1663804800&v=beta&t=RCBtmLKrDETtAvUN2nawfZIURqF38xi0GaqsWOA3OZU"
        }
      />
      <div className="flex flex-col gap-3">
        {/* position */}
        <div className="flex flex-col">
          <span className="font-bold">Graphic Designer</span>
          {/* company */}
          <div className="flex gap-1">
            <span className="text-sm">Chillchat</span>
            <span className="text-sm">·</span>
            <span className="text-sm">Full-time</span>
          </div>
          {/* time length */}
          <span className="text-xs text-darkgray">
            Apr 2022 - Present · 3 mos
          </span>
          {/* address */}
          <span className="text-xs text-darkgray">
            Bangkok, Bangkok City, Thailand
          </span>
        </div>
        {/* job description */}
        <span className="text-xs text-darkgray">
          - breakdown a TV show's script or footage into a storyboard and
          prepared 2D asset for an animator. - Task manage and coordinate
          between team member and lead. - Design online and offline marketing
          asset ( Banner / Logo / Page cover / etc). For ThaiPBS kids TV series
          สังคมสนุกคิด. Tools : adobe photoshop / adobe illustration / google
          sheet
        </span>
      </div>
    </div>
  );
}
