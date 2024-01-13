import { NavBar } from 'components/NavBar/NavBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
