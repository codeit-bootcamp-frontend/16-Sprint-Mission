/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import arrowDownImg from "../../../assets/images/ic_arrow_down.png";
import sortImg from "../../../assets/images/ic_sort.svg";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { BREAKPOINTS } from "../../../constants/responsive";

const DropdownBtn = ({ selected, onClickDropdownBtn, isActive, iconType }) => {
  const { width } = useWindowDimensions();
  const isMobile = width < BREAKPOINTS.tablet;

  return (
    <button
      type="button"
      css={DropdownBtnStyle(isActive)}
      onClick={onClickDropdownBtn}
    >
      {isMobile ? (
        <img
          src={iconType === "orderIcon" ? sortImg : arrowDownImg}
          alt="정렬"
        />
      ) : (
        <span className="dropdown-btn-container">
          {selected}
          <img src={arrowDownImg} alt="더보기" />
        </span>
      )}
    </button>
  );
};

export default DropdownBtn;

const DropdownBtnStyle = (isActive) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 100%;
  padding: 8px;
  border: ${isActive
    ? "1px solid var(--primary-color)"
    : "1px solid var(--border-color)"};
  border-radius: var(--border-radius-sm);
  color: var(--secondary-color);
  text-align: left;
  font-size: 1rem;
  min-width: 48px;
  aspect-ratio: 1/1;

  &:hover {
    border-color: var(--primary-color);
  }

  .dropdown-btn-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  @media (min-width: 600px) {
    width: 130px;
    padding: 8px 20px;
    justify-content: space-between;
    aspect-ratio: initial;
  }
`;
