import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { changePasswordApi } from '../../api/forgotPasswordApi';
import validator from 'validator';
import ToastError from '../ui/ToastError';

function ChangePasswordPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({});
  const [toastError, setToastError] = useState(false);
  const [toastErrorMessage, setToastErrorMessage] = useState('');

  const word = location.pathname.split('/')[2];

  const handleSubmitChangePassword = async (e) => {
    try {
      e.preventDefault();
      const error = {};

      if (validator.isEmpty(password)) {
        error.password = 'Password is required.';
      }

      if (validator.isEmpty(confirmPassword)) {
        error.confirmPassword = 'Confirm password is required.';
      }

      if (password !== confirmPassword) {
        error.confirmPassword = 'Confirm password is required.';
      }

      setError({ ...error });

      if (Object.keys(error).length === 0) {
        await changePasswordApi({ word, password, confirmPassword });
        navigate('/');
      }
    } catch (err) {
      console.log(err);
      setToastErrorMessage('Timeout');
      setToastError(true);

      setTimeout(() => {
        setToastError(false);
      }, 5000);
    }
  };
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
      <ToastError
        errorMessage={toastErrorMessage}
        show={toastError}
        setShow={setToastError}
      />
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
            <span>{error.password}</span>
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
                type="password"
                autoComplete="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue focus:border-blue sm:text-sm"
              />
            </div>
            <span className="text-sm text-redNotification">
              {error.confirmPassword}
            </span>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue"
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
