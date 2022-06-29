import { useLocation } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

function PersonalInformation({
  birthDate,
  setBirthDate,
  setFirstName,
  setLastName,
  setGender,
  setEmail,
  setPhoneNumber,
  setUsername,
  setPassword,
  setConfirmPassword,
  setCompanyName,
  setWebsiteLink,
  setOverView,
  setDetail,
  setCountry,
  setHouseNumber,
  setSubDistrict,
  setDistrict,
  setProvince,
  setPostalCode,
}) {
  let location = useLocation();

  return (
    <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {location.pathname === '/signup'
            ? 'Personal Information'
            : location.pathname === '/signupCompany'
            ? 'Company Information'
            : null}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Use a permanent address where you can receive mail.
        </p>
      </div>
      <div className="space-y-6 sm:space-y-5">
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Username
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="text"
              name="username"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="given-name"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-500 rounded-md"
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Password
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="given-name"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-500 rounded-md"
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Confirm password
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="given-name"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-500 rounded-md"
            />
          </div>
        </div>
        {location.pathname === '/signup' && (
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              First name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                onChange={(e) => setFirstName(e.target.value)}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-500 rounded-md"
              />
            </div>
          </div>
        )}

        {location.pathname === '/signup' && (
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Last name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                onChange={(e) => setLastName(e.target.value)}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-500 rounded-md"
              />
            </div>
          </div>
        )}

        {/* Gender for only user */}
        {location.pathname === '/signup' && (
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Gender
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                onChange={(e) => setGender(e.target.value)}
                className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-500 rounded-md"
                placeholder={'select gender'}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
        )}

        {location.pathname === '/signup' && (
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="birthDate"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Birth date
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <DatePicker
                selected={birthDate}
                onChange={(date: Date) => setBirthDate(date)}
                className="border-gray-500 rounded-md"
                defaultValue="MM/DD/YYYY"
              />
            </div>
          </div>
        )}

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Email address
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-500 rounded-md"
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Phone number
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              autoComplete="family-name"
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-500 rounded-md"
            />
          </div>
        </div>
        {location.pathname === '/signupCompany' && (
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Company name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                onChange={(e) => setCompanyName(e.target.value)}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-500 rounded-md"
              />
            </div>
          </div>
        )}
        {location.pathname === '/signupCompany' && (
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Website Link
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                onChange={(e) => setWebsiteLink(e.target.value)}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-500 rounded-md"
              />
            </div>
          </div>
        )}

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="about"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            About
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <textarea
              id="about"
              name="about"
              rows={6}
              className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-500 rounded-md"
              onChange={(e) => setDetail(e.target.value)}
              defaultValue={''}
            />

            <p className="mt-2 text-sm text-gray-500">
              Write a few sentences about yourself.
            </p>
          </div>
        </div>

        <div className="sm:border-t sm:border-gray-00"></div>

        {/* Address */}
        <div style={{ marginTop: '2.5rem' }}>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Address Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Use a permanent address where you can receive mail.
          </p>
        </div>
        {/* LongDo Map at here */}

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="street-address"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Country
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="text"
              name="street-address"
              id="street-address"
              autoComplete="street-address"
              onChange={(e) => setCountry(e.target.value)}
              className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-500 rounded-md"
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="street-address"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            House Number
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="text"
              name="street-address"
              id="street-address"
              onChange={(e) => setHouseNumber(e.target.value)}
              autoComplete="street-address"
              className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-500 rounded-md"
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Sub-district
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="text"
              name="city"
              id="city"
              onChange={(e) => setSubDistrict(e.target.value)}
              autoComplete="address-level2"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-500 rounded-md"
            />
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            District
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="text"
              name="city"
              id="city"
              onChange={(e) => setDistrict(e.target.value)}
              autoComplete="address-level2"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-500 rounded-md"
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="region"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Province
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="text"
              name="region"
              id="region"
              autoComplete="address-level1"
              onChange={(e) => setProvince(e.target.value)}
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-500 rounded-md"
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="postal-code"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Postal code
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="text"
              name="postal-code"
              id="postal-code"
              onChange={(e) => setPostalCode(e.target.value)}
              autoComplete="postal-code"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-500 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;
