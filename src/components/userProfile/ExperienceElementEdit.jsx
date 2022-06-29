import { useNavigate } from 'react-router-dom';
import CompanyAvatar from '../ui/CompanyAvatar';
import { AiOutlineEdit } from 'react-icons/ai';
import ModalEditExperience from './ModalEditExperience';
import { useState } from 'react';

export default function ExperienceElementEdit({
  companyAvatar,
  position,
  companyName,
  contract,
  date,
  district,
  province,
  country,
  workDescription,
}) {
  const navigate = useNavigate();

  const [modalEditExperience, setModalEditExprience] = useState(false);
  return (
    <div className="flex w-11/12 justify-between gap-3 py-4 border-b-[1px] border-gray mx-5 p-2">
      <div className="flex gap-2">
        <ModalEditExperience
          open={modalEditExperience}
          setOpen={setModalEditExprience}
          companyAvatar={companyAvatar}
          position={position}
          companyName={companyName}
          contract={contract}
          date={date}
          district={district}
          province={province}
          country={country}
          workDescription={workDescription}
        />
        <CompanyAvatar width={10} height={10} picture={companyAvatar} />
        <div className="flex flex-col gap-3">
          {/* position */}
          <div className="flex flex-col">
            <span className="font-bold">{position}</span>
            {/* company */}
            <div className="flex gap-1">
              <span className="text-sm">{companyName}</span>
              <span className="text-sm">·</span>
              <span className="text-sm">{contract}</span>
            </div>
            {/* time length */}
            <span className="text-xs text-darkgray">
              {/* Apr 2022 - Present · 3 mos */}
              {`${date} · 3 mos`}
            </span>
            {/* address */}
            <span className="text-xs text-darkgray">
              {`${district}, ${province}, ${country}`}
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div
          className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray cursor-pointer"
          onClick={() => {
            setModalEditExprience(true);
          }}
        >
          <AiOutlineEdit className="text-2xl" />
        </div>
      </div>
    </div>
  );
}
