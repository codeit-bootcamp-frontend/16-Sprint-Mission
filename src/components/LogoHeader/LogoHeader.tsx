import iconLogo from '@/assets/icons/icon_logo.svg';
import { Link } from 'react-router-dom';

const LogoHeader = () => {
  return (
    <Link
      to='/'
      className='flex flex-row justify-center items-center 
      gap-[11.12px] h-[66px] mb-[24px]
      md:gap-[22.24px] md:h-[132px] md:mb-[40px]'
    >
      <img
        src={iconLogo}
        className='
        size-[52px]
        md:size-[104px]'
      />
      <span
        className='font-rokaf text-primary-100
        text-[33.17px]
        md:text-[66.34px]'
      >
        판다마켓
      </span>
    </Link>
  );
};

export default LogoHeader;
