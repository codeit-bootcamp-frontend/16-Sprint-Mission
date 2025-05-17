import { useEffect } from 'react';

export default function useResponsiveClass() {
  useEffect(() => {
    const html = document.documentElement;

    const setClass = () => {
      const width = window.innerWidth;
      html.classList.remove('mobile', 'tablet', 'desktop');

      if (width >= 1200) {
        html.classList.add('desktop');
      } else if (width >= 768) {
        html.classList.add('tablet');
      } else {
        html.classList.add('mobile');
      }
    };

    setClass(); // 초기 적용
    window.addEventListener('resize', setClass);

    return () => {
      window.removeEventListener('resize', setClass); // 메모리 누수 방지
    };
  }, []);
}
