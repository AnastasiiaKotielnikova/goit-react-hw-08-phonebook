import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Layt } from './Layout.styled';

const Layout = () => {
  return (
    <Layt>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </Layt>
  );
};

export default Layout;
