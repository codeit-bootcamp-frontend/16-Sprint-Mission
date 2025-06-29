import LogoHeader from '../../components/LogoHeader/LogoHeader';
import HelperLink from './components/HelperLink';
import SignInForm from './components/SignInForm';
import SocialLogin from './components/SocialLogin';

const SignInPage = () => {
  return (
    <section
      className='flex flex-col max-w-[744px]
      mx-[16px] my-[80px]
      md:mx-auto md:my-[90px]'
    >
      <LogoHeader />
      <SignInForm />
      <SocialLogin />
      <HelperLink message='판다마켓이 처음이신가요?' linkText='회원가입' linkUrl='/signup' />
    </section>
  );
};

export default SignInPage;
