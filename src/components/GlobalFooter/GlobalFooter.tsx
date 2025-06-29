import { Link } from 'react-router-dom';
import SocialIcon from '../SocialIcon/SocialIcon';

const GlobalFooter = () => {
  return (
    <footer
      className='bg-gray-900 pt-[32px]
    pb-[30px]
    md:pb-[109px]'
    >
      <nav
        className='flex flex-row flex-wrap-reverse  gap-y-[60px] justify-between max-w-[1420px] w-full mx-auto
      px-[32px]
      md:px-[104px]
      xl:px-[200px]
      '
      >
        <span
          className='text-gray-400
          basis-full
          md:basis-auto
        '
        >
          @codeit - 2024
        </span>
        <div className='text-gray-400 flex flex-row gap-[30px]'>
          <Link to='/'>Privacy Policy</Link>
          <Link to='/'>FAQ</Link>
        </div>
        <div className='flex flex-row gap-[12px]'>
          <SocialIcon
            link='https://www.facebook.com/?locale=ko_KR'
            imgUrl='/icons/ic_facebook.svg'
          />
          <SocialIcon link='https://x.com/?lang=ko' imgUrl='/icons/ic_twitter.svg' />
          <SocialIcon link='https://www.youtube.com/' imgUrl='/icons/ic_youtube.svg' />
          <SocialIcon link='https://www.instagram.com/' imgUrl='/icons/ic_instagram.svg' />
        </div>
      </nav>
    </footer>
  );
};

export default GlobalFooter;
