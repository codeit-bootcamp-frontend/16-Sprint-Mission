import "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div id="container" className="mainPage">
      {/* sec__top-banner */}
      <section className="sec__top-banner">
        <div className="inner"></div>
      </section>
      {/* sec__top-banner */}
      <section className="sec__top-banner">
        <div className="inner">
          {/* atc__hot-area */}
          <article className="atc__hot-area"></article>
          {/* atc__search-area */}
          <article className="atc__search-area"></article>
          {/* atc__register-area */}
          <article className="atc__register-area"></article>
        </div>
      </section>
      {/* sec__bottom-banner */}
      <section className="sec__bottom-banner">
        <div className="inner"></div>
      </section>
    </div>
  );
};

export default MainPage;
