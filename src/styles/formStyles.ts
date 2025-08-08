import styled from "@emotion/styled/macro";
import { defaultInput, mq } from "@styles/mixins";
import { theme } from "@styles/theme";

// common input style
export const InputStyle = styled.input`
  ${defaultInput()}
`;

// auth form - 회원가입 / 로그인
export const AuthContainer = styled.div`
  max-width: 640px;
  width: calc(100% - 30px);
  margin: 0 auto;

  ${mq["mobile"]} {
    max-width: 400px;
  }
`;

export const AuthLogoImage = styled.img`
  margin: 0 auto;
  ${mq["mobile"]} {
    width: 198px;
  }
`;

export const AuthForm = styled.form`
  margin-top: 40px;
  ${mq["mobile"]} {
    margin-top: 24px;
  }
`;

export const AuthFormItem = styled.div`
  margin-bottom: 24px;

  ${mq["mobile"]} {
    font-size: 16px;
  }
`;

export const AuthFormLabel = styled.label`
  display: block;
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 700;
  color: ${theme.colors.gray800};

  ${mq["mobile"]} {
    font-size: 14px;
  }
`;

export const AuthFormErrorMsg = styled.p`
  padding: 8px 16px 0;
  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.error};
`;
