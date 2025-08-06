/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface SocialLoginButtonProps {
  href: string;
  title?: string;
  ariaLabel?: string;
  imgSrc: string;
  imgAlt: string;
}

const SocialLoginButton = ({
  href,
  title,
  ariaLabel,
  imgSrc,
  imgAlt,
}: SocialLoginButtonProps) => {
  return (
    <a
      href={href}
      title={title}
      aria-label={ariaLabel}
      css={SocialLoginButtonStyle}
    >
      <img src={imgSrc} alt={imgAlt} width="40" height="40" />
    </a>
  );
};

export default SocialLoginButton;

const SocialLoginButtonStyle = css`
  border-radius: 50%;
`;
