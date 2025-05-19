import { Outlet, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const MainLayout = () => {
  const location = useLocation();
  const showFooter = location.pathname === '/';

  return (
    <>
      <Navigation />
      <Outlet />
      {showFooter && <Footer />}
    </>
  );
};

export default MainLayout;
