// 상품 등록 페이지 상품 등록 버튼 컴포넌트
import React from "react";

function SubmissionButton({ isEnabled }) {
  return (
    <button type="submit" disabled={!isEnabled}>
      등록
    </button>
  );
}

export default SubmissionButton;
