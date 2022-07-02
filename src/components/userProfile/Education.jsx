import React, { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import EducationElement from './EducationElement';
import { AiOutlinePlus, AiOutlineEdit } from 'react-icons/ai';
import ModalAddEducation from './ModalAddEducation';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function Educations(props) {
  const { isUser, education } = props;
  const { id } = useParams();
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const [modalEducation, setModalEducation] = useState(false);

  return (
    <div className="h-fit w-full sm:min-w-[636px] border-[1px] rounded-lg border-slate-200 bg-white">
      <ModalAddEducation open={modalEducation} setOpen={setModalEducation} />
      <div className="flex justify-between items-center px-5 py-3">
        <h1 className="font-bold">Educations</h1>
        <div className="flex gap-2">
          {isUser && (
            <>
              <div
                className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray cursor-pointer"
                onClick={() => setModalEducation(true)}
              >
                <AiOutlinePlus className="text-2xl" />
              </div>
              <div
                className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray cursor-pointer"
                onClick={() => navigate(`/user/${id}/details/education`)}
              >
                <AiOutlineEdit className="text-2xl" />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col w-full">
        {!showMore
          ? education?.slice(0, 5).map((ele) => {
              return (
                <EducationElement
                  key={uuidv4()}
                  university={ele.university}
                  degree={ele.degree}
                  field={ele.field}
                  yearStart={ele.yearStart}
                  yearEnd={ele.yearEnd}
                />
              );
            })
          : education?.map((ele) => {
              return (
                <EducationElement
                  key={uuidv4()}
                  university={ele.university}
                  degree={ele.degree}
                  field={ele.field}
                  yearStart={ele.yearStart}
                  yearEnd={ele.yearEnd}
                />
              );
            })}

        {/* if experience more than six Showmore appear */}

        <button
          className="flex justify-center items-center gap-2 w-full hover:bg-gray border-t-[1px] border-gray transition-all py-3 font-bold text-darkgray"
          onClick={() => setShowMore(!showMore)}
        >
          {!showMore ? (
            <>
              <span>Show all 6 Educations</span>
              <HiArrowNarrowRight className="text-xl" />
            </>
          ) : (
            <span>Show less</span>
          )}
        </button>
      </div>
    </div>
  );
}
