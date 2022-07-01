import React from 'react';

export default function MessageListElement({ role, active }) {
  return (
    <div
      className={`flex gap-2 border-l-4 border-white h-20 px-3 items-center hover:bg-gray cursor-pointer ${
        active ? 'bg-gray border-green-800' : ''
      }`}
    >
      <div>
        {role === 'user' ? (
          <img
            className="inline-block h-12 w-12 sm:h-12 sm:w-12 rounded-full cursor-pointer"
            src="https://media-exp1.licdn.com/dms/image/C5635AQFLYHLx2MfUTg/profile-framedphoto-shrink_400_400/0/1599535039224?e=1656594000&v=beta&t=O9y8eKEW1-wXS4dTovWyH7Nd17POXUuH0WvZFgFGLfA"
            alt=""
          />
        ) : (
          <img
            className="inline-block h-12 w-12 sm:h-12 sm:w-12 cursor-pointer"
            src="https://media-exp1.licdn.com/dms/image/C560BAQEn3FvAF4Gpjg/company-logo_200_200/0/1654087026909?e=1664409600&v=beta&t=NTO3cCLbdpI5Q7OLiSHPusrPeo5BiJFNhjv9iYQYsYA"
            alt=""
          />
        )}
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <span>
            {'Tarinee testtestestest'.length > 12
              ? `${'Tarinee testtestestest'.slice(0, 12)} ...`
              : ''}
          </span>
          <span className="text-darkgray text-sm">Jun 20</span>
        </div>
        <span className="text-darkgray">
          {`Hi กันตภณ, Here&#39;s a revised version of the recommendation I wrote
          for you. Let me know if you need anything else. "Have 2 years
          experience. Can use Maya for 3D modeling and animated also use in 3D
          Rotomati`.length > 20
            ? `${`Hi กันตภณ, Here&#39;s a revised version of the recommendation I wrote
          for you. Let me know if you need anything else. "Have 2 years
          experience. Can use Maya for 3D modeling and animated also use in 3D
          Rotomati`.slice(0, 20)} ...`
            : ''}
        </span>
      </div>
    </div>
  );
}
