import { Link } from 'react-router-dom';
import styled from 'styled-components';

import googleLoginImg from '../assets/icon/ic_google_login.png';
import kakaoLoginImg from '../assets/icon/ic_kakao_login.png';
import logo from '../assets/logo/logo_lg.svg';
import Button from '../components/Button';

const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 344px;
  height: auto;
  margin: 80px auto 0;

  & > p {
    text-align: center;
  }

  & a {
    color: #3182f6;
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    width: 640px;
    margin-top: 192px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

const StyledLabel = styled.label`
  align-self: flex-start;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 56px;
  margin-top: -8px;
  padding: 0 24px;
  border: none;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.gray100};
`;

const LogoImg = styled.img`
  display: block;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 396px;
    margin-bottom: 16px;
  }
`;

const LoginButton = styled(Button)`
  width: 100%;
  height: 56px;
`;

const OAuthLoginWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px 24px;
  background-color: #e6f2ff;
  border-radius: 8px;

  & > span {
    flex-grow: 1;
  }
`;

const OAuthLoginImg = styled.img`
  vertical-align: bottom;
`;

const SignupPage = () => {
  return (
    <LoginFormWrapper>
      <Link to={'/'}>
        <LogoImg width={200} src={logo} alt="판다마켓 로고 이미지" />
      </Link>
      <form>
        <InputWrapper>
          <StyledLabel htmlFor="email">이메일</StyledLabel>
          <StyledInput
            id="email"
            type="email"
            placeholder="이메일을 입력해주세요"
          />
          <StyledLabel htmlFor="nickname">닉네임</StyledLabel>
          <StyledInput
            id="nickname"
            type="text"
            placeholder="닉네임을 입력해주세요"
          />
          <StyledLabel htmlFor="password">비밀번호</StyledLabel>
          <StyledInput
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
          <StyledLabel htmlFor="password-repeat">비밀번호 확인</StyledLabel>
          <StyledInput
            id="password-repeat"
            type="password"
            placeholder="비밀번호를 다시 한 번 입력해주세요"
          />
          <LoginButton type="pill">회원가입</LoginButton>
        </InputWrapper>
      </form>
      <OAuthLoginWrapper>
        <span>간편 로그인하기</span>
        <OAuthLoginImg
          src={googleLoginImg}
          alt={'구글 로그인 버튼'}
          width={40}
          height={40}
        />
        <OAuthLoginImg
          src={kakaoLoginImg}
          alt={'카카오 로그인 버튼'}
          width={40}
          height={40}
        />
      </OAuthLoginWrapper>
      <p>
        이미 회원이신가요? <Link to="/login">로그인</Link>
      </p>
    </LoginFormWrapper>
  );
};

export default SignupPage;
