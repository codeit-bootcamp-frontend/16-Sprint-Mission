import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo/logo.svg';
import google from '../../assets/images/icons/ic_google.png';
import kakao from '../../assets/images/icons/ic_kakao.png';
import InputField from '../UI/InputField';
import { applyFontStyles } from '../../styles/mixins';
import { ColorTypes, FontTypes } from '../../styles/theme';
import useFormValidation from '../../hooks/useFormValidation';
import { postSignup } from '../../api/api';

function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { errors, setErrors, validate, validateField } = useFormValidation('signup');

  const handleSignup = async (e) => {
    e.preventDefault();
    const validationResult = validate({ email, password, nickname, confirmPassword });
    setErrors(validationResult);
    if (Object.keys(validationResult).length > 0) return;

    try {
      const res = await postSignup(email, password, nickname, confirmPassword);
      localStorage.setItem('token', res.accessToken);
      navigate('/');
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setErrors((prev) => ({
      ...prev,
      email: validateField('email', value, { email: value, password, nickname, confirmPassword }, 'signup'),
    }));
  };

  const handleNicknameChange = (e) => {
    const value = e.target.value;
    setNickname(value);
    setErrors((prev) => ({
      ...prev,
      nickname: validateField('nickname', value, { email, password, nickname: value, confirmPassword }, 'signup'),
    }));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setErrors((prev) => ({
      ...prev,
      password: validateField('password', value, { email, password: value, nickname, confirmPassword }, 'signup'),
    }));
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setErrors((prev) => ({
      ...prev,
      confirmPassword: validateField(
        'confirmPassword',
        value,
        { email, password, nickname, confirmPassword: value },
        'signup'
      ),
    }));
  };

  const handleEmailBlur = (e) => {
    const value = e.target.value;
    setErrors((prev) => ({
      ...prev,
      email: validateField('email', value, { email: value, password, nickname, confirmPassword }, 'signup'),
    }));
  };

  const handleNicknameBlur = (e) => {
    const value = e.target.value;
    setErrors((prev) => ({
      ...prev,
      nickname: validateField('nickname', value, { email, password, nickname: value, confirmPassword }, 'signup'),
    }));
  };

  const handlePasswordBlur = (e) => {
    const value = e.target.value;
    setErrors((prev) => ({
      ...prev,
      password: validateField('password', value, { email, password: value, nickname, confirmPassword }, 'signup'),
    }));
  };

  const handleConfirmPasswordBlur = (e) => {
    const value = e.target.value;
    setErrors((prev) => ({
      ...prev,
      confirmPassword: validateField(
        'confirmPassword',
        value,
        { email, password, nickname, confirmPassword: value },
        'signup'
      ),
    }));
  };

  const hasError = Object.values(errors).some((v) => !!v);
  const isFilled = email && password && nickname && confirmPassword;
  const disabled = hasError || !isFilled;

  return (
    <StyledContainer>
      <StyledLogo
        src={logo}
        alt="logo"
      />
      <StyledForm onSubmit={handleSignup}>
        <InputField
          label="이메일"
          type="email"
          placeholder="이메일을 입력해주세요"
          isTextArea={false}
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          error={errors.email}
        />
        <InputField
          label="닉네임"
          type="text"
          placeholder="닉네임을 입력해주세요"
          isTextArea={false}
          value={nickname}
          onChange={handleNicknameChange}
          onBlur={handleNicknameBlur}
          error={errors.nickname}
        />
        <InputField
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          isTextArea={false}
          value={password}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          error={errors.password}
        />
        <InputField
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호를 다시 입력해주세요"
          isTextArea={false}
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          onBlur={handleConfirmPasswordBlur}
          error={errors.confirmPassword}
        />
        <StyledButton
          type="submit"
          disabled={disabled}
        >
          회원가입
        </StyledButton>
      </StyledForm>
      <StyledSnsLogin>
        <p>간편 로그인하기</p>
        <StyledSnsLoginIcons>
          <a
            href="https://www.google.com/?hl=ko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={google}
              alt="google"
            />
          </a>
          <a
            href="https://www.kakaocorp.com/page/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={kakao}
              alt="kakao"
            />
          </a>
        </StyledSnsLoginIcons>
      </StyledSnsLogin>
      <StyledSignupLink>
        <p>판다마켓이 처음이신가요?</p>
        <Link to="/signup">회원가입</Link>
      </StyledSignupLink>
    </StyledContainer>
  );
}

export default SignupPage;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 33px;
  margin-top: 50px;
  max-width: 640px;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.mobile};

  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing.tablet};
    margin-left: auto;
    margin-right: auto;
  }
`;

const StyledLogo = styled.img`
  width: 198px;
  height: 66px;

  @media (min-width: 768px) {
    width: 396px;
    height: 132px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const StyledButton = styled.button`
  padding: 16px 124px;
  border-radius: 40px;
  ${applyFontStyles(FontTypes.SEMIBOLD20, ColorTypes.SECONDARY_GRAY_100)}

  &:disabled {
    background-color: ${({ theme }) => theme.colors[ColorTypes.SECONDARY_GRAY_400]};
  }
`;

const StyledSnsLogin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 640px;
  padding: 16px 24px;
  background-color: #e6f2ff;
  border-radius: 8px;

  p {
    ${applyFontStyles(FontTypes.MEDIUM16, ColorTypes.SECONDARY_GRAY_800)}
  }
`;

const StyledSnsLoginIcons = styled.div`
  display: flex;
  gap: 16px;

  img {
    width: 42px;
    height: 42px;
  }
`;

const StyledSignupLink = styled.div`
  display: flex;
  gap: 4px;

  p {
    ${applyFontStyles(FontTypes.MEDIUM14, ColorTypes.SECONDARY_GRAY_800)}
  }

  a {
    text-decoration: underline;
    ${applyFontStyles(FontTypes.MEDIUM14, ColorTypes.PRIMARY_100)}
  }
`;
