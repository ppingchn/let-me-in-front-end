import { Outlet } from 'react-router-dom';
import Chat from './layout/Chat';
import Header from './layout/Header';

export default function HeaderLayout() {
  return (
    <div className="bg-gray h-screen">
      <Header />
      <Outlet />
      <Chat />
    </div>
  );
}
