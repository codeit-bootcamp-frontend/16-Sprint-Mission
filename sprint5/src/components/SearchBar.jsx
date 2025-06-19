// 검색바
import React, { useState } from "react";
import "./SearchBar.css";
import searchIcon from "../assets/search_icon.png";

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    onSearch(keyword);
  };

  return (
    <div className="search-bar-container">
      <img src={searchIcon} alt="Search" className="search-icon" />
      <input
        type="text"
        placeholder="검색할 상품을 입력해주세요"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="searchbar"
      />
    </div>
  );
};

export default SearchBar;
