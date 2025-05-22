import { useNavigate } from "react-router";
import { useIsLogin } from "../contexts/LoginStateContext";
import styles from "./ItemsSearchHeader.module.css";
import { useSearchQueryString } from "../hooks/useSearchQueryString";
import SortDropDown from "./SortDropdown";
import SearchInput from "./SearchInput";

const ItemsSearchHeader = ({ setOrder, setOffset, setKeyword }) => {
  const isLogin = useIsLogin();
  const onCreateNewItemNavigate = useNavigate();

  const { inputValue, setInputValue, onSearchSubmit } = useSearchQueryString();

  const handleSearchInputChange = (e) => setInputValue(e.target.value);

  const handleSearchInputEnterPress = (e) => {
    if (e.key === "Enter") {
      setOffset(1);
      onSearchSubmit();
      setKeyword(inputValue);
    }
  };

  const handleCreateNewItemClick = (e) => {
    e.preventDefault();
    onCreateNewItemNavigate("/additem");
  };

  return (
    <div className={styles["section-header-container"]}>
      <h2 className={styles["section-title"]}>전체 상품</h2>
      {isLogin && (
        <button
          className={`${styles["search-submit"]} button-style`}
          onClick={handleCreateNewItemClick}
        >
          상품 등록하기
        </button>
      )}
      <SearchInput
        inputValue={inputValue}
        onInputChange={handleSearchInputChange}
        onInputEnterPress={handleSearchInputEnterPress}
      />
      <SortDropDown
        setKey={setOrder}
        dropdownItems={[
          {
            label: "최신순",
            key: "recent",
          },
          {
            label: "좋아요순",
            key: "favorite",
          },
        ]}
      />
    </div>
  );
};

export default ItemsSearchHeader;
