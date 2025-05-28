// 정렬 드롭다운
const SortDropdown = ({ sortOption, onChange }) => {
  return (
    <select value={sortOption} onChange={(e) => onChange(e.target.value)}>
      <option value="recent">최신순</option>
      <option value="favorite">종아요순</option>
    </select>
  );
};

export default SortDropdown;
