import Image from "next/image";
import { StaticImageData } from "next/image";

interface SocialLoginButtonProps {
  href: string;
  title?: string;
  ariaLabel?: string;
  imgSrc: StaticImageData;
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
      className="rounded-full"
    >
      <Image src={imgSrc} alt={imgAlt} width="40" height="40" />
    </a>
  );
};

export default SocialLoginButton;
