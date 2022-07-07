import { useNavigate } from 'react-router-dom';
import CompanyAvatar from '../ui/CompanyAvatar';
import { AiOutlineEdit } from 'react-icons/ai';
import ModalEditExperience from './ModalEditExperience';
import { useState } from 'react';
import dayjs from 'dayjs';

export default function ExperienceElementEdit({
  id,
  position,
  companyName,
  contract,
  yearStart,
  yearEnd,
  district,
  province,
  country,
  workDescription,
  fetchExperience,
  profilePic,
}) {
  const [modalEditExperience, setModalEditExprience] = useState(false);
  return (
    <div className="flex w-11/12 justify-between gap-3 py-4 border-b-[1px] border-gray mx-5 p-2">
      <div className="flex gap-2">
        <ModalEditExperience
          fetchExperience={fetchExperience}
          open={modalEditExperience}
          setOpen={setModalEditExprience}
          idExperience={id}
          profilePic={profilePic}
          position={position}
          companyName={companyName}
          contract={contract}
          yearStart={yearStart}
          yearEnd={yearEnd}
          district={district}
          province={province}
          country={country}
          workDescription={workDescription}
        />
        <CompanyAvatar
          width={10}
          height={10}
          picture={
            profilePic
              ? profilePic
              : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAS1BMVEX////h4eGZmZnf39/j4+Pm5ub09PT7+/vs7Ozo6Oj4+Pjw8PCWlpaTk5OamprY2Nimpqa/v7/Pz8+srKyioqLHx8e+vr63t7fU1NQ98dxgAAAEVklEQVR4nO2dW3eqMBCFrQlXAyLWev7/Lz1EpPWC0FDYE8P+HvrQtXBlM5OZSchlsyGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBXkjzepVmk9Ydq0DrK0l2cJ9LNmokkTq20ZxqhafzuKht1WvWI+0HpN1aZxFmf6XqMmb2lyCT9nbyryDSXbrAj8Yhz9rhrFks32oE8cpR3NeS7aIwjV/t92/EtNObZRHktmff9cfcnfZadtIRBYpf4+QrtsRn/bsCWVFrIC5JpEbSPyMsKYBYP7fAxqM7loR3eBZx0ag58hfKsM/4tCfaTSYu6IVlCYCPRm3gzYxC9x5uQuowFLZ446nICPZGYLijQi/JmN3eauEeJ58V4UX0W4eommbNU60fLBtSl8sQtkaTAZaNMh2BXzCECJbvi8p2wRUsJnHvA9BohP0X5qEVm6mbJau0Rkept+Vx/i0SwQYWZFoGkGC9bjz6i8D0Ra0IBI2J7oQXdE5GBtAWc9nNsL7Qo7BgDU3LfAx3uA4aFz0AHivg4Y0HGGnycsQBLNxEnhbqpjJMi3VQiklpw0VTGSYFJP8Gn+xZY0pfqhriOKNUNcR0RMQ3cD2gIJZQNLaCMiJxje1SIGenLBRpUqMFNBD+DmRqWC6WoYDo2sNC6d/PBOL94EDO8GE4W+qM+HNQUiXp/OtQjGjHpYrANWh23xpQnd4n6VBqzPQ6/HExlOtyEL7NtKPeuErUq7YPm7IHCwYZGF4Fb42xEfWifLAc7gYIoHBxZREWr8DBVYeG9wqptaO2ssG5fTeW7Ql2XjURznBBpjvbBcvjVeKCwkVgV5fk+Iuooih4b/vQ/rb5MUY3YHqNwxDyXpt+3fV8V1UNw7fmf7nsRjz/ug8JnbN80n3dm1erTjPU5OYXOzbrEV3NrscaCZjRu9v4URKHzhHcbX81n3dadzZ/604zHzT4wdanz2EL/K9tkfj6ppqup0/Ga3P85OzxmbOE+PuwkGlNYzFWgc85EjQ8njPF165a3WKd1/yHMGD+f0DK9PxZ3Aoujc21uwczTTJpra6JLte3saLbVadIoGfX1aeIuX1Wfq9J2w+pcTxoi45acTJ2ouRQt0VPJ4wBqzjv87xbhf3sK//vhCr4Bh/8dP/y1GOGvp1nBmqjw17WFvzZRIumjV3rj3RS90Dv8dd7wJSf43V3gld5KYNMM1ogSG/TC3/cU/t61Few/DH8P6Qr2AcOCjeDxZhg/FT39A+GnomcqrOBcjPDPNlnB+TQrOGNo2RLci3OilpToicAVnNe2lER/ztzbhH9u4mYFZ1+u4PzSFZxBO2uNKl2LvmSu8sZDD+2YslzqCT899JvQz2TfrOBc/c2Uuy06VOS3g/4wMXFE72C/Dvc7Lt7jbotbcsd7ZnzNgEOEflfQhcDve7pyubOr13Qh3NnV8X3vmgrx3jVCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgiS/8cMRAmf+3K8AAAAAElFTkSuQmCC'
          }
        />
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
              {`${yearStart} - ${yearEnd} · ${dayjs(yearStart).diff(
                dayjs(yearEnd),
                'year',
              )} years`}
            </span>
            {/* address */}
            <span className="text-xs text-darkgray">
              {`${district}, ${province}, ${country}`}
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-2">
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
