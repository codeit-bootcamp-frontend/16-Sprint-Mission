import { Link } from "react-router-dom";

const AuthGuide = ({ guideTxt, linkTxt, linkUrl }) => {
  return (
    <div className="auth-guide">
      <p className="auth-guide__txt">{guideTxt}</p>
      <Link
        to={linkUrl}
        aria-label={`${linkTxt} 페이지로 이동`}
        className="auth-guide__link"
      >
        {linkTxt}
      </Link>
    </div>
  );
};

export default AuthGuide;
