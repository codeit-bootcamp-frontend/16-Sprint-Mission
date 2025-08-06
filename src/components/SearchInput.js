import searchIcon from "../img/search.svg";
import "./css/SearchInput.css";

const SearchInput = ({ value, onInput, onKeyDown, onClick, className }) => {
  return (
    <div className={`search__input__container ${className}`}>
      <input
        className="search__input"
        placeholder="검색할 상품을 입력해주세요"
        value={value}
        onInput={onInput}
        onKeyDown={onKeyDown}
      />
      <img
        src={searchIcon}
        className="search__icon"
        alt="검색 아이콘"
        onClick={onClick}
      />
    </div>
  );
};

export default SearchInput;
