import "./css/ImageAddCard.css";
import addIcon from "../img/add.svg";

const ImageAddCard = ({ children, onClickAdd = () => {} }) => {
  const onClick = () => {
    onClickAdd();
  };

  return (
    <div className="add__card" onClick={onClick}>
      <img src={addIcon} alt="이미지 추가 아이콘" />
      <span className="add__card__text">이미지 등록</span>
      {children}
    </div>
  );
};

export default ImageAddCard;
