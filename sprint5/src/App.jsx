import "./App.css";
import Navi from "./Navi.jsx";
import SearchBar from "./SearchBar.jsx";
import AddProductButton from "./AddProductButton.jsx";
import SortDropdown from "./SortDropdown.jsx";
import Pagination from "./Pagination.jsx";
import BestItemCard from "./BestItemCard.jsx";
import AllItemCard from "./AllItemCard.jsx";

function App() {
  return (
    <>
      <Navi />
      <section>
        <h2>베스트 상품</h2>
        <BestItemCard />
      </section>
      <section>
        <h2>전체 상품</h2>
        <SearchBar />
        <AddProductButton />
        <SortDropdown />
        <AllItemCard />
      </section>
      <Pagination />
    </>
  );
}

export default App;
