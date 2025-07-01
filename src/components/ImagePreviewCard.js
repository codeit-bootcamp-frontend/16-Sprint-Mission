import "./css/ImagePreviewCard.css";
import deleteIcon from "../img/delete.svg";

const ImagePreviewCard = ({ onClickDelete = () => {}, imageUrl }) => {
  return (
    <div
      className="preview__card"
      onClick={onClickDelete}
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
