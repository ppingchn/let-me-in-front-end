import { useState, useEffect, useRef } from 'react';
import { BsGoogle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { AiFillLinkedin } from 'react-icons/ai';

export default function LogInPage() {
  const { login, registerGoogle } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const googleLogEle = useRef(null);

  const handleSubmitLogin = async (e) => {
    try {
      e.preventDefault();
      await login({ username, password });
    } catch (err) {
      console.log(err);
    }
  };

  const handleCallbackResponse = async (response) => {
    try {
      await registerGoogle({ token: response.credential });
      // console.log('JWT ID token: ' + response.credential);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    /*global google */
    
    google.accounts.id.initialize({
      client_id:
        '732724610253-uh51lphhkvujfovqcnad8msjip31mnig.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('signInDev'), {
      id: 'test',
      theme: 'outline',
      size: 'large',
      width: '300',
    });
  }, []);
  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <AiFillLinkedin className="text-[80px] text-blue mx-auto" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link to="/" className="font-medium text-blue hover:underline">
              start your 14-day free trial
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={handleSubmitLogin}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="email"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue focus:border-blue sm:text-sm"
                  />
                </div>
              </div>

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
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue focus:border-blue sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue focus:ring-blue border-gray-300 rounded"
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
                    to="/forgotPassword"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  Log in
                </button>
              </div>
            </form>

            <button
              type="button"
              className="w-full relative flex gap-3 items-center justify-center mt-3 py-2 px-4 border rounded-md shadow-sm text-sm font-medium text-blue border-darkgray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => {
                console.log(googleLogEle.current);
                googleLogEle.current.click();
              }}
            >
              Google login
              <img
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                alt=""
                className="h-6"
              />
              <div
                id="signInDev"
                className="w-full mt-2 z-10 opacity-[1%] absolute"
                ref={googleLogEle}
              ></div>
            </button>
            {/* <div id="signInDev" className="w-full mt-2"></div> */}

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or you did'nt have account
                  </span>
                </div>
              </div>

              <div className="mt-6  mx-auto text-gray-500 ">
                <Link
                  to="/signup"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500  hover:bg-gray-200"
                >
                  Sign up for user
                </Link>
              </div>
              <div className="mt-6  mx-auto text-gray-500 ">
                <Link
                  to="/signupCompany"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500  hover:bg-gray-200"
                >
                  Sign up for company
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
