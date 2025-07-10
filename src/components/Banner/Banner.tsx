/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import BannerStyle from "./BannerStyle";

interface BannerInfoProps {
  align: string;
  children: ReactNode;
}

const BannerInfo = ({ children, align }: BannerInfoProps) => {
  return <div className="banner-info">{children}</div>;
};

interface BannerButtonProps {
  linkTo: string;
  children: ReactNode;
  ariaLabel?: string;
}

const BannerButton = ({
  linkTo,
  children = "구경하러 가기",
  ariaLabel,
}: BannerButtonProps) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(linkTo)}
      aria-label={ariaLabel}
      variant="bannerPrimary"
      size="lg"
    >
      {children}
    </Button>
  );
};

interface BannerImageProps {
  imgSrc: string;
  imgAlt: string;
  lazyLoading?: boolean;
  align?: string;
}

const BannerImage = ({
  imgSrc,
  imgAlt,
  lazyLoading,
  align,
}: BannerImageProps) => {
  return (
    <img
      className="banner-img"
      loading={lazyLoading ? "lazy" : "eager"}
      src={imgSrc}
      alt={imgAlt}
    />
  );
};

interface BannerProps {
  title: string | ReactNode;
  imgSrc: string;
  imgAlt: string;
  linkTo?: string;
  ariaLabel?: string;
  lazyLoading?: boolean;
  infoAlign?: string;
  imgAlign?: string;
}

const Banner = ({
  title,
  linkTo,
  imgSrc,
  imgAlt,
  ariaLabel,
  lazyLoading,
  infoAlign = "left",
  imgAlign = "right",
}: BannerProps) => {
  return (
    <div css={BannerStyle}>
      <div className="banner-container">
        <BannerInfo align={infoAlign}>
          <h2 className="banner-title">{title}</h2>
          {linkTo && (
            <BannerButton linkTo={linkTo} ariaLabel={ariaLabel}>
              구경하러 가기
            </BannerButton>
          )}
        </BannerInfo>
        <BannerImage
          imgSrc={imgSrc}
          imgAlt={imgAlt}
          lazyLoading={lazyLoading}
          align={imgAlign}
        />
      </div>
    </div>
  );
};

Banner.Info = BannerInfo;
Banner.Button = BannerButton;
Banner.Image = BannerImage;

export default Banner;
