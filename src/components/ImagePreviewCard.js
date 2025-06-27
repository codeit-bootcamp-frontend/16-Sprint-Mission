import "./css/ImagePreviewCard.css";
import deleteIcon from "../img/delete.svg";

const ImagePreviewCard = ({ onClickDelete = () => {}, imageUrl }) => {
  const handleOnClickDelete = () => {
    onClickDelete();
  };

  return (
    <div
      className="preview__card"
      onClick={handleOnClickDelete}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <img
        src={deleteIcon}
        alt="이미지 삭제 아이콘"
        className="preview__card__icon"
      />
    </div>
  );
};

export default ImagePreviewCard;
