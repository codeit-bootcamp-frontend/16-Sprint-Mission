import LogoHeader from '../../components/LogoHeader/LogoHeader';
import HelperLink from './components/HelperLink';
import SignUpForm from './components/SignUpForm';
import SocialLogin from './components/SocialLogin';

const SignUpPage = () => {
  return (
    <section
      className='flex flex-col max-w-[744px]
      mx-[16px] my-[80px]
      md:mx-auto md:my-[90px]'
    >
      <LogoHeader />
      <SignUpForm />
      <SocialLogin />
      <HelperLink message='이미 회원이신가요?' linkText='로그인' linkUrl='/login' />
    </section>
  );
};

export default SignUpPage;
