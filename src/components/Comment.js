import "./css/Comment.css";
import { useState } from "react";
import { formatDate } from "../utils/formatUtil";
import userIcon from "../img/user.svg";
import MoreDropdown from "./MoreDropdown";

const Comment = ({ data }) => {
  const { writer, content, updatedAt } = data || {};
  const [showDropdown, setShowDropdown] = useState(false);

  const onClickDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const dropdownList = [
    { name: "수정하기", value: "edit" },
    { name: "삭제하기", value: "delete" },
  ];

  const onClickDropdownItem = () => {
    // 동작 실행 후 닫기
    onCloseDropdown();
  };

  const onCloseDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <div className="comment">
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
      <div className="comment__profile__group">
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
    </div>
  );
};

export default Comment;
