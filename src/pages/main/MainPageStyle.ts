/** @jsxImportSource @emotion/react */
import { BREAKPOINTS } from "@/constants/responsive";
import { css } from "@emotion/react";

const MainPageStyle = css`
  /* section */
  .sections {
    padding: var(--sections-padding);
    background: #fff;
  }

  .section {
    display: flex;
    justify-content: center;
    background: #fff;
    margin-bottom: 40px;
  }

  .section-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 24px;
    flex-grow: 1;
  }
  .section-search .section-container {
    align-items: flex-end;
  }

  .section-img {
    width: 100%;
  }

  .section-info {
    color: var(--gray700);
  }

  .section-search .section-info {
    text-align: right;
  }

  .section-label {
    margin-bottom: 8px;
    font-size: var(--label-font-size);
    font-weight: 700;
    color: var(--primary-color);
  }

  .section-title {
    margin-bottom: var(--section-margin-bottom);
    font-size: var(--heading-font-size);
    word-break: keep-all;
  }

  .section-desc {
    font-size: var(--description-font-size);
  }

  /* banner */
  .banner {
    min-height: 540px;
    background: var(--background-blue);
    color: var(--gray700);
    text-align: center;
  }

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

  /*================ 반응형 ================*/
  /* Tablet */
  @media (min-width: 640px) {
    :root {
      --sections-padding: 24px 24px 56px;
      --section-margin-bottom: 24px;
    }

    .banner-hero .banner-info {
      padding: 84px 0 210px;
      max-width: none;
    }
  }

  @media (min-width: 768px) {
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

    .section-container {
      flex-grow: 0;
    }
  }

  /* PC */
  @media (min-width: 1200px) {
    :root {
      --sections-padding: 138px 24px;
      --section-margin-bottom: 1.5rem;
    }

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

    .section {
      padding: 0 24px 138px;
    }

    .section-container {
      align-items: center;
      flex-direction: row;
      width: var(--container-width-small);
      gap: 4rem;
      background: var(--background-light);
      border-radius: var(--border-radius-md);
      overflow: hidden;
      padding: 0 1.5rem;
    }

    .section-search .section-container {
      align-items: center;
    }

    .section-container img {
      max-width: 50%;
    }

    .section-search .section-container img {
      order: 2;
    }
  }

  /* 반응형 요소에 clamp() 적용 */
  @supports (font-size: clamp(1rem, 2vw, 3rem)) {
    :root {
      --banner-font-size: clamp(32px, 5vw, 40px);
    }
  }
`;

export default MainPageStyle;
