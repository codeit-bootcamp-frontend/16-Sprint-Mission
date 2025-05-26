const SortDropdown = ({ sortOption, onChange }) => {
  return (
    <select value={sortOption} onChange={(e) => onChange(e.target.value)}>
      <option value="latest">최신순</option>
      <option value="popular">종아요요순</option>
    </select>
  );
};

export default SortDropdown;
// 상품 정렬 옵션을 선택할 수 있는 드롭다운 메뉴 컴포넌트트
