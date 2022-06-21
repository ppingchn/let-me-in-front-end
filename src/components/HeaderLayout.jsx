import { Outlet } from "react-router-dom";
import Header from "./layout/Header";

export default function HeaderLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
