import { Outlet, useLocation } from 'react-router-dom';

import Footer from './Footer';
import Navigation from './Navigation';

const AppLayout = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <>
      <Navigation isLandingPage={isLandingPage} />
      <Outlet />
      {isLandingPage && <Footer />}
    </>
  );
};

export default AppLayout;
