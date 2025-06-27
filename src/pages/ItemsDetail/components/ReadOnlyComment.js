import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import CommentDropdown from "../../../components/Dropdown/CommentDropdown";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./ReadOnlyComment.module.css";
import { getTimeAgo } from "../../../utils/getTimeAgo";
import profileImage from "../../../assets/images/profile-image.png";

export function ReadOnlyComment({ comment, onEdit, onDelete }) {
  const [openDropdown, setOpenDropdown] = useState(false);

  
  return (
    <div className={styles.inquiryCommentContainer}>
      <div className={styles.inquiryCommentHeader}>
        <p>{comment.content}</p>
        <div style={{ position: "relative" }}>
          <FontAwesomeIcon
            icon={faBars}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={() => setOpenDropdown((o) => !o)}
            className={styles.dropDownMenu}
          />
          {openDropdown && (
            <CommentDropdown
              onEdit={() => {
                onEdit();
                setOpenDropdown(false);
              }}
              onDelete={() => {
                onDelete();
                setOpenDropdown(false);
              }}
              onClose={() => setOpenDropdown(false)}
            />
          )}
        </div>
      </div>
      {/* 프로필만 표시 */}
      <div className={styles.inquiryCommentFooter}>
        <div className={styles.profileGroup}>
          <img
            src={profileImage}
            alt="프로필 이미지"
            style={{ width: "32px", height: "32px" }}
          />
          <div className={styles.inquiryCommentFooterInfo}>
            <p className={styles.inquiryWriter}>{comment.writer.nickname}</p>
            <p className={styles.inquiryUpdatedAt}>
              {getTimeAgo(comment.updatedAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
