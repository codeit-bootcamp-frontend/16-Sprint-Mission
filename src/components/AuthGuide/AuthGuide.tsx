import styled from "@emotion/styled/macro";
import { theme } from "@styles/theme";
import { Link } from "react-router-dom";

interface Props {
  guideTxt: string;
  linkTxt: string;
  linkUrl: string;
}

const AuthGuide = ({ guideTxt, linkTxt, linkUrl }: Props) => {
  return (
    <AuthGuideBox>
      <p>{guideTxt}</p>
      <AuthGuideLink to={linkUrl} aria-label={`${linkTxt} 페이지로 이동`}>
        {linkTxt}
      </AuthGuideLink>
    </AuthGuideBox>
  );
};

const AuthGuideBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  font-size: 14px;
  font-weight: 500;
  gap: 5px;
`;

const AuthGuideLink = styled(Link)`
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 2px;
  color: ${theme.colors.primaryColor};
`;

export default AuthGuide;
