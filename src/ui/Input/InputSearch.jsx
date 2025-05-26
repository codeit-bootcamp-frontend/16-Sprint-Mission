/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import searchImg from "../../assets/images/ic-search.svg";

const InputSearch = ({ keyword, onSearch, className, placeholder }) => {
  const [value, setValue] = useState(keyword);

  const handleSearch = () => {
    onSearch({ keyword: value });
  };

  useEffect(() => {
    setValue(keyword);
  }, [keyword]);

  return (
    <div css={InputSearchStyle} className={className}>
      <img src={searchImg} alt="상품 검색" className="search-ico" />
      <input
        id="inputSearch"
        type="search"
        name="keyword"
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
    </div>
  );
};

export default InputSearch;

const InputSearchStyle = css`
  display: flex;
  align-items: center;
  padding: 14px 10px 14px 20px;
  gap: 8px;
  background: var(--gray100);
  border-radius: var(--border-radius-sm);

  input {
    width: 100%;
    font-size: 16px;
    background: transparent;
  }

  input::placeholder {
    color: var(--gray400);
  }

  .search-ico {
    width: 16px;
    height: 16px;
  }

  @media (min-width: 1200px) {
    padding: 14px 20px;
  }
`;
