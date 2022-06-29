import React, { useState } from 'react';
import ExperienceElementEdit from './ExperienceElementEdit';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { AiOutlinePlus, AiOutlineEdit } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import ModalAddExperience from './ModalAddExperience';
import { useNavigate, useParams } from 'react-router-dom';

export default function ExperienceEdit(props) {
  const { isUser } = props;
  const navigate = useNavigate();
  const { id } = useParams();
  const [modalExperience, setModalExprience] = useState(false);

  return (
    <div className="h-fit w-full sm:min-w-[636px] border-[1px] rounded-lg border-slate-200 bg-white">
      <ModalAddExperience open={modalExperience} setOpen={setModalExprience} />
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
        <ExperienceElementEdit
          companyAvatar={
            'https://yt3.ggpht.com/ytc/AKedOLTwo0tz0TxL0neMi7zOhFMcmypRh5XphVFaG4fkIQ=s48-c-k-c0x00ffffff-no-rj'
          }
          position={'Graphic Designer'}
          companyName={'Chillchat'}
          contract={'Full-time'}
          date={'Apr 2022 - Present'}
          district={'Bangkok'}
          province={'Bangkok City'}
          country={'Thailand'}
          workDescription={
            "- breakdown a TV show's script or footage into a storyboard and prepared 2D asset for an animator. - Task manage and coordinate between team member and lead. - Design online and offline marketing asset ( Banner / Logo / Page cover / etc). For ThaiPBS kids TV series สังคมสนุกคิด. Tools : adobe photoshop / adobe illustration / google sheet"
          }
        />
        <ExperienceElementEdit
          companyAvatar={
            'https://yt3.ggpht.com/ytc/AKedOLTwo0tz0TxL0neMi7zOhFMcmypRh5XphVFaG4fkIQ=s48-c-k-c0x00ffffff-no-rj'
          }
          position={'Graphic Designer'}
          companyName={'Chillchat'}
          contract={'Full-time'}
          date={'Apr 2022 - Present'}
          district={'Bangkok'}
          province={'Bangkok City'}
          country={'Thailand'}
          workDescription={
            "- breakdown a TV show's script or footage into a storyboard and prepared 2D asset for an animator. - Task manage and coordinate between team member and lead. - Design online and offline marketing asset ( Banner / Logo / Page cover / etc). For ThaiPBS kids TV series สังคมสนุกคิด. Tools : adobe photoshop / adobe illustration / google sheet"
          }
        />
        <ExperienceElementEdit
          companyAvatar={
            'https://yt3.ggpht.com/ytc/AKedOLTwo0tz0TxL0neMi7zOhFMcmypRh5XphVFaG4fkIQ=s48-c-k-c0x00ffffff-no-rj'
          }
          position={'Animation'}
          companyName={'Chillchat'}
          contract={'Full-time'}
          date={'Apr 2022 - Present'}
          district={'Bangkok'}
          province={'Bangkok City'}
          country={'Thailand'}
          workDescription={
            "- breakdown a TV show's script or footage into a storyboard and prepared 2D asset for an animator. - Task manage and coordinate between team member and lead. - Design online and offline marketing asset ( Banner / Logo / Page cover / etc). For ThaiPBS kids TV series สังคมสนุกคิด. Tools : adobe photoshop / adobe illustration / google sheet"
          }
        />
      </div>
    </div>
  );
}
