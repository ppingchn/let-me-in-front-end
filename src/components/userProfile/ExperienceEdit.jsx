import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ExperienceElementEdit from './ExperienceElementEdit';
import { AiOutlinePlus, AiOutlineEdit } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import ModalAddExperience from './ModalAddExperience';
import { useNavigate, useParams } from 'react-router-dom';
import { getExperience } from '../../api/userApi';

export default function ExperienceEdit(props) {
  const { isUser } = props;
  const navigate = useNavigate();
  const { id } = useParams();
  const [modalExperience, setModalExprience] = useState(false);
  const [experience, setExperience] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchExperience = async () => {
    try {
      setLoading(true);
      const res = await getExperience(id);
      setExperience(res.data.result);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchExperience();
  }, []);

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
          <ModalAddExperience
            open={modalExperience}
            setOpen={setModalExprience}
            fetchExperience={fetchExperience}
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
                <h1 className="font-bold">Experiences</h1>
              </div>
              <div
                className="w-9 h-9 flex justify-center items-center rounded-full hover:bg-gray cursor-pointer"
                onClick={() => {
                  setModalExprience(true);
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
                    onClick={() => setModalExprience(true)}
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
            {experience?.map((ele) => {
              return (
                <ExperienceElementEdit
                  profilePic={ele.company?.User?.profilePic}
                  key={uuidv4()}
                  id={ele.id}
                  companyName={ele.companyName}
                  position={ele.position}
                  workDescription={ele.workDescription}
                  yearStart={ele.yearStart}
                  yearEnd={ele.yearEnd}
                  fetchExperience={fetchExperience}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
