import ProfileMayKnown from "./ProfileMayKnown ";

function PeopleMayKnown() {
  return (
    <div className="h-fit w-full flex flex-col gap-2 bg-white border-[1px] rounded-lg border-slate-200 p-3">
      <div className="flex justify-between">
        <span>People you may know from Toyota Motor Corporation</span>
        <span className="text-gray-500 font-medium">See all</span>
      </div>
      <div className="grid grid-cols-2 gap-5  md:grid-cols-3  ">
        <ProfileMayKnown />
        <ProfileMayKnown />
        <ProfileMayKnown />
        <ProfileMayKnown />
        <ProfileMayKnown />
        <ProfileMayKnown />
      </div>
    </div>
  );
}

export default PeopleMayKnown;
