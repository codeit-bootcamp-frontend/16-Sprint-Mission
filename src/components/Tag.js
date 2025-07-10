import "./css/Tag.css";
import deleteIcon from "../img/delete.svg";

const Tag = ({
  children,
  className,
  hideDeleteIcon = false,
  onClickDelete = () => {},
}) => {
  return (
    <>
      <div className={`tag ${className}`}>
        #{children}
        {!hideDeleteIcon && (
          <img
            src={deleteIcon}
            alt="태그 삭제 아이콘"
            onClick={onClickDelete}
          />
        )}
      </div>
    </>
  );
};

export default Tag;
