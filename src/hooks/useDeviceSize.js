import { useState, useEffect } from 'react';

function useDeviceSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1200;
  const isDesktop = width >= 1200;

  return { isMobile, isTablet, isDesktop };
}

export default useDeviceSize;
