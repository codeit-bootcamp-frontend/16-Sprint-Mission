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
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </section>
      <section>
        <h2>전체 상품</h2>
        <SearchBar />
        <AddProductButton />
        <SortDropdown />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </section>
      <Pagination />
    </>
  );
}

export default App;
