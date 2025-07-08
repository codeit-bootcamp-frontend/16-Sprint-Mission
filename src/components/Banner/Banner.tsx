/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import BannerStyle from "./BannerStyle";

interface BannerProps {
  title: string | ReactNode;
  imgSrc: string;
  imgAlt: string;
  linkTo?: string;
  ariaLabel?: string;
  lazyLoading?: boolean;
}

const Banner = ({
  title,
  linkTo,
  imgSrc,
  imgAlt,
  ariaLabel,
  lazyLoading,
}: BannerProps) => {
  const navigate = useNavigate();

  return (
    <div css={BannerStyle} aria-label={ariaLabel}>
      <div className="banner-container">
        <div className="banner-info">
          <h2 className="banner-title">{title}</h2>
          {linkTo && (
            <Button
              onClick={() => navigate(linkTo)}
              aria-label="상품 페이지로 이동"
              variant="bannerPrimary"
              size="lg"
            >
              구경하러 가기
            </Button>
          )}
        </div>
        <img
          className="banner-img"
          loading={lazyLoading ? "lazy" : "eager"}
          src={imgSrc}
          alt={imgAlt}
        />
      </div>
    </div>
  );
};

export default Banner;
