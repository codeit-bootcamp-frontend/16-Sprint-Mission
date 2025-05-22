import styles from "./CommentView.module.css";
import KebabMenu from "../common/KebabMenu/KebabMenu";
import ProfileCard from "../layout/ProfileCard/ProfileCard";

const CommentView = ({ comment, onEdit, onDelete }) => {
  const dropDownItems = [
    { label: "수정하기", onClick: onEdit },
    { label: "삭제하기", onClick: onDelete },
  ];

  return (
    <div className={styles["container"]}>
      <div className={styles["content-container"]}>
        <span className={styles["content"]}>{comment.content}</span>
        <KebabMenu id={comment.id} menuItems={dropDownItems} />
      </div>
      <ProfileCard
        ProfileImgUrl={"/images/icon_profile.png"}
        nickname={comment.writer.nickname}
        timeStamp={comment.updatedAt}
      />
    </div>
  );
};

export default CommentView;
