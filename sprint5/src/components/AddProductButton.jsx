// 상품 등록하기기
import React from "react";
import { useNavigate } from "react-router-dom";

const AdProductButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/additem");
  };
  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: "blue", color: "white" }}
    >
      상품 등록하기
    </button>
  );
};

export default AdProductButton;
