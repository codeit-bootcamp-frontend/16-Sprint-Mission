import "./SortMethod.css";

function SortMethod({ onSortSelection }) {
  return (
    <div className="toggleList">
      <div className="toggleItem" onClick={() => onSortSelection("recent")}>
        최신순
      </div>
      <div className="toggleItem" onClick={() => onSortSelection("favorite")}>
        좋아요순
      </div>
    </div>
  );
}

export default SortMethod;
