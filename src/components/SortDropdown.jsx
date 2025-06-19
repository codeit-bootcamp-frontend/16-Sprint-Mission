import { useState } from "react";
import styles from "./SortDropdown.module.css";

const OPTIONS = [
  { value: "recent", label: "최신순" },
  { value: "favorite", label: "좋아요순" },
];

function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);

  // 메뉴 토글
  const handleToggle = () => setOpen((prev) => !prev);

  // 옵션 선택 후: value 전달 + 메뉴 닫기
  const handleSelect = (selectedValue) => {
    onChange(selectedValue);
    setOpen(false);
  };

  // 버튼에 보여줄 레이블
  const selectedLabel = OPTIONS.find((o) => o.value === value)?.label;

  return (
    <div className={styles.selectWrapper}>
      <button type="button" className={styles.button} onClick={handleToggle}>
        <span className={styles.icon}></span>
        <span className={styles.label}>{selectedLabel}</span>
      </button>
      {open && (
        <ul className={styles.menu}>
          {OPTIONS.map((opt) => (
            <li key={opt.value}>
              <button
                type="button"
                className={styles.option}
                onClick={() => handleSelect(opt.value)}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SortDropdown;
