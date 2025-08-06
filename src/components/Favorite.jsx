import styled from 'styled-components';

import favoriteImg from '../assets/icon/ic_favorite.svg';

const FavoriteWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FavoriteImg = styled.img`
  margin-right: 4px;
  vertical-align: top;
`;

const FavoriteCount = styled.span`
  font-size: 0.75em;
  font-weight: 500;
`;

const Favorite = ({ children }) => {
  return (
    <FavoriteWrapper>
      <FavoriteImg src={favoriteImg} width={16} height={16} />
      <FavoriteCount>{children}</FavoriteCount>
    </FavoriteWrapper>
  );
};

export default Favorite;
