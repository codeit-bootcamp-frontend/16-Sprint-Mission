import Link from 'next/link';
import LogoIcon from '../../public/logo_1.svg';
import LogoText from '../../public/logo_2.svg';
import Image from 'next/image';

const Header = () => {
  return (
    <div
      className='flex justify-between 
      px-4 py-2 w-auto mb-6
      md:px-6 md:py-[10px]
      lg:px-90
      border-b border-slate-200 '
    >
      <Link href='/' className='flex items-center'>
        <Image src={LogoIcon} alt='Logo' />
        <Image src={LogoText} alt='Logo' className='hidden md:inline-block' />
      </Link>

      <div></div>
    </div>
  );
};

export default Header;
