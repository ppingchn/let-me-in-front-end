import { Outlet } from "react-router-dom";
import Chat from "./layout/Chat";
import Header from "./layout/Header";

export default function HeaderLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Chat />
    </>
  );
}
