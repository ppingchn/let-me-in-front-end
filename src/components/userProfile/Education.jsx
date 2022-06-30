import React, { useEffect, useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import EducationElement from './EducationElement';
import { AiOutlinePlus, AiOutlineEdit } from 'react-icons/ai';
import ModalAddEducation from './ModalAddEducation';
import { useParams } from 'react-router-dom';
import { getEducation } from '../../api/userApi';

export default function Educations(props) {
  const { isUser } = props;
  const { id } = useParams();

  const [modalEducation, setModalEducation] = useState(false);
  const [education, setEducation] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        setLoading(true);
        const res = await getEducation(id);
        setEducation(res.data.educations);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchEducation();
  }, []);

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
              <div className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray cursor-pointer">
                <AiOutlineEdit className="text-2xl" />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col w-full">
        <EducationElement />
        {/* <ExperienceElement />
        <ExperienceElement />
        <ExperienceElement /> */}
        {/* if experience more than six Showmore appear */}
        <button className="flex justify-center items-center gap-2 w-full hover:bg-gray border-t-[1px] border-gray transition-all py-3 font-bold text-darkgray">
          Show all 6 Educations <HiArrowNarrowRight className="text-xl" />
        </button>
      </div>
    </div>
  );
}
