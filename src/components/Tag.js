import "./css/Tag.css";
import deleteIcon from "../img/delete.svg";

const Tag = ({ children, className, onClickDelete = () => {} }) => {
  const deleteTag = () => {
    onClickDelete();
  };
  return (
    <>
      <div className={`tag ${className}`}>
        #{children}
        <img src={deleteIcon} alt="태그 삭제 아이콘" onClick={deleteTag} />
      </div>
    </>
  );
};

export default Tag;
