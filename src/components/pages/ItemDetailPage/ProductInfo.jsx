import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../../../api/api';
import { ColorTypes, FontTypes } from '../../../styles/theme';
import { applyFontStyles, applyFlexColumn } from '../../../styles/mixins';
import { StyledTagList, StyledTagWrapper } from '../../UI/Taginput';
import profile from '../../../assets/images/icons/ic_profile.png';
import heart from '../../../assets/images/icons/ic_heart.svg';
import kebab from '../../../assets/images/icons/ic_kebab.svg';

function ProductInfo() {
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
        <StyledProductImage>
          <img
            src={product?.images[0]}
            alt={product?.name}
          />
        </StyledProductImage>
        <StyledProductInfoContainer>
          <StyledProductInfoWrapper>
            <StyledProductNamePrice>
              <StyledProductNamePriceWrapper>
                <StyledProductName>{product?.name}</StyledProductName>
                <StyledProductPrice>{product?.price.toLocaleString()}원</StyledProductPrice>
              </StyledProductNamePriceWrapper>
              <img
                src={kebab}
                alt="목록"
              />
            </StyledProductNamePrice>
            <StyledProductDesContainer>
              <StyledProductDesWrapper>
                <StyledSecTitle>상품 소개</StyledSecTitle>
                <StyledProductDescription>{product?.description}</StyledProductDescription>
              </StyledProductDesWrapper>
              <StyledProductTagWrapper>
                <StyledSecTitle>상품 태그</StyledSecTitle>
                <StyledTagList>
                  {product?.tags.map((tag) => (
                    <StyledTagWrapper key={tag}>
                      <span>{`#${tag}`}</span>
                    </StyledTagWrapper>
                  ))}
                </StyledTagList>
              </StyledProductTagWrapper>
            </StyledProductDesContainer>
          </StyledProductInfoWrapper>
          <StyledProductOwnerInfo>
            <StyledOwnerInfo>
              <StyledOwnerProfile>
                <img
                  src={profile}
                  alt="profile"
                />
              </StyledOwnerProfile>
              <div>
                <StyledOwnerNickname>{product?.ownerNickname}</StyledOwnerNickname>
                <StyledProductCreatedAt>
                  {product?.createdAt.split('T')[0].split('-').join('. ')}
                </StyledProductCreatedAt>
              </div>
            </StyledOwnerInfo>
            <StyledDeviderWrapper>
              <StyledDevider />
              <StyledProductFavorite>
                <img
                  src={heart}
                  alt="heart"
                />
                <StyledProductFavoriteCount>{product?.favoriteCount.toLocaleString()}</StyledProductFavoriteCount>
              </StyledProductFavorite>
            </StyledDeviderWrapper>
          </StyledProductOwnerInfo>
        </StyledProductInfoContainer>
      </StyledProductInfo>
    </StyledContainer>
  );
}

export default ProductInfo;

const StyledContainer = styled.div`
  padding-bottom: 33px;
  border-bottom: 1px solid ${({ theme }) => theme.colors[ColorTypes.SECONDARY_GRAY_200]};
`;

const StyledProductInfo = styled.div`
  ${applyFlexColumn('16px')}

  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;
  }

  @media (min-width: 1024px) {
    gap: 24px;
  }
`;

const StyledProductImage = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    width: 340px;
    height: 340px;
  }

  @media (min-width: 1024px) {
    width: 486px;
    height: 486px;
  }
`;

const StyledProductInfoContainer = styled.div`
  ${applyFlexColumn()}
  flex-grow: 1;
  gap: 40px;
`;

const StyledProductInfoWrapper = styled.div`
  ${applyFlexColumn('16px')}
`;

const StyledProductNamePrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors[ColorTypes.SECONDARY_GRAY_200]};

  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

const StyledProductNamePriceWrapper = styled.div`
  ${applyFlexColumn()}
`;

const StyledProductName = styled.div`
  ${applyFontStyles(FontTypes.SEMIBOLD16, ColorTypes.SECONDARY_GRAY_800)};

  @media (min-width: 768px) {
    ${applyFontStyles(FontTypes.SEMIBOLD20, ColorTypes.SECONDARY_GRAY_800)}
  }

  @media (min-width: 1024px) {
    ${applyFontStyles(FontTypes.SEMIBOLD24, ColorTypes.SECONDARY_GRAY_800)}
  }
`;

const StyledProductPrice = styled.div`
  ${applyFontStyles(FontTypes.SEMIBOLD40, ColorTypes.SECONDARY_GRAY_800)};
`;

const StyledProductDesContainer = styled.div`
  ${applyFlexColumn('24px')}
`;

const StyledProductDesWrapper = styled.div`
  ${applyFlexColumn()}
`;

const StyledSecTitle = styled.div`
  ${applyFontStyles(FontTypes.SEMIBOLD14, ColorTypes.SECONDARY_GRAY_800)};
`;

const StyledProductDescription = styled.div`
  ${applyFontStyles(FontTypes.REGULAR16, ColorTypes.SECONDARY_GRAY_400)};
`;

const StyledProductTagWrapper = styled.div`
  ${applyFlexColumn()}
`;

const StyledProductOwnerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

const StyledOwnerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StyledOwnerProfile = styled.div`
  width: 40px;
  height: 40px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledOwnerNickname = styled.div`
  ${applyFontStyles(FontTypes.SEMIBOLD14, ColorTypes.SECONDARY_GRAY_600)};
`;

const StyledProductCreatedAt = styled.div`
  ${applyFontStyles(FontTypes.REGULAR14, ColorTypes.SECONDARY_GRAY_400)};
`;

const StyledDeviderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 34px;
`;

const StyledDevider = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors[ColorTypes.SECONDARY_GRAY_200]};
`;

const StyledProductFavorite = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  width: fit-content;
  padding: 4px 12px;
  border-radius: 35px;
  border: 1px solid ${({ theme }) => theme.colors[ColorTypes.SECONDARY_GRAY_100]};
  margin-left: 14px;

  img {
    width: 20px;
    height: 17.5px;
  }
`;

const StyledProductFavoriteCount = styled.div`
  ${applyFontStyles(FontTypes.MEDIUM16, ColorTypes.SECONDARY_GRAY_500)};
`;
