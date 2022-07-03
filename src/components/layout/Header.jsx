/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import {
  FaHome,
  FaPeopleArrows,
  FaSearch,
  FaRegUserCircle,
} from 'react-icons/fa';
import { MdWork, MdNotifications } from 'react-icons/md';
import { RiMessage2Fill } from 'react-icons/ri';
import { RiArrowDownSFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { getAllUserByLetter } from '../../api/userApi';
import { useAuth } from '../../context/authContext';

export default function Header() {
  const navigate = useNavigate();

  const [active, setActive] = useState('Home');
  const [activeSearch, setActiveSearch] = useState(false);
  const [toggleProfileMenu, setToggleProfileMenu] = useState(false);
  const [toggleSearchMobile, setToggleSearchMobile] = useState(false);
  const [search, setSearch] = useState('');
  const [userSuggest, setUserSuggest] = useState(null);
  const [companySuggest, setCompanySuggest] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user, logout } = useAuth();

  let typingTimer;

  const fetchAllUserByLetter = async (letter) => {
    try {
      clearTimeout(typingTimer);
      typingTimer = setTimeout(async () => {
        setLoading(true);
        const res = await getAllUserByLetter(letter);

        setCompanySuggest(res.data.companies);
        setUserSuggest(res.data.user);
        setLoading(false);
      }, 2000);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchUser = async (e) => {
    if (e.target.value.length < 3) {
      setUserSuggest(null);
      setCompanySuggest(null);
    } else {
      fetchAllUserByLetter(e.target.value);
    }
    setSearch(e.target.value);
  };

  return (
    <>
      <header className="w-full sm:w-screen h-14 px-5 z-10 bg-white fixed">
        <div className="flex h-full mx-auto items-center justify-between xl:w-[1128px]">
          <div className="flex items-center gap-0 sm:gap-1 w-full mr-0 md:mr-12">
            <Link to={'/home'} className="min-w-fit cursor-pointer">
              <AiFillLinkedin className="text-[48px] text-blue" />
            </Link>
            <div className="hidden md:flex flex-col min-w-full">
              <input
                name="search"
                className="w-full md:w-64 h-9 px-5 bg-inputColor border-transparent rounded sm:text-sm focus:border-blue focus:ring-0 focus:w-96 duration-300 border-2 focus:outline-none"
                placeholder="Search"
                type="search"
                onChange={handleSearchUser}
                value={search}
                autoComplete="off"
                onFocus={() => setActiveSearch(true)}
                onBlur={() => {
                  setActiveSearch(false);
                }}
              />
              {loading ? (
                <div className="relative z-10 w-full bg-white">
                  <span className="absolute w-full h-18 flex flex-col drop-shadow-sm gap-2 bg-white px-3 py-1 rounded-lg w-96">
                    loading
                  </span>
                </div>
              ) : (
                // activeSearch &&
                (companySuggest || userSuggest) && (
                  <div className="relative z-10 w-full bg-white">
                    <div className="absolute w-full h-18 flex flex-col drop-shadow-sm gap-2 bg-white py-1 rounded-lg w-96">
                      {companySuggest?.map((ele, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-gray"
                          onClick={() => {
                            navigate(`/user/${ele.userId}`);
                            setSearch(ele.companyName);
                            setCompanySuggest(null);
                            setUserSuggest(null);
                          }}
                        >
                          <span>{ele.companyName}</span>
                          <img
                            className="inline-block h-14 w-14 rounded-full"
                            src={
                              ele.profilePic ??
                              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAS1BMVEX////h4eGZmZnf39/j4+Pm5ub09PT7+/vs7Ozo6Oj4+Pjw8PCWlpaTk5OamprY2Nimpqa/v7/Pz8+srKyioqLHx8e+vr63t7fU1NQ98dxgAAAEVklEQVR4nO2dW3eqMBCFrQlXAyLWev7/Lz1EpPWC0FDYE8P+HvrQtXBlM5OZSchlsyGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBXkjzepVmk9Ydq0DrK0l2cJ9LNmokkTq20ZxqhafzuKht1WvWI+0HpN1aZxFmf6XqMmb2lyCT9nbyryDSXbrAj8Yhz9rhrFks32oE8cpR3NeS7aIwjV/t92/EtNObZRHktmff9cfcnfZadtIRBYpf4+QrtsRn/bsCWVFrIC5JpEbSPyMsKYBYP7fAxqM7loR3eBZx0ag58hfKsM/4tCfaTSYu6IVlCYCPRm3gzYxC9x5uQuowFLZ446nICPZGYLijQi/JmN3eauEeJ58V4UX0W4eommbNU60fLBtSl8sQtkaTAZaNMh2BXzCECJbvi8p2wRUsJnHvA9BohP0X5qEVm6mbJau0Rkept+Vx/i0SwQYWZFoGkGC9bjz6i8D0Ra0IBI2J7oQXdE5GBtAWc9nNsL7Qo7BgDU3LfAx3uA4aFz0AHivg4Y0HGGnycsQBLNxEnhbqpjJMi3VQiklpw0VTGSYFJP8Gn+xZY0pfqhriOKNUNcR0RMQ3cD2gIJZQNLaCMiJxje1SIGenLBRpUqMFNBD+DmRqWC6WoYDo2sNC6d/PBOL94EDO8GE4W+qM+HNQUiXp/OtQjGjHpYrANWh23xpQnd4n6VBqzPQ6/HExlOtyEL7NtKPeuErUq7YPm7IHCwYZGF4Fb42xEfWifLAc7gYIoHBxZREWr8DBVYeG9wqptaO2ssG5fTeW7Ql2XjURznBBpjvbBcvjVeKCwkVgV5fk+Iuooih4b/vQ/rb5MUY3YHqNwxDyXpt+3fV8V1UNw7fmf7nsRjz/ug8JnbN80n3dm1erTjPU5OYXOzbrEV3NrscaCZjRu9v4URKHzhHcbX81n3dadzZ/604zHzT4wdanz2EL/K9tkfj6ppqup0/Ga3P85OzxmbOE+PuwkGlNYzFWgc85EjQ8njPF165a3WKd1/yHMGD+f0DK9PxZ3Aoujc21uwczTTJpra6JLte3saLbVadIoGfX1aeIuX1Wfq9J2w+pcTxoi45acTJ2ouRQt0VPJ4wBqzjv87xbhf3sK//vhCr4Bh/8dP/y1GOGvp1nBmqjw17WFvzZRIumjV3rj3RS90Dv8dd7wJSf43V3gld5KYNMM1ogSG/TC3/cU/t61Few/DH8P6Qr2AcOCjeDxZhg/FT39A+GnomcqrOBcjPDPNlnB+TQrOGNo2RLci3OilpToicAVnNe2lER/ztzbhH9u4mYFZ1+u4PzSFZxBO2uNKl2LvmSu8sZDD+2YslzqCT899JvQz2TfrOBc/c2Uuy06VOS3g/4wMXFE72C/Dvc7Lt7jbotbcsd7ZnzNgEOEflfQhcDve7pyubOr13Qh3NnV8X3vmgrx3jVCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgiS/8cMRAmf+3K8AAAAAElFTkSuQmCC'
                            }
                            alt=""
                          />
                        </div>
                      ))}
                      {userSuggest?.map((ele, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center px-4 py-3 cursor-pointer  hover:bg-gray"
                          onClick={() => {
                            navigate(`/user/${ele.userId}`);
                            setSearch(ele.firstName);
                            setCompanySuggest(null);
                            setUserSuggest(null);
                          }}
                        >
                          {
                            <>
                              <span>{`${ele.firstName}, ${ele.lastName}`}</span>
                              <img
                                className="inline-block h-14 w-14 rounded-full"
                                src={
                                  ele.profilePic ??
                                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAS1BMVEX////h4eGZmZnf39/j4+Pm5ub09PT7+/vs7Ozo6Oj4+Pjw8PCWlpaTk5OamprY2Nimpqa/v7/Pz8+srKyioqLHx8e+vr63t7fU1NQ98dxgAAAEVklEQVR4nO2dW3eqMBCFrQlXAyLWev7/Lz1EpPWC0FDYE8P+HvrQtXBlM5OZSchlsyGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBXkjzepVmk9Ydq0DrK0l2cJ9LNmokkTq20ZxqhafzuKht1WvWI+0HpN1aZxFmf6XqMmb2lyCT9nbyryDSXbrAj8Yhz9rhrFks32oE8cpR3NeS7aIwjV/t92/EtNObZRHktmff9cfcnfZadtIRBYpf4+QrtsRn/bsCWVFrIC5JpEbSPyMsKYBYP7fAxqM7loR3eBZx0ag58hfKsM/4tCfaTSYu6IVlCYCPRm3gzYxC9x5uQuowFLZ446nICPZGYLijQi/JmN3eauEeJ58V4UX0W4eommbNU60fLBtSl8sQtkaTAZaNMh2BXzCECJbvi8p2wRUsJnHvA9BohP0X5qEVm6mbJau0Rkept+Vx/i0SwQYWZFoGkGC9bjz6i8D0Ra0IBI2J7oQXdE5GBtAWc9nNsL7Qo7BgDU3LfAx3uA4aFz0AHivg4Y0HGGnycsQBLNxEnhbqpjJMi3VQiklpw0VTGSYFJP8Gn+xZY0pfqhriOKNUNcR0RMQ3cD2gIJZQNLaCMiJxje1SIGenLBRpUqMFNBD+DmRqWC6WoYDo2sNC6d/PBOL94EDO8GE4W+qM+HNQUiXp/OtQjGjHpYrANWh23xpQnd4n6VBqzPQ6/HExlOtyEL7NtKPeuErUq7YPm7IHCwYZGF4Fb42xEfWifLAc7gYIoHBxZREWr8DBVYeG9wqptaO2ssG5fTeW7Ql2XjURznBBpjvbBcvjVeKCwkVgV5fk+Iuooih4b/vQ/rb5MUY3YHqNwxDyXpt+3fV8V1UNw7fmf7nsRjz/ug8JnbN80n3dm1erTjPU5OYXOzbrEV3NrscaCZjRu9v4URKHzhHcbX81n3dadzZ/604zHzT4wdanz2EL/K9tkfj6ppqup0/Ga3P85OzxmbOE+PuwkGlNYzFWgc85EjQ8njPF165a3WKd1/yHMGD+f0DK9PxZ3Aoujc21uwczTTJpra6JLte3saLbVadIoGfX1aeIuX1Wfq9J2w+pcTxoi45acTJ2ouRQt0VPJ4wBqzjv87xbhf3sK//vhCr4Bh/8dP/y1GOGvp1nBmqjw17WFvzZRIumjV3rj3RS90Dv8dd7wJSf43V3gld5KYNMM1ogSG/TC3/cU/t61Few/DH8P6Qr2AcOCjeDxZhg/FT39A+GnomcqrOBcjPDPNlnB+TQrOGNo2RLci3OilpToicAVnNe2lER/ztzbhH9u4mYFZ1+u4PzSFZxBO2uNKl2LvmSu8sZDD+2YslzqCT899JvQz2TfrOBc/c2Uuy06VOS3g/4wMXFE72C/Dvc7Lt7jbotbcsd7ZnzNgEOEflfQhcDve7pyubOr13Qh3NnV8X3vmgrx3jVCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgiS/8cMRAmf+3K8AAAAAElFTkSuQmCC'
                                }
                                alt=""
                              />
                            </>
                          }
                        </div>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Search bar for mobile size */}
            {toggleSearchMobile && (
              <div className="flex md:hidden relative top-[-18px]">
                <div className="absolute flex flex-col min-w-full">
                  {/* <input
                    name="search"
                    className="w-[300px] z-10 md:z-0 md:w-64 h-9 px-5 bg-gray border-transparent rounded sm:text-sm focus:border-black border-2 focus:outline-none"
                    placeholder="Search"
                    type="search"
                    onBlur={() => setToggleSearchMobile(false)}
                  /> */}
                  <input
                    name="search"
                    className="w-[300px] z-10 md:z-0 md:w-64 h-9 px-5 bg-gray border-transparent rounded sm:text-sm focus:border-blue focus:ring-0 border-2 focus:outline-none"
                    placeholder="Search"
                    type="search"
                    onChange={handleSearchUser}
                    value={search}
                    autoComplete="off"
                    onFocus={() => setActiveSearch(true)}
                    onBlur={() => {
                      setToggleSearchMobile(false);
                      setActiveSearch(false);
                    }}
                  />
                  {loading ? (
                    <div className="relative z-10 w-[300px] bg-white">
                      <span className="absolute w-full h-18 flex flex-col drop-shadow-sm gap-2 bg-white px-3 py-1 rounded-lg w-96">
                        loading
                      </span>
                    </div>
                  ) : (
                    // activeSearch &&
                    (companySuggest || userSuggest) && (
                      <div className="relative z-10 w-[300px] bg-white">
                        <div className="absolute w-[300px] h-18 flex flex-col drop-shadow-sm gap-2 bg-white py-1 rounded-lg">
                          {companySuggest?.map((ele, idx) => (
                            <div
                              key={idx}
                              className="flex justify-between w-[300px] items-center px-4 py-3 cursor-pointer hover:bg-gray"
                              onClick={() => {
                                navigate(`/user/${ele.userId}`);
                                setSearch(ele.companyName);
                                setCompanySuggest(null);
                                setUserSuggest(null);
                              }}
                            >
                              <span>{ele.companyName}</span>
                              <img
                                className="inline-block h-14 w-14 rounded-full"
                                src={
                                  ele.profilePic ??
                                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAS1BMVEX////h4eGZmZnf39/j4+Pm5ub09PT7+/vs7Ozo6Oj4+Pjw8PCWlpaTk5OamprY2Nimpqa/v7/Pz8+srKyioqLHx8e+vr63t7fU1NQ98dxgAAAEVklEQVR4nO2dW3eqMBCFrQlXAyLWev7/Lz1EpPWC0FDYE8P+HvrQtXBlM5OZSchlsyGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBXkjzepVmk9Ydq0DrK0l2cJ9LNmokkTq20ZxqhafzuKht1WvWI+0HpN1aZxFmf6XqMmb2lyCT9nbyryDSXbrAj8Yhz9rhrFks32oE8cpR3NeS7aIwjV/t92/EtNObZRHktmff9cfcnfZadtIRBYpf4+QrtsRn/bsCWVFrIC5JpEbSPyMsKYBYP7fAxqM7loR3eBZx0ag58hfKsM/4tCfaTSYu6IVlCYCPRm3gzYxC9x5uQuowFLZ446nICPZGYLijQi/JmN3eauEeJ58V4UX0W4eommbNU60fLBtSl8sQtkaTAZaNMh2BXzCECJbvi8p2wRUsJnHvA9BohP0X5qEVm6mbJau0Rkept+Vx/i0SwQYWZFoGkGC9bjz6i8D0Ra0IBI2J7oQXdE5GBtAWc9nNsL7Qo7BgDU3LfAx3uA4aFz0AHivg4Y0HGGnycsQBLNxEnhbqpjJMi3VQiklpw0VTGSYFJP8Gn+xZY0pfqhriOKNUNcR0RMQ3cD2gIJZQNLaCMiJxje1SIGenLBRpUqMFNBD+DmRqWC6WoYDo2sNC6d/PBOL94EDO8GE4W+qM+HNQUiXp/OtQjGjHpYrANWh23xpQnd4n6VBqzPQ6/HExlOtyEL7NtKPeuErUq7YPm7IHCwYZGF4Fb42xEfWifLAc7gYIoHBxZREWr8DBVYeG9wqptaO2ssG5fTeW7Ql2XjURznBBpjvbBcvjVeKCwkVgV5fk+Iuooih4b/vQ/rb5MUY3YHqNwxDyXpt+3fV8V1UNw7fmf7nsRjz/ug8JnbN80n3dm1erTjPU5OYXOzbrEV3NrscaCZjRu9v4URKHzhHcbX81n3dadzZ/604zHzT4wdanz2EL/K9tkfj6ppqup0/Ga3P85OzxmbOE+PuwkGlNYzFWgc85EjQ8njPF165a3WKd1/yHMGD+f0DK9PxZ3Aoujc21uwczTTJpra6JLte3saLbVadIoGfX1aeIuX1Wfq9J2w+pcTxoi45acTJ2ouRQt0VPJ4wBqzjv87xbhf3sK//vhCr4Bh/8dP/y1GOGvp1nBmqjw17WFvzZRIumjV3rj3RS90Dv8dd7wJSf43V3gld5KYNMM1ogSG/TC3/cU/t61Few/DH8P6Qr2AcOCjeDxZhg/FT39A+GnomcqrOBcjPDPNlnB+TQrOGNo2RLci3OilpToicAVnNe2lER/ztzbhH9u4mYFZ1+u4PzSFZxBO2uNKl2LvmSu8sZDD+2YslzqCT899JvQz2TfrOBc/c2Uuy06VOS3g/4wMXFE72C/Dvc7Lt7jbotbcsd7ZnzNgEOEflfQhcDve7pyubOr13Qh3NnV8X3vmgrx3jVCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgiS/8cMRAmf+3K8AAAAAElFTkSuQmCC'
                                }
                                alt=""
                              />
                            </div>
                          ))}
                          {userSuggest?.map((ele, idx) => (
                            <div
                              key={idx}
                              className="flex justify-between items-center px-4 py-3 cursor-pointer  hover:bg-gray"
                              onClick={() => {
                                navigate(`/user/${ele.userId}`);
                                setSearch(ele.firstName);
                                setCompanySuggest(null);
                                setUserSuggest(null);
                              }}
                            >
                              {
                                <>
                                  <span>{`${ele.firstName}, ${ele.lastName}`}</span>
                                  <img
                                    className="inline-block h-14 w-14 rounded-full"
                                    src={
                                      ele.profilePic ??
                                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAS1BMVEX////h4eGZmZnf39/j4+Pm5ub09PT7+/vs7Ozo6Oj4+Pjw8PCWlpaTk5OamprY2Nimpqa/v7/Pz8+srKyioqLHx8e+vr63t7fU1NQ98dxgAAAEVklEQVR4nO2dW3eqMBCFrQlXAyLWev7/Lz1EpPWC0FDYE8P+HvrQtXBlM5OZSchlsyGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBXkjzepVmk9Ydq0DrK0l2cJ9LNmokkTq20ZxqhafzuKht1WvWI+0HpN1aZxFmf6XqMmb2lyCT9nbyryDSXbrAj8Yhz9rhrFks32oE8cpR3NeS7aIwjV/t92/EtNObZRHktmff9cfcnfZadtIRBYpf4+QrtsRn/bsCWVFrIC5JpEbSPyMsKYBYP7fAxqM7loR3eBZx0ag58hfKsM/4tCfaTSYu6IVlCYCPRm3gzYxC9x5uQuowFLZ446nICPZGYLijQi/JmN3eauEeJ58V4UX0W4eommbNU60fLBtSl8sQtkaTAZaNMh2BXzCECJbvi8p2wRUsJnHvA9BohP0X5qEVm6mbJau0Rkept+Vx/i0SwQYWZFoGkGC9bjz6i8D0Ra0IBI2J7oQXdE5GBtAWc9nNsL7Qo7BgDU3LfAx3uA4aFz0AHivg4Y0HGGnycsQBLNxEnhbqpjJMi3VQiklpw0VTGSYFJP8Gn+xZY0pfqhriOKNUNcR0RMQ3cD2gIJZQNLaCMiJxje1SIGenLBRpUqMFNBD+DmRqWC6WoYDo2sNC6d/PBOL94EDO8GE4W+qM+HNQUiXp/OtQjGjHpYrANWh23xpQnd4n6VBqzPQ6/HExlOtyEL7NtKPeuErUq7YPm7IHCwYZGF4Fb42xEfWifLAc7gYIoHBxZREWr8DBVYeG9wqptaO2ssG5fTeW7Ql2XjURznBBpjvbBcvjVeKCwkVgV5fk+Iuooih4b/vQ/rb5MUY3YHqNwxDyXpt+3fV8V1UNw7fmf7nsRjz/ug8JnbN80n3dm1erTjPU5OYXOzbrEV3NrscaCZjRu9v4URKHzhHcbX81n3dadzZ/604zHzT4wdanz2EL/K9tkfj6ppqup0/Ga3P85OzxmbOE+PuwkGlNYzFWgc85EjQ8njPF165a3WKd1/yHMGD+f0DK9PxZ3Aoujc21uwczTTJpra6JLte3saLbVadIoGfX1aeIuX1Wfq9J2w+pcTxoi45acTJ2ouRQt0VPJ4wBqzjv87xbhf3sK//vhCr4Bh/8dP/y1GOGvp1nBmqjw17WFvzZRIumjV3rj3RS90Dv8dd7wJSf43V3gld5KYNMM1ogSG/TC3/cU/t61Few/DH8P6Qr2AcOCjeDxZhg/FT39A+GnomcqrOBcjPDPNlnB+TQrOGNo2RLci3OilpToicAVnNe2lER/ztzbhH9u4mYFZ1+u4PzSFZxBO2uNKl2LvmSu8sZDD+2YslzqCT899JvQz2TfrOBc/c2Uuy06VOS3g/4wMXFE72C/Dvc7Lt7jbotbcsd7ZnzNgEOEflfQhcDve7pyubOr13Qh3NnV8X3vmgrx3jVCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgiS/8cMRAmf+3K8AAAAAElFTkSuQmCC'
                                    }
                                    alt=""
                                  />
                                </>
                              }
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center h-full">
            <div
              className={`flex md:hidden flex-col items-center justify-center h-full w-12 sm:w-20 border-b-2 border-b-darkgray cursor-pointer text-darkgray hover:text-black`}
              onClick={() => setToggleSearchMobile(!toggleSearchMobile)}
            >
              <FaSearch className="text-2xl" />
              <span className="hidden sm:flex text-xs">Search</span>
            </div>
            <div
              className={`flex flex-col items-center justify-center h-full w-12 sm:w-20  ${
                active === 'Home' ? 'border-b-2 border-b-darkgray' : ''
              } cursor-pointer text-darkgray hover:text-black`}
              onClick={() => {
                navigate('home');
                setActive('Home');
              }}
            >
              <FaHome className="text-2xl" />
              <span className="hidden sm:flex text-xs">Home</span>
            </div>
            <div
              className={`flex flex-col items-center justify-center h-full w-12 sm:w-20 cursor-pointer text-darkgray ${
                active === 'MyNetwork' ? 'border-b-2 border-b-darkgray' : ''
              } hover:text-black`}
              onClick={() => {
                navigate('myNetwork');
                setActive('MyNetwork');
              }}
            >
              <FaPeopleArrows className="text-2xl" />
              <span className="hidden sm:flex text-xs">My Network</span>
            </div>
            <div
              className={`flex flex-col items-center justify-center h-full w-12 sm:w-20 ${
                active === 'Jobs' ? 'border-b-2 border-b-darkgray' : ''
              } cursor-pointer text-darkgray hover:text-black`}
              onClick={() => {
                navigate('jobs');
                setActive('Jobs');
              }}
            >
              <MdWork className="text-2xl" />
              <span className="hidden sm:flex text-xs">Jobs</span>
            </div>
            <div
              className={`flex flex-col items-center justify-center h-full w-12 sm:w-20 ${
                active === 'Messaging' ? 'border-b-2 border-b-darkgray' : ''
              } cursor-pointer text-darkgray hover:text-black`}
              onClick={() => {
                navigate('messaging');
                setActive('Messaging');
              }}
            >
              <RiMessage2Fill className="text-2xl" />
              <span className="hidden sm:flex text-xs">Messaging</span>
            </div>
            <div
              className={`flex flex-col items-center justify-center h-full w-12 sm:w-20 ${
                active === 'Notification' ? 'border-b-2 border-b-darkgray' : ''
              } cursor-pointer text-darkgray hover:text-black`}
              onClick={() => {
                navigate('notification');
                setActive('Notification');
              }}
            >
              <MdNotifications className="text-2xl" />
              <span className="hidden sm:flex text-xs">Notification</span>
              <div className="relative">
                <div className="absolute w-4 h-4 rounded-full bg-redNotification top-[-28px] sm:top-[-40px] text-white text-sm text-center">
                  <span className="relative right-[0.5px] top-[-1px]">1</span>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col items-center justify-center h-full w-20"
              onClick={() => setToggleProfileMenu(!toggleProfileMenu)}
            >
              {user.profilePic ? (
                <img
                  className="inline-block h-9 w-9 sm:h-6 sm:w-6 rounded-full cursor-pointer"
                  src={user.profilePic}
                  alt=""
                />
              ) : (
                <FaRegUserCircle className="text-2xl" />
              )}
              <div className="hidden sm:flex cursor-pointer">
                <span className="text-xs text-darkgray">Me</span>
                <RiArrowDownSFill />
              </div>

              {/* drop down profile menu */}

              {toggleProfileMenu && (
                <div className="relative right-[216px] top-[18px] z-10">
                  <div className="absolute w-64 h-fit bg-white rounded-b-lg rounded-tl-lg border-[0.5px] border-gray drop-shadow-md">
                    <div className="flex flex-col w-full border-b-[1px] border-gray p-2 gap-2">
                      <div className="flex items-center gap-1 cursor-pointer">
                        <img
                          className="inline-block h-14 w-14 rounded-full"
                          src={user.profilePic}
                          alt=""
                        />
                        <div className="flex flex-col">
                          <span className="text-md">{user.username}</span>
                          <span className="text-xs">actor</span>
                        </div>
                      </div>
                      <button
                        className="w-full border-[1px] border-blue text-blue hover:border-[2px] rounded-full text-sm font-medium transition-all h-6"
                        onClick={() => {
                          navigate(`/user/${user.id}`);
                          setActive('userPage');
                        }}
                      >
                        View Profile
                      </button>
                    </div>
                    <div className="flex flex-col w-full border-b-[1px] border-gray px-4 py-2 gap-2">
                      <h3 className="text-black font-medium">Account</h3>
                      <span className="text-darkgray text-xs hover:underline decoration-1 cursor-pointer">
                        Setting & Privacy
                      </span>
                      <span className="text-darkgray text-xs hover:underline decoration-1 cursor-pointer">
                        Help
                      </span>
                      <span className="text-darkgray text-xs hover:underline decoration-1 cursor-pointer">
                        Language
                      </span>
                    </div>
                    <div className="flex flex-col w-full border-b-[1px] border-gray px-4 py-2 gap-2">
                      <h3 className="text-black font-medium">Manage</h3>
                      <span className="text-darkgray text-xs hover:underline decoration-1 cursor-pointer">
                        Post & Activity
                      </span>
                      <span className="text-darkgray text-xs hover:underline decoration-1 cursor-pointer">
                        Job Posting Account
                      </span>
                    </div>
                    <div
                      className="flex flex-col w-full border-b-[1px] border-gray px-4 py-2 gap-2"
                      onClick={logout}
                    >
                      <span className="text-darkgray text-xs hover:underline decoration-1 cursor-pointer">
                        Sign Out
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      {activeSearch && (
        <div className="absolute left-0 top-0">
          <div
            className={`fixed top-0 w-screen z-[5] opacity-0 transition-all h-screen bg-black ${
              activeSearch ? 'opacity-70' : ''
            }`}
          ></div>
        </div>
      )}
    </>
  );
}
