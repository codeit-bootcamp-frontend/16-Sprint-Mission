import styles from "./CommentView.module.css";
import DropDownMenu from "./DropDownMenu";
import KebabButton from "./KebabButton";

const CommentView = ({
  id,
  content,
  onKebabClick,
  kebabRef,
  isKebabSelected,
  dropDownItems,
  DropDownRef,
}) => {
  return (
    <div className={styles["content-container"]}>
      <span className={styles["content"]}>{content}</span>
      <KebabButton id={id} onClick={onKebabClick} kebabRef={kebabRef} />
      {isKebabSelected && (
        <DropDownMenu menuItems={dropDownItems} DropDownRef={DropDownRef} />
      )}
    </div>
  );
};

export default CommentView;
