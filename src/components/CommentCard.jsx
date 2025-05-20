import { useEffect, useRef, useState } from "react";
import { formatDateKRW } from "../utils/formatPrice";
import styles from "./CommentCard.module.css";
import CommentProfile from "./CommentProfile";
import CommentEditForm from "./CommentEditForm";
import CommentView from "./CommentView";
import styled from "styled-components";

const CommentContainer = styled.div`
  z-index: ${({ $isKebabSelected }) => ($isKebabSelected ? 1 : 0)};
`;

const CommentCard = ({ comment, kebabSelectedId, setKebabSelectedId }) => {
  const [isKebabSelected, setIsKebabSelected] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const DropDownRef = useRef();
  const kebabRef = useRef();

  const handleKebabMenuClick = (e) => {
    if (kebabSelectedId === comment.id && isKebabSelected) {
      setKebabSelectedId(null);
      return;
    }
    setKebabSelectedId(Number(e.target.name));
  };

  const handleDropDownOutsideClick = (e) => {
    if (DropDownRef.current && DropDownRef.current.contains(e.target)) {
      return;
    } else if (kebabRef.current.contains(e.target)) {
      return;
    } else {
      setKebabSelectedId(null);
    }
  };

  const handleEditClick = (e) => {
    e.preventDefault();
    setKebabSelectedId(null);
    setIsEditing(true);
  };

  const handleEditCancelClick = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEditSubmitClick = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleDeleteClick = (e) => {
    e.preventDefault();
  };

  const dropDownItems = [
    { label: "수정하기", onClick: handleEditClick },
    { label: "삭제하기", onClick: handleDeleteClick },
  ];

  useEffect(() => {
    setIsKebabSelected(kebabSelectedId === comment.id);
  }, [kebabSelectedId]);

  useEffect(() => {
    if (isEditing) setIsKebabSelected(false);
  }, [isEditing]);

  useEffect(() => {
    if (!isKebabSelected) {
      document.removeEventListener("mousedown", handleDropDownOutsideClick);
    } else {
      document.addEventListener("mousedown", handleDropDownOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleDropDownOutsideClick);
    };
  }, [isKebabSelected]);

  return (
    <CommentContainer
      className={styles["container"]}
      $isKebabSelected={isKebabSelected}
    >
      {isEditing ? (
        <CommentEditForm
          comment={comment}
          onCancelClick={handleEditCancelClick}
          onSubmitClick={handleEditSubmitClick}
        />
      ) : (
        <CommentView
          id={comment.id}
          content={comment.content}
          onKebabClick={handleKebabMenuClick}
          kebabRef={kebabRef}
          isKebabSelected={isKebabSelected}
          dropDownItems={dropDownItems}
          DropDownRef={DropDownRef}
        />
      )}
      <CommentProfile
        ProfileImgUrl={"/images/icon_profile.png"}
        nickname={comment.writer.nickname}
        timeStamp={formatDateKRW(comment.updatedAt)}
      />
    </CommentContainer>
  );
};

export default CommentCard;
