function ItemsPage() {
  return (
    <div>
      {/* 메인 영역*/}
      <main>
        <section>
          <div>베스트 상품</div>
        </section>
        <section>
          <div className="search-group">
            <div>전체 상품</div>
            <div className="">
              <div>검색할 상품을 입력해주세요</div>
              <div>상품 등록하기</div>
              <div>최신순 좋아요순</div>
            </div>
          </div>
        </section>
        <section>pagination</section>
      </main>
    </div>
  );
}

export default ItemsPage;
