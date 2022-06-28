import { Link, useNavigate } from 'react-router-dom';

import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import Profile from '../informationForm/Profile';
import PersonalInformation from '../informationForm/PersonalInformation';
import WorkExperience from '../informationForm/WorkExperience';
import { useAuth } from '../../context/authContext';

export default function SignupCompanyPage() {
  // useAuthContext
  const { register } = useAuth();
  //useState

  //This Page
  const [count, setCount] = useState(1);
  const [countArray, setCountArray] = useState([0]);

  //Profile
  const [profilePic, setProfilePic] = useState('');
  const [coverPhoto, setCoverPhoto] = useState('');

  // Personal Information
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [about, setAbout] = useState('');

  const [position, setPositon] = useState('');
  const [workDescription, setWorkDescription] = useState('');

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  //Company Detail
  const [companyName, setCompanyName] = useState('');
  const [websiteLink, setWebsiteLink] = useState('');
  const [overView, setOverView] = useState('');
  const [location, setLocation] = useState(null);

  //Address Information
  const [country, setCountry] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [subDistrict, setSubDistrict] = useState('');
  const [district, setDistrict] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');

  // [{key:1 , name ;""},{key:2,...}]

  //Additional
  let navigate = useNavigate();

  const handleSubmitSignUp = async (e) => {
    try {
      e.preventDefault();
      //validate input first
      const address = {
        country,
        houseNumber,
        subDistrict,
        district,
        province,
        postalCode,
      };

      const companyData = new FormData();
      companyData.append('role', 'company');
      companyData.append('username', username);
      companyData.append('password', password);
      companyData.append('confirmPassword', confirmPassword);
      companyData.append('profilePic', profilePic);
      companyData.append('coverPic', coverPhoto);
      companyData.append('email', email);
      companyData.append('phoneNumber', phoneNumber);
      companyData.append('websiteLink', websiteLink);
      companyData.append('address', address);
      companyData.append('companyName', companyName);
      companyData.append('overview', overView);
      companyData.append('location', location);
      await register(companyData);
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
                setUsername={setUsername}
                setPassword={setPassword}
                setConfirmPassword={setConfirmPassword}
                setEmail={setEmail}
                setPhoneNumber={setPhoneNumber}
                setCompanyName={setCompanyName}
                setWebsiteLink={setWebsiteLink}
                setOverView={setOverView}
                setLocation={setLocation}
                setCountry={setCountry}
                setHouseNumber={setHouseNumber}
                setSubDistrict={setSubDistrict}
                setDistrict={setDistrict}
                setProvince={setProvince}
                setPostalCode={setPostalCode}
              />
            </div>

            <div className="pt-5">
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => navigate('/')}
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
