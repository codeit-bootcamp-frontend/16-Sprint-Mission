/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";

function Buttons() {
  return (
    <div css={button}>
      <button>
        <img src={arrowLeft} alt="arrow left" />
      </button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>
        <img src={arrowRight} alt="arrow right" />
      </button>
    </div>
  );
}

export default Buttons;

const button = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 24px 0;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 1px solid #e5e7eb;
    border-radius: 40px;
    font-weight: 600;
    font-size: 16px;
    color: #4b5563;
  }
`;
