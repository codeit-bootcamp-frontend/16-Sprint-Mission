import { useEffect, useRef } from "react";
import styles from "./CommentDropdown.module.css";

export default function CommentDropdown({ onEdit, onDelete, onClose }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <ul
      className={styles.dropdownMenu}
      ref={menuRef}
      onClick={(e) => e.stopPropagation()}
    >
      <li onClick={onEdit}>수정하기</li>
      <li onClick={onDelete}>삭제하기</li>
    </ul>
  );
}
