import styled from 'styled-components';
import LinkToItemsButton from './LinkToItemsButton';
import mainHeroImg from '../assets/img_home_top.png';

const MainHeroWrapper = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  background-color: #cfe5ff;

  & h1 {
    margin: 0 auto;
    max-width: 80vw;
    padding-top: 48px;
    margin-bottom: 18px;
  }

  & img {
    max-width: 746px;
    width: 100%;
    height: auto;
    vertical-align: bottom;
    margin-top: 132px;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 768px;

    & h1 {
      margin-top: 24px;
      margin-bottom: 24px;
    }
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: center;
    height: auto;

    & h1 {
      margin-bottom: 32px;
      text-align: left;
    }
  }
`;

const MainHeroDescriptionWrapper = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;

const MainHeroImg = styled.img``;

const ResponsiveLineBreak = styled.br`
  display: none;

  @media (min-width: 1200px) {
    display: initial;
  }
`;

const MainHero = () => {
  const INNER_TEXT_PART1 = '일상의 모든 물건을 ';
  const INNER_TEXT_PART2 = '거래해보세요';

  return (
    <MainHeroWrapper>
      <MainHeroDescriptionWrapper>
        <h1>
          {INNER_TEXT_PART1}
          <ResponsiveLineBreak />
          {INNER_TEXT_PART2}
        </h1>
        <LinkToItemsButton>구경하러 가기</LinkToItemsButton>
      </MainHeroDescriptionWrapper>
      <MainHeroImg
        src={mainHeroImg}
        alt="메인 이미지 - 판다 마켓 캐릭터 판다가 인사하는 이미지"
      />
    </MainHeroWrapper>
  );
};

export default MainHero;
