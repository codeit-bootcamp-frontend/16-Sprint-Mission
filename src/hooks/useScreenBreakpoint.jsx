import { useEffect, useState } from 'react';

const DEFAULT_BREAKPOINT = 'sm';

export const useScreenBreakpoint = () => {
  const getBreakPoint = (width) => {
    if (width >= 1200) return 'lg';
    else if (width >= 768) return 'md';
    else return 'sm';
  };

  //prettier-ignore
  const [breakPoint, setBreakPoint] = useState(null);

  useEffect(() => {
    const handleResize = () => setBreakPoint(getBreakPoint(window.innerWidth));
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return { breakPoint };
};
