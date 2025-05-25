import logoTypo from '@/assets/logo/logo_typo.png';
import logoSm from '@/assets/logo/logo_sm.png';
//import logoLg from '@/assets/logo/logo_lg.png';

export const LOGO = {
  typo: logoTypo,
  // <img> 기본 src
  small: logoSm,
  // srcset 문자열
  srcSet: `${logoTypo} 767w, ${logoSm} 768w`,
  // sizes 문자열
  sizes: '(max-width: 767px) 100vw, (max-width: 1199px) 768px',
  alt: '판다마켓 로고',
};
