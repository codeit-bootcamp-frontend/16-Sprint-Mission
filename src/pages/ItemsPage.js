import Card from "../components/Card";
import "../css/pages/ItemsPage.css";
import { useState } from "react";

function ItemsPage() {
  const testArray = [1,2,3,4];
  const [bestItem, setBestItem] = useState({});

  return (
    <div>
      {/* 메인 영역*/}
      <main className="items__container">
        <section>
          <div className="items__container__title">베스트 상품</div>
          <ul className="items__container__best__item">
          {testArray.map((item, index) => <li><Card key={index} data={bestItem}/></li>)}
          </ul>
        </section>
        {/* <section>
          <div className="search-group">
            <div>전체 상품</div>
            <div className="">
              <div>검색할 상품을 입력해주세요</div>
              <div>상품 등록하기</div>
              <div>최신순 좋아요순</div>
            </div>
          </div>
        </section>
        <section>pagination</section> */}
      </main>
    </div>
  );
}

export default ItemsPage;
