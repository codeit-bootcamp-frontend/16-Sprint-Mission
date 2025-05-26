const AdProductButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: "blue", color: "white" }}
    >
      상품 등록하기
    </button>
  );
};

export default AdProductButton;
