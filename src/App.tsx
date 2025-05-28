import style from './styles/App.module.scss';
import Router from '@/routes/index';
import Header from './components/Header/Header';

function App() {
  return (
    <div className={style.app}>
      {/* {공통 네비게이션 바} */}
      <Header />
      <main className={style.main}>
        {/* {내부 페이지 전환을 위한 라우터} */}
        <Router />
      </main>
    </div>
  );
}

export default App;
