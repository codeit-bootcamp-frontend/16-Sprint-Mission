/** @jsxImportSource @emotion/react */
import { forwardRef, InputHTMLAttributes } from "react";
import usePasswordToggle from "../../hooks/usePasswordToggle";
import { css } from "@emotion/react";
import { InputStyle } from "@styles/formStyles";
import styled from "@emotion/styled/macro";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  className?: string;
  isToggle?: boolean;
}

const PasswordInput = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, className, isToggle = true, ...props }, ref) => {
    const { toggle, handleClickToggle, toggleImg } = usePasswordToggle();

    const { type, ...otherProps } = props;

    return (
      <PasswordBox>
        <InputStyle
          ref={ref}
          type={toggle ? "text" : "password"}
          css={css`
            padding-right: 60px;
          `}
          {...otherProps}
        />
        {isToggle && (
          <PasswordToggleBtn
            type="button"
            aria-label="비밀번호 표시"
            aria-pressed={toggle}
            onClick={handleClickToggle}
          >
            <img
              src={toggleImg}
              width="24"
              height="24"
              alt="비밀번호 보기 아이콘"
            />
          </PasswordToggleBtn>
        )}
      </PasswordBox>
    );
  }
);

const PasswordBox = styled.div`
  position: relative;
`;

const PasswordToggleBtn = styled.button`
  position: absolute;
  top: 0;
  right: 12px;
  height: 100%;
  padding: 0 12px;
`;

export default PasswordInput;
