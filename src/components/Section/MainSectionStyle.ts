/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BREAKPOINTS } from "@/constants/responsive";

const MainSectionStyle = ({ reverse }: { reverse: boolean }) => css`
  display: flex;
  justify-content: center;
  background: #fff;
  margin-bottom: 40px;

  .section-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 24px;
    flex-grow: 1;
  }

  .section-img {
    width: 100%;
  }

  .section-info {
    color: var(--gray700);
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

  ${reverse &&
  css`
    .section-container {
      align-items: flex-end;
    }
    .section-info {
      text-align: right;
    }
  `}

  @media (min-width: 640px) {
    :root {
      --sections-padding: 24px 24px 56px;
      --section-margin-bottom: 24px;
    }
  }

  @media (min-width: ${BREAKPOINTS.tablet}px) {
    .section-container {
      flex-grow: 0;
    }
  }

  @media (min-width: ${BREAKPOINTS.desktop}px) {
    :root {
      --sections-padding: 138px 24px;
      --section-margin-bottom: 1.5rem;
    }

    padding: 0 24px 138px;

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

    ${reverse &&
    css`
      .section-container {
        align-items: center;
      }
      .section-container img {
        order: 2;
      }
    `}

    .section-container img {
      max-width: 50%;
    }
  }
`;

export default MainSectionStyle;
