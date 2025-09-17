import { ImageType } from "@/types/image";
interface SocialLoginButtonProps extends ImageType {
  href: string;
  title?: string;
  ariaLabel?: string;
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
      <img src={imgSrc} alt={imgAlt} width="40" height="40" />
    </a>
  );
};

export default SocialLoginButton;
