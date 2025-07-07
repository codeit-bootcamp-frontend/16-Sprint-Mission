import React, { ReactNode } from "react";

interface BannerProps {
  title: string | ReactNode;
  imgSrc: string;
  imgAlt: string;
  linkBtn?: ReactNode;
  ariaLabel?: string;
  lazyLoading?: boolean;
}

const Banner = ({
  title,
  linkBtn,
  imgSrc,
  imgAlt,
  ariaLabel,
  lazyLoading,
}: BannerProps) => {
  return (
    <div className="banner banner-hero" aria-label={ariaLabel}>
      <div className="banner-container">
        <div className="banner-info">
          <h2 className="banner-title">{title}</h2>
          {linkBtn}
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
