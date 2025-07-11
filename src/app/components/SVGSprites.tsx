"use client";

const SVGSprites = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
      <symbol id="plus" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="currentColor"
          strokeWidth="3"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </symbol>
      <symbol id="close" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="currentColor"
          strokeWidth="3"
          d="M6 18 18 6M6 6l12 12"
        />
      </symbol>
      <symbol id="check" viewBox="0 0 24 24">
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="currentColor"
          strokeWidth="3"
          d="m4.5 12.75 6 6 9-13.5"
        />
      </symbol>
    </svg>
  );
};

export default SVGSprites;
