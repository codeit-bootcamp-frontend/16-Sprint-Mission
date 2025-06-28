import { Link, useLocation } from "react-router-dom";

const GNB_MENU = [
  { path: "/free", title: "자유게시판", activePath: ["/free"] },
  { path: "/items", title: "중고마켓", activePath: ["/items", "/additem"] },
];

const Gnb = () => {
  const location = useLocation();
  return (
    <nav className="header__gnb">
      <ul>
        {GNB_MENU.map((gnb) => {
          const isActive = gnb.activePath.includes(location.pathname);

          return (
            <li key={gnb.path}>
              <Link to={gnb.path} className={isActive ? "current" : ""}>
                {gnb.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Gnb;
