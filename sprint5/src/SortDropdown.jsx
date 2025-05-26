// 정렬 드롭다운
const SortDropdown = ({ sortOption, onChange }) => {
  return (
    <select value={sortOption} onChange={(e) => onChange(e.target.value)}>
      <option value="latest">최신순</option>
      <option value="popular">종아요순</option>
    </select>
  );
};

export default SortDropdown;
