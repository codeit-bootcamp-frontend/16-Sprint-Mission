import React from "react";
import "../styles/pagination.css";

// 화살표 아이콘 컴포넌트
export function ArrowRight() {
  return (
    <svg
      className="arrow-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export function ArrowLeft() {
  return (
    <svg
      className="arrow-icon arrow-left"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
