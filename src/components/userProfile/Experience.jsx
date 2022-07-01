import React, { useEffect, useState } from 'react';
import ExperienceElement from './ExperienceElement';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { AiOutlinePlus, AiOutlineEdit } from 'react-icons/ai';
import ModalAddExperience from './ModalAddExperience';
import { useNavigate, useParams } from 'react-router-dom';
import { getExperience } from '../../api/userApi';
import { v4 as uuidv4 } from 'uuid';

export default function Experience(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isUser } = props;

  const [modalExperience, setModalExperience] = useState(false);
  const [experience, setExperience] = useState(null);
  const [showMore, setShowMore] = useState(false);
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
        <div className="h-fit p-5 w-full sm:min-w-[636px] rounded-lg bg-white">
          <div className="h-fit w-full sm:min-w-[636px] rounded-lg bg-white">
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
        </div>
      ) : (
        <div className="h-fit w-full sm:min-w-[636px] border-[1px] rounded-lg border-slate-200 bg-white">
          <ModalAddExperience
            open={modalExperience}
            fetchExperience={fetchExperience}
            setOpen={setModalExperience}
          />
          <div className="flex justify-between items-center px-5 py-3">
            <h1 className="font-bold">Experiences</h1>
            <div className="flex gap-2">
              {isUser && (
                <>
                  <div
                    className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray cursor-pointer"
                    onClick={() => setModalExperience(true)}
                  >
                    <AiOutlinePlus className="text-2xl" />
                  </div>
                  <div
                    className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray cursor-pointer"
                    onClick={() => navigate(`/user/${id}/details/experience`)}
                  >
                    <AiOutlineEdit className="text-2xl" />
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col w-full">
            {!showMore
              ? experience?.slice(0, 5).map((ele) => {
                  return (
                    <ExperienceElement
                      profilePic={ele.company?.User?.profilePic}
                      key={uuidv4()}
                      companyName={ele.companyName}
                      position={ele.position}
                      workDescription={ele.workDescription}
                      yearStart={ele.yearStart}
                      yearEnd={ele.yearEnd}
                    />
                  );
                })
              : experience?.map((ele) => {
                  return (
                    <ExperienceElement
                      profilePic={ele.company?.User?.profilePic}
                      key={uuidv4()}
                      companyName={ele.companyName}
                      position={ele.position}
                      workDescription={ele.workDescription}
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
                  <span>Show all 6 experiences</span>
                  <HiArrowNarrowRight className="text-xl" />
                </>
              ) : (
                <span>Show less</span>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
