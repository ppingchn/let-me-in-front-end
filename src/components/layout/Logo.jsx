import { Outlet } from 'react-router-dom';

function Logo() {
  return (
    <>
      {/* <div className="text-blue">Logo</div> */}
      <Outlet />
    </>
  );
}

export default Logo;
