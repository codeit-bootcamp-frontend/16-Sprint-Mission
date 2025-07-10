import iconLogo from '@/assets/icons/icon_logo.svg';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const GlobalHeader = () => {
  const navigate = useNavigate();

  const handleSigninClick = () => {
    navigate('/login');
  };

  return (
    <>
      <header className='border border-[#DFDFDF] h-[70px] flex flex-row items-center'>
        <nav className='flex flex-row m-auto px-[16px] md:px-[24px] xl:px-[200px] max-w-[1420px] w-full justify-between'>
          <Link to='/' className='flex flex-row gap-[8px] items-center'>
            <img src={iconLogo} className='size-[40px] hidden md:inline' />
            <span className='font-rokaf text-primary-100 font-bold text-[25.63px]'>판다마켓</span>
          </Link>
          <Button className='w-[128px] h-[48px] rounded-[8px]' onClick={handleSigninClick}>
            로그인
          </Button>
        </nav>
      </header>
    </>
  );
};

export default GlobalHeader;
