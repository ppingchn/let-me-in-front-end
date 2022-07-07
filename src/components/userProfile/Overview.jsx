import { useState } from 'react';
import { AiOutlinePlus, AiOutlineEdit } from 'react-icons/ai';
import ModalEditOverView from './ModalEditOverview';
import JoditEditor from 'jodit-react';

export default function Overview({
  websiteLink,
  overview,
  companySize,
  isUser,
}) {
  const [modalEditOverview, setModalEditOverview] = useState(false);
  const [overviewTmp, setOverviewTmp] = useState('<div>test<div/>');

  return (
    <div className="h-fit w-full sm:min-w-[636px] border-[1px] rounded-lg border-slate-200 bg-white">
      <ModalEditOverView
        open={modalEditOverview}
        setOpen={setModalEditOverview}
        setOverviewTmp={setOverviewTmp}
        overviewTmp={overviewTmp}
      />
      <div className="flex justify-between items-center px-5 py-3">
        <h1 className="font-bold">Overview</h1>
        <div className="flex gap-2">
          {isUser && (
            <div
              className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray cursor-pointer"
              onClick={() => setModalEditOverview(true)}
            >
              <AiOutlineEdit className="text-2xl" />
            </div>
          )}
        </div>
      </div>
      <div className="flex prose flex-col gap-4 px-5 py-3">
        <span dangerouslySetInnerHTML={{ __html: overview }} />
        <div className="flex flex-col gap-2">
          <span className="font-bold">Website</span>
          <a
            className="text-sm text-darkgray hover:text-blue hover:underline"
            href="http://www.dneg.com"
          >
            {websiteLink}
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
