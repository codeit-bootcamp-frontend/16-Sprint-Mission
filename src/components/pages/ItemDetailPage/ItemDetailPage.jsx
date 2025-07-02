import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../../../api/api';

function ItemDetailPage() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProductDetail = async () => {
      const res = await getProductDetail(productId);
      setProduct(res);
    };
    fetchProductDetail();
  }, [productId]);

  return (
    <StyledContainer>
      <StyledProductInfo>
        <div>
          <img
            src={product?.images[0]}
            alt={product?.name}
          />
        </div>
        <div>
          <div>
            <div>{product?.name}</div>
            <div>{product?.price.toLocaleString()}원</div>
            <div>{product?.description}</div>
            <div>{product?.tags[0]}</div>
            <div>{product?.favoriteCount.toLocaleString()}</div>
            <div>{product?.ownerNickname}</div>
            <div>{product?.updatedAt}</div>
          </div>
        </div>
      </StyledProductInfo>
    </StyledContainer>
  );
}

export default ItemDetailPage;

const StyledContainer = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.mobile};

  @media (min-width: 768px) {
    padding: 0 ${({ theme }) => theme.spacing.tablet};
  }

  @media (min-width: 1024px) {
    padding: 0 ${({ theme }) => theme.spacing.desktop};
  }
`;

const StyledProductInfo = styled.div`
  display: flex;
`;
