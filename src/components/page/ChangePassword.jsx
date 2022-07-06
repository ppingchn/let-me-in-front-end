import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { changePasswordApi } from '../../api/forgotPasswordApi';

function ChangePasswordPage() {
    const location = useLocation();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const word = location.pathname.split('/')[2];

  const handleSubmitChangePassword = async (e) => {
    try {
      e.preventDefault();
        await changePasswordApi({word , password , confirmPassword});
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={handleSubmitChangePassword}
        >
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm password
            </label>
            <div className="mt-1">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="confirmPassword"
                autoComplete="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              // to="/"
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Change Password
            </button>
            <p className="text-gray-500 text-sm mt-3">
              Please check your password before send
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePasswordPage;
