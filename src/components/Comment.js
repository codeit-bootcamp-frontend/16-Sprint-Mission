import "./css/Comment.css";
import { useState } from "react";
import { formatDate } from "../utils/formatUtil";
import userIcon from "../img/user.svg";
import MoreDropdown from "./MoreDropdown";
import TextArea from "./TextArea";
import Button from "./Button";

const Comment = ({ data }) => {
  const { writer, content, updatedAt } = data || {};
  const [showDropdown, setShowDropdown] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const onClickDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const dropdownList = [
    { name: "수정하기", value: "edit" },
    { name: "삭제하기", value: "delete" },
  ];

  const onClickDropdownItem = (item) => {
    // 동작 실행 후 닫기
    switch (item.value) {
      case "edit":
        setIsEditMode(true);
        break;
      case "delete":
        break;
      default:
        onCloseDropdown();
    }
  };

  const onCloseDropdown = () => {
    setShowDropdown(false);
  };

  const onClickCancel = () => {
    setIsEditMode(false);
  };

  const onClickEdit = () => {
    setIsEditMode(false);
  };

  return (
    <div className="comment">
      {isEditMode && <TextArea className="detail__textarea" value={content} />}
      {!isEditMode && (
        <div className="comment__content">
          <span>{content}</span>
          <MoreDropdown
            onClickDropdown={onClickDropdown}
            onClickDropdownItem={onClickDropdownItem}
            onCloseDropdown={onCloseDropdown}
            dropdownList={dropdownList}
            showDropdown={showDropdown}
          />
        </div>
      )}
      <div className="comment__profile__group">
        <div className="comment__profile__info">
          <img
            src={writer.image ?? userIcon}
            alt="사용자 프로필 이미지"
            className="comment__image"
            onError={(e) => {
              e.target.onError = null;
              e.target.src = userIcon;
            }}
          />
          <div className="comment__profile">
            <span className="comment__profile__name">{writer.nickname}</span>
            <span className="comment__profile__time">
              {formatDate(updatedAt)}
            </span>
          </div>
        </div>
        {isEditMode && (
          <div className="comment__profile__action">
            <Button type="cancel" onClick={onClickCancel}>
              취소
            </Button>
            <Button type="small" onClick={onClickEdit}>
              수정 완료
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
