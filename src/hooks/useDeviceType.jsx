import { useEffect, useState } from 'react';

export const useDeviceType = () => {
  const getDeviceType = (width) => {
    if (width >= 1200) return 'lg';
    else if (width >= 768) return 'md';
    else return 'sm';
  };

  //prettier-ignore
  const [deviceType, setDeviceType] = useState(getDeviceType(window.innerWidth));

  useEffect(() => {
    const handleResize = () => setDeviceType(getDeviceType(window.innerWidth));
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return { deviceType };
};
