// 상품 등록하기기
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddProductButton.css";

const AddProductButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/additem");
  };
  return (
    <button onClick={handleClick} className="register-button">
      상품 등록하기
    </button>
  );
};

export default AddProductButton;
