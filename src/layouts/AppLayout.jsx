import { Outlet, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

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
