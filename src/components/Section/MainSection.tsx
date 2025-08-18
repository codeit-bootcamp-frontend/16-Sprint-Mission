/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import MainSectionStyle from "./MainSectionStyle";
import { BREAKPOINTS } from "@/constants/responsive";

interface MainSectionProps {
  title: string | ReactNode;
  label?: string;
  ariaLabel?: string;
  description?: string | ReactNode;
  imgSrc: string;
  imgMobileSrc?: string;
  reverse?: boolean;
}

const MainSection = ({
  title,
  label,
  ariaLabel,
  description,
  imgSrc,
  imgMobileSrc,
  reverse = false,
}: MainSectionProps) => {
  return (
    <section css={MainSectionStyle({ reverse })} aria-label={ariaLabel}>
      <div className="section-container">
        <img
          srcSet={`${imgMobileSrc} 696w, ${imgSrc} 344w`}
          sizes={`(min-width: ${BREAKPOINTS.tablet}) 580px, (min-width: 480px) 696px, 344px`}
          loading="lazy"
          src={imgSrc}
          alt="두 마리의 팬더가 인기 상품인 초록색 티셔츠를 보고 있는 일러스트"
          className="section-img"
        />
        <div className="section-info">
          <div className="section-label">{label}</div>
          <h2 className="section-title">{title}</h2>
          <p className="section-desc">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
