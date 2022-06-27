import { Link, useNavigate } from 'react-router-dom';

import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import Profile from '../informationForm/Profile';
import PersonalInformation from '../informationForm/PersonalInformation';
import WorkExperience from '../informationForm/WorkExperience';

export default function SignupCompanyPage() {
  //useState

  //This Page
  const [count, setCount] = useState(1);
  const [countArray, setCountArray] = useState([0]);

  //Profile
  const [profilePic, setProfilePic] = useState('');
  const [coverPhoto, setCoverPhoto] = useState('');

  // Personal Information
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [about, setAbout] = useState('');

  //Work experience Information
  const [companyArray, setCompanyArray] = useState([
    {
      index: 0,
      companyName: '',
      position: '',
      startDate: '',
      endDate: '',
      workDescription: '',
    },
  ]);

  const [position, setPositon] = useState('');
  const [workDescription, setWorkDescription] = useState('');

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  //Company Detail
  const [companyName, setCompanyName] = useState('');
  const [websiteName, setWebsiteName] = useState('');
  const [overView, setOverView] = useState('');
  const [location, setLocation] = useState(null);

  //Address Information
  const [country, setCountry] = useState('');
  const [stressAddress, setStressAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');

  // [{key:1 , name ;""},{key:2,...}]

  //Additional
  let navigate = useNavigate();

  const handleClickIncrease = (e) => {
    e.preventDefault();
    setCount(count + 1);
    setCountArray([...countArray, count]);

    // console.log(count)

    let clone = [...companyArray];
    const newCloneArray = {
      index: count,
      companyName: '',
      position: '',
      startDate: '',
      endDate: '',
      workDescription: '',
    };
    setCompanyArray([...clone, newCloneArray]);
    // console.log(countArray);
    console.log(companyArray);
    console.log('first');
  };

  console.log(companyArray);

  const handleClickDecrease = (e) => {
    e.preventDefault();
    if (count > 0) {
      setCount(count - 1);
    }
    const cloneCountArray = [...countArray];
    cloneCountArray.pop();
    setCountArray(cloneCountArray);
    console.log(countArray);
    console.log('second');
  };
  // console.log(countArray);

  const handleSubmitSignUp = async (e) => {
    try {
      e.preventDefault();
      //validate input first

      // setLoading(true)
      // //end validate
      // await signUp({
      //   firstName,
      //   lastName,
      //   email,
      //   phoneNumber,
      //   password,
      //   confirmPassword,
      //   profilePic,
      //   addressName,
      //   address,
      //   city,
      //   district,
      //   postalCode,
      //   moreDetails,
      // });
      // console.log(profilePic)

      // setLoading(false)
      navigate('/');
    } catch (err) {
      // setError(err.response.data.message);
      console.log(err);
    }
  };

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-3xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            className="space-y-8 divide-y divide-gray-500"
            onSubmit={handleSubmitSignUp}
          >
            <div className="space-y-8 divide-y divide-gray-500 sm:space-y-5">
              <Profile
                profilePic={profilePic}
                setProfilePic={setProfilePic}
                coverPhoto={coverPhoto}
                setCoverPhoto={setCoverPhoto}
              />

              <PersonalInformation
                setStartBirthDate={setBirthDate}
                birthDate={birthDate}
              />

              <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                <div className="flex justify-between text-end">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Work Experience
                  </h3>
                  <div>
                    {/* plus */}
                    <button
                      onClick={
                        // (e) => {
                        // e.preventDefault();
                        // setCount(count + 1);
                        handleClickIncrease
                        // }
                      }
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                    {/* minus */}
                    {count > 1 && (
                      <button onClick={handleClickDecrease}>
                        <i className="ml-2 fa-solid fa-minus" />
                      </button>
                    )}
                  </div>
                </div>

                {countArray.map((el, idx) => {
                  return (
                    <WorkExperience
                      key={idx}
                      index={idx}
                      companyArray={companyArray}
                      setCompanyArray={setCompanyArray}
                      setPositon={setPositon}
                      // workDescription={workDescription}
                      setWorkDescription={setWorkDescription}
                      setStartDate={setStartDate}
                      startDate={startDate}
                      setEndDate={setEndDate}
                      endDate={endDate}
                    />
                  );
                })}
              </div>
            </div>

            <div className="pt-5">
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-white py-2 px-4 border border-gray-500 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
