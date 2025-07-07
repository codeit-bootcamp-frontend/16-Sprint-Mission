/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { BREAKPOINTS } from "@/constants/responsive";
import Button from "@/components/ui/Button";
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

const BannerStyle = css`
  min-height: 540px;
  background: var(--background-blue);
  color: var(--gray700);
  text-align: center;

  .banner-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    min-height: 540px;
  }

  .banner-hero {
    background: var(--background-blue-light);
  }

  .banner-title {
    font-size: var(--banner-font-size);
    margin-bottom: 18px;
    word-break: keep-all;

    @media (min-width: ${BREAKPOINTS.tablet}px) {
      margin-bottom: 24px;
    }

    @media (min-width: ${BREAKPOINTS.desktop}px) {
      margin-bottom: 32px;
    }
  }

  .banner-info {
    padding-top: 120px;
  }

  .banner-hero .banner-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding-top: 48px;
    max-width: 240px;
  }

  .banner-info .btn-lg {
    display: block;
    width: 100%;
    font-size: var(--banner-btn-font-size);
    line-height: 24px;
    max-width: 356px;
  }

  .banner-img {
    width: 100%;
    max-width: 744px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    .banner-hero .banner-info {
      padding: 84px 0 210px;
      max-width: none;
    }
  }

  @media (min-width: ${BREAKPOINTS.tablet}px) {
    :root {
      --banner-btn-font-size: 20px;
    }

    .banner {
      height: 926px;
    }
    .banner.banner-hero {
      height: 770px;
    }

    .banner-info .btn-lg {
      line-height: 32px;
    }
  }

  @media (min-width: ${BREAKPOINTS.desktop}px) {
    .banner-container {
      width: var(--container-width);
      margin: 0 auto;
    }

    .banner,
    .banner.banner-hero {
      height: 540px;
    }

    .banner-hero .banner-info {
      align-items: flex-start;
    }

    .banner-container {
      flex-direction: row;
      justify-content: center;
      align-items: flex-end;
    }

    .banner-info {
      padding-bottom: 10.75rem;
    }
    .banner-hero .banner-info {
      padding-bottom: 6.25rem;
    }

    .banner-title {
      text-align: left;
    }
  }

  @supports (font-size: clamp(1rem, 2vw, 3rem)) {
    :root {
      --banner-font-size: clamp(32px, 5vw, 40px);
    }
  }
`;
