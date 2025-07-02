import { useState } from "react";
import mobailImg from "../assets/images/ic_sort.png";
import "../styles/SortSelect.css";

function SortSelect({ sortKey, onChange }) {
  const [open, setOpen] = useState(false);

  const width = window.innerWidth;

  const labelMap = {
    updatedAt: "최신순",
    favoriteCount: "좋아요순",
  };

  return (
    <div className="Products__sort">
      <button onClick={() => setOpen(!open)} className="sort__button">
        {width < 768 ? (
          <img className="sort__button--drop" src={mobailImg} alt="드롭 다운" />
        ) : (
          <div className="sort__button--drop">{labelMap[sortKey]}</div>
        )}
      </button>
      {open && (
        <ul className="Products__sortdown">
          <li
            onClick={() => {
              onChange("updatedAt");
              setOpen(false);
            }}
          >
            최신순
          </li>
          <li
            onClick={() => {
              onChange("favoriteCount");
              setOpen(false);
            }}
          >
            좋아요순
          </li>
        </ul>
      )}
    </div>
  );
}

export default SortSelect;
