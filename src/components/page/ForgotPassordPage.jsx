import React, { useState } from 'react';
import { forgotPasswordApi } from '../../api/forgotPasswordApi';

function ForgotPassordPage() {
  const [email, setEmail] = useState('');

  const handleSubmitForgotPassword = async (e) => {
    try {
      e.preventDefault();
      await forgotPasswordApi({ email });
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
          onSubmit={handleSubmitForgotPassword}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link
                to="/"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div> */}

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Reset password
            </button>
            <p className="text-gray-500 text-sm mt-3">
              Link reset password will send to your email
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassordPage;
