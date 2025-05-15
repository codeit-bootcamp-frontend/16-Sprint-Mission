import { useEffect, useState } from 'react';

const DEFAULT_BREAKPOINT = 'sm';

export const useScreenBreakpoint = () => {
  const getBreakPoint = (width) => {
    if (width >= 1200) return 'lg';
    else if (width >= 768) return 'md';
    else return 'sm';
  };

  //prettier-ignore
  const [breakPoint, setBreakPoint] = useState(getBreakPoint(window.innerWidth));

  useEffect(() => {
    const handleResize = () => setBreakPoint(getBreakPoint(window.innerWidth));
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return { breakPoint };
};
