import styled from 'styled-components';
import subHeroImg from '../assets/img_home_bottom.png';

const SubHeroWrapper = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  background-color: #cfe5ff;

  & > h1 {
    margin: 0 auto;
    max-width: 60vw;
    padding-top: 120px;
  }

  & > img {
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
    height: 928px;

    & > h1 {
      padding: 0;
      flex-grow: 1;
      display: flex;
      align-items: center;
    }

    & > img {
      margin: 0 auto;
    }
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: center;
    height: auto;
    padding-top: 144px;

    & > h1 {
      display: initial;
      flex-grow: 0;
      margin: 0;
      text-align: left;
    }

    & > img {
      margin: 0;
    }
  }
`;

const SubHeroImg = styled.img``;

const SubHero = () => {
  const INNER_TEXT_PART1 = ' 믿을 수 있는 ';
  const INNER_TEXT_PART2 = '판다마켓 중고 거래';

  return (
    <SubHeroWrapper>
      <h1>
        {INNER_TEXT_PART1}
        <br />
        {INNER_TEXT_PART2}
      </h1>
      <SubHeroImg
        src={subHeroImg}
        alt="판다 둘이 서로 대화를 나누며 물건을 거래하는 이미지"
      />
    </SubHeroWrapper>
  );
};

export default SubHero;
