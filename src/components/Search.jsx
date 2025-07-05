import "./Search.css";
import ic_search from "../assets/ic_search.png";
const Search = ({ value, onChange }) => {
  const onChangeSearch = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="search">
      <img src={ic_search} />
      <input
        value={value}
        onChange={onChangeSearch}
        placeholder="검색할 상품을 입력해주세요"
      />
    </div>
  );
};
export default Search;
