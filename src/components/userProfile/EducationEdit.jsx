import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ExperienceElementEdit from './ExperienceElementEdit';
import { AiOutlinePlus, AiOutlineEdit } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
import { getEducation } from '../../api/userApi';
import ModalAddEducation from './ModalAddEducation';
import EducationElementEdit from './EducationElementEdit';

export default function EducationEdit(props) {
  const { isUser } = props;
  const navigate = useNavigate();
  const { id } = useParams();
  const [modalEducation, setModalEducation] = useState(false);
  const [education, setEducation] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchEducation = async () => {
    try {
      setLoading(true);
      const resEducation = await getEducation(id);
      setEducation(resEducation.data.educations);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchEducation();
  }, []);
  console.log(education);

  return (
    <>
      {loading ? (
        <div className="h-fit w-full sm:min-w-[636px] border-[1px] rounded-lg border-slate-200 bg-white">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-200 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-fit w-full sm:min-w-[636px] border-[1px] rounded-lg border-slate-200 bg-white">
          <ModalAddEducation
            open={modalEducation}
            setOpen={setModalEducation}
            fetchEducation={fetchEducation}
          />
          <div className="flex justify-between items-center px-5 py-3">
            <div className="flex w-full items-center justify-between gap-5">
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 flex justify-center items-center rounded-full hover:bg-gray cursor-pointer"
                  onClick={() => {
                    navigate(`/user/${id}`);
                  }}
                >
                  <BsArrowLeft className="text-xl" />
                </div>
                <h1 className="font-bold">Education</h1>
              </div>
              <div
                className="w-9 h-9 flex justify-center items-center rounded-full hover:bg-gray cursor-pointer"
                onClick={() => {
                  setModalEducation(true);
                }}
              >
                <AiOutlinePlus className="text-xl" />
              </div>
            </div>
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
            {education?.map((ele) => {
              return (
                <EducationElementEdit
                  profilePic={ele.company?.User?.profilePic}
                  key={uuidv4()}
                  id={ele.id}
                  university={ele.university}
                  degree={ele.degree}
                  field={ele.field}
                  yearStart={ele.yearStart}
                  yearEnd={ele.yearEnd}
                  fetchEducation={fetchEducation}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
