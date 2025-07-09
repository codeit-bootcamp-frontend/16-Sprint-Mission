import { useState, useEffect, useCallback } from 'react';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = useCallback(() => setWindowWidth(window.innerWidth), []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return windowWidth;
};

export default useWindowWidth;
