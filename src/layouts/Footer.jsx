import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SNS_LINKS as snsLinks } from '../data/snsLinksData';

const FooterWrapper = styled.div`
  height: 160px;
  background-color: #111322;
  color: #cfcfcf;

  @media (min-width: 1200px) {
    text-align: center;
  }
`;

const FooterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 60px 0;
  padding: 32px 32px 0;
  list-style: none;

  @media (min-width: 768px) {
    justify-content: space-evenly;
  }
`;

const Company = styled.li`
  width: 100%;
  order: 99;
  color: ${({ theme }) => theme.colors.gray400};

  @media (min-width: 768px) {
    width: 35%;
    order: 0;
  }

  @media (min-width: 1200px) {
    width: 35%;
  }
`;

const SNSList = styled.ul`
  display: flex;
  gap: 12px;
  list-style: none;

  @media (min-width: 768px) {
    justify-content: flex-end;
    width: 35%;
  }

  @media (min-width: 1200px) {
    justify-content: center;
  }
`;

const SNSIcon = styled.img`
  vertical-align: middle;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterList>
        <Company>
          <Link to={'https://codeit.kr/'} rel="noopener noreferrer">
            @codeit - 2024
          </Link>
        </Company>
        <li>
          <Link to={'/privacy'}>Privacy Policy</Link>
        </li>
        <li>
          <Link to={'/faq'}>FAQ</Link>
        </li>
        <SNSList>
          {snsLinks.map((e) => (
            <li key={e.key}>
              <Link target="_blank" rel="noopener noreferrer" to={e.link}>
                <SNSIcon src={e.img} alt={e.alt} width={18} height={18} />
              </Link>
            </li>
          ))}
        </SNSList>
      </FooterList>
    </FooterWrapper>
  );
};

export default Footer;
