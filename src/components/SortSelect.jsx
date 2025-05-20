function SortSelect({ sortKey, onChange }) {
  // console.log(sortKey);
  return (
    <select value={sortKey} onChange={(e) => onChange(e.target.value)}>
      <option value="updatedAt">최신순</option>
      <option value="favoriteCount">좋아요순</option>
    </select>
  );
}

export default SortSelect;
