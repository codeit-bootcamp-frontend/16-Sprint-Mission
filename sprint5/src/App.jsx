import "./App.css";
import Navi from "./Navi.jsx";
import ItemCard from "./ItemCard.jsx";
import SearchBar from "./SearchBar.jsx";
import AddProductButton from "./AddProductButton.jsx";
import SortDropdown from "./SortDropdown.jsx";
import Pagination from "./Pagination.jsx";

function App() {
  return (
    <>
      <Navi />
      <section>
        <h2>베스트 상품</h2>
        <ItemCard limit={4} /> {/* 데스크탑 기준 베스트 상품 4개*/}
      </section>
      <section>
        <h2>전체 상품</h2>
        <SearchBar />
        <AddProductButton />
        <SortDropdown />
        <ItemCard limit={10} /> {/* 데스크탑 기준 전체 상품 10개 */}
      </section>
      <Pagination />
    </>
  );
}

export default App;
