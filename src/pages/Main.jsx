import { Link } from "react-router-dom";

export function Main() {
  return (
    <>
      <h1>메인 페이지</h1>
      <Link to="items">중고마켓 바로 가기</Link>
    </>
  );
}
