import { Link, useNavigate } from 'react-router-dom';

import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import Profile from '../informationForm/Profile';
import PersonalInformation from '../informationForm/PersonalInformation';
import WorkExperience from '../informationForm/WorkExperience';
import Education from '../informationForm/Education';
import { useAuth } from '../../context/authContext';

export default function SignupPage() {
  // Use Context (custom hook)
  const { register } = useAuth();

  //useState

  //This Page
  const [countWork, setCountWork] = useState(1);
  const [countWorkArray, setCountWorkArray] = useState([0]);

  const [countEducation, setCountEducation] = useState(1);
  const [countEducationArray, setCountEducationArray] = useState([0]);

  //Profile
  const [profilePic, setProfilePic] = useState('');
  const [coverPhoto, setCoverPhoto] = useState('');

  // Personal Information
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [detail, setDetail] = useState('');

  // loading
  const [loading, setLoading] = useState(false);

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

  // const [position, setPositon] = useState("");
  // const [workDescription, setWorkDescription] = useState("");

  const [educationArray, setEducationArray] = useState([
    {
      index: 0,
      degree: '',
      university: '',
      field: '',
      startDateEducation: '',
      endDateEducation: '',
    },
  ]);

  //Address Information
  const [country, setCountry] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [subDistrict, setSubDistrict] = useState('');
  const [district, setDistrict] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');

  //Additional
  let navigate = useNavigate();

  //Handle Work Experience
  const handleClickIncrease = (e) => {
    e.preventDefault();
    setCountWork(countWork + 1);
    setCountWorkArray([...countWorkArray, countWork]);

    // console.log(countWork)

    let clone = [...companyArray];
    const newCloneArray = {
      index: countWork,
      companyName: '',
      position: '',
      startDate: '',
      endDate: '',
      workDescription: '',
    };
    setCompanyArray([...clone, newCloneArray]);
    // console.log(countWorkArray);
    // console.log(companyArray);
    // console.log("first");
  };

  const handleClickDecrease = (e) => {
    e.preventDefault();
    if (countWork > 0) {
      setCountWork(countWork - 1);
    }
    const cloneEducationCountArray = [...countWorkArray];
    cloneEducationCountArray.pop();
    setCountWorkArray(cloneEducationCountArray);
    // console.log(countWorkArray);
    // console.log("second");
  };

  //Handle Education
  const handleClickIncreaseEducation = (e) => {
    e.preventDefault();
    setCountEducation(countEducation + 1);
    setCountEducationArray([...countEducationArray, countEducation]);

    // console.log(countWork)

    let cloneEducation = [...educationArray];
    const newCloneEducationArray = {
      index: countEducation,
      companyName: '',
      position: '',
      startDateEducation: '',
      endDateEducation: '',
      workDescription: '',
    };

    setEducationArray([...cloneEducation, newCloneEducationArray]);
    // console.log(countEducationArray);
    // console.log(companyArray);
    // console.log("first");
  };

  const handleClickDecreaseEducation = (e) => {
    e.preventDefault();
    if (countWork > 0) {
      setCountEducation(countEducation - 1);
    }
    const cloneCountArray = [...countEducationArray];
    cloneCountArray.pop();
    setCountEducationArray(cloneCountArray);
    // console.log(countWorkArray);
    // console.log("second");
  };

  const handleSubmitSignUp = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      //validate input first

      // change raw to formData
      const registerData = new FormData();
      registerData.append('role', 'user');
      registerData.append('username', username);
      registerData.append('firstName', firstname);
      registerData.append('lastName', lastname);
      registerData.append('password', password);
      registerData.append('confirmPassword', confirmPassword);
      registerData.append('profilePic', profilePic);
      registerData.append('coverPic', coverPhoto);
      registerData.append('email', email);
      registerData.append('gender', gender);
      registerData.append('detail', detail);
      registerData.append('birthDate', birthDate);
      registerData.append('phoneNumber', phoneNumber);
      registerData.append('country', country);
      registerData.append('houseNumber', houseNumber);
      registerData.append('subDistrict', subDistrict);
      registerData.append('district', district);
      registerData.append('province', province);
      registerData.append('postCode', postalCode);
      registerData.append('educationArray', JSON.stringify(educationArray));
      registerData.append('experienceArray', JSON.stringify(companyArray));
      registerData.append('skillArray', JSON.stringify(companyArray));
      await register(registerData);
      navigate('/');
    } catch (err) {
      // setError(err.response.data.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-3xl">
        {loading && (
          <div className="relative z-50">
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50">
              <div className="flex w-full h-full justify-center items-center">
                {/* loading */}
                <div class="lds-dual-ring"></div>
              </div>
            </div>
          </div>
        )}
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-8 " onSubmit={handleSubmitSignUp}>
            <div className="space-y-8 divide-y divide-gray-500 sm:space-y-5">
              <Profile
                profilePic={profilePic}
                setProfilePic={setProfilePic}
                coverPhoto={coverPhoto}
                setCoverPhoto={setCoverPhoto}
              />

              <PersonalInformation
                setFirstName={setFirstName}
                setLastName={setLastName}
                setGender={setGender}
                setBirthDate={setBirthDate}
                birthDate={birthDate}
                setEmail={setEmail}
                setPhoneNumber={setPhoneNumber}
                setDetail={setDetail}
                setUsername={setUsername}
                setPassword={setPassword}
                setConfirmPassword={setConfirmPassword}
                setCountry={setCountry}
                setHouseNumber={setHouseNumber}
                setSubDistrict={setSubDistrict}
                setDistrict={setDistrict}
                setProvince={setProvince}
                setPostalCode={setPostalCode}
              />

              <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                <div className="flex justify-between text-end">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Work Experience
                  </h3>
                  <div>
                    {/* plus */}
                    <button onClick={handleClickIncrease}>
                      <i className="fa-solid fa-plus"></i>
                    </button>
                    {/* minus */}
                    {countWork > 1 && (
                      <button onClick={handleClickDecrease}>
                        <i className="ml-2 fa-solid fa-minus" />
                      </button>
                    )}
                  </div>
                </div>

                {countWorkArray.map((el, idx) => {
                  return (
                    <WorkExperience
                      key={idx}
                      index={idx}
                      companyArray={companyArray}
                      setCompanyArray={setCompanyArray}
                    />
                  );
                })}
              </div>
            </div>

            <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
              <div className="flex justify-between text-end">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Education
                </h3>
                <div>
                  {/* plus */}
                  <button onClick={handleClickIncreaseEducation}>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                  {/* minus */}
                  {countEducation > 1 && (
                    <button onClick={handleClickDecreaseEducation}>
                      <i className="ml-2 fa-solid fa-minus" />
                    </button>
                  )}
                </div>
              </div>

              {countEducationArray.map((el, idx) => {
                return (
                  <Education
                    key={idx}
                    index={idx}
                    educationArray={educationArray}
                    setEducationArray={setEducationArray}
                  />
                );
              })}
            </div>

            {/* Submit */}
            <div className="pt-5">
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="bg-white py-2 px-4 border border-gray-500 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue"
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
