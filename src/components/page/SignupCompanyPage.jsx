import { Link, useNavigate } from 'react-router-dom';

import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import Profile from '../informationForm/Profile';
import PersonalInformation from '../informationForm/PersonalInformation';
import WorkExperience from '../informationForm/WorkExperience';
import { useAuth } from '../../context/authContext';
import LongdoMapComponent from '../../longdo-map/LongdoMapComponent';

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
  const [detail, setDetail] = useState('');

  const [position, setPositon] = useState('');
  const [workDescription, setWorkDescription] = useState('');

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  //Company Detail
  const [companyName, setCompanyName] = useState('');
  const [websiteLink, setWebsiteLink] = useState('');
  const [location, setLocation] = useState(null);

  //Address Information
  const [country, setCountry] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [subDistrict, setSubDistrict] = useState('');
  const [district, setDistrict] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');

  // loading
  const [loading, setLoading] = useState(false);

  // handle error
  const [error, setError] = useState({});

  //Additional
  let navigate = useNavigate();
  const [longdo, setLongdo] = useState(null);
  const [map, setMap] = useState(null);

  const getLocation = () => {
    let result = map.location();
    map.Overlays.clear();
    let marker = new longdo.Marker(result);
    map.Overlays.add(marker);
    setLocation(JSON.stringify(result));
  };

  const handleSubmitSignUp = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      //validate input first

      const companyData = new FormData();
      companyData.append('role', 'company');
      companyData.append('username', username);
      companyData.append('password', password);
      companyData.append('confirmPassword', confirmPassword);
      companyData.append('profilePic', profilePic);
      companyData.append('coverPic', coverPhoto);
      companyData.append('email', email);
      companyData.append('detail', detail);
      companyData.append('phoneNumber', phoneNumber);
      companyData.append('websiteLink', websiteLink);
      companyData.append('companyName', companyName);
      companyData.append('location', location);
      companyData.append('country', country);
      companyData.append('houseNumber', houseNumber);
      companyData.append('subDistrict', subDistrict);
      companyData.append('district', district);
      companyData.append('province', province);
      companyData.append('postCode', postalCode);
      await register(companyData);
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
                setLocation={setLocation}
                setDetail={setDetail}
                setCountry={setCountry}
                setHouseNumber={setHouseNumber}
                setSubDistrict={setSubDistrict}
                setDistrict={setDistrict}
                setProvince={setProvince}
                setPostalCode={setPostalCode}
                setMap={setMap}
                setLongdo={setLongdo}
                getLocation={getLocation}
              />
            </div>

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
