import iconKakaoBadge from '@/assets/icons/icon_kakao_badge.svg';
import iconGoogleBadge from '@/assets/icons/icon_google_badge.svg';

const SocialLogin = () => {
  return (
    <div className='bg-[#E6F2FF] flex flex-row my-[24px] px-[23px] py-[16px] justify-between items-center rounded-[8px]'>
      <span className='font-pretendard text-[16px]/[26px] font-medium text-gray-800'>
        간편 로그인 하기
      </span>
      <div className='flex flex-row gap-[16px]'>
        <img src={iconGoogleBadge} className='size-[42px]' />
        <img src={iconKakaoBadge} className='size-[42px]' />
      </div>
    </div>
  );
};

export default SocialLogin;
