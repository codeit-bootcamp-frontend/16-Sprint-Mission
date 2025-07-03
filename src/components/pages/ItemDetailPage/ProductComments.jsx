import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getComments } from '../../../api/api';
import { applyFontStyles } from '../../../styles/mixins';
import { FontTypes, ColorTypes } from '../../../styles/theme';
import { applyFlexColumn } from '../../../styles/mixins';
import useFormatTime from '../../../hooks/useFormatTime';
import profile from '../../../assets/images/icons/ic_profile.png';
import CommentEditList from '../../UI/CommentEditList';

function ProductComments() {
  const { productId } = useParams();
  const [comments, setComments] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);

  const fetchComments = async () => {
    try {
      const data = await getComments(productId, 3, nextCursor);
      setComments((prev) => [...prev, ...data.list]);
      setNextCursor(data.nextCursor);
    } catch (error) {
      console.error('댓글 목록 가져오기 실패:', error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [productId]);

  const time = useFormatTime(comments[0]?.createdAt);

  return (
    <StyledCommentContainer>
      <StyledCommentInput>
        <StyledCommentTitle>문의하기</StyledCommentTitle>
        <textarea
          rows={5}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <StyledButtonWrapper>
          <StyledButton>등록</StyledButton>
        </StyledButtonWrapper>
      </StyledCommentInput>
      <StyledCommentList>
        {comments?.map((comment) => (
          <StyledCommentWrapper key={comment?.id}>
            <StyledCommentContentWrapper>
              <StyledCommentContent>{comment.content}</StyledCommentContent>

              <StyledKebabWrapper>
                <CommentEditList />
              </StyledKebabWrapper>
            </StyledCommentContentWrapper>
            <StyledUserInfoWrapper>
              <StyledUserInfo>
                <StyledProfileWrapper>
                  <img
                    src={profile}
                    alt="profile"
                  />
                </StyledProfileWrapper>
                <StyledNameWrapper>
                  <StyledName>{comment.writer.nickname}</StyledName>
                  <StyledCreatedAt>{time}</StyledCreatedAt>
                </StyledNameWrapper>
              </StyledUserInfo>
            </StyledUserInfoWrapper>
          </StyledCommentWrapper>
        ))}
      </StyledCommentList>
    </StyledCommentContainer>
  );
}

export default ProductComments;

const StyledCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  margin-bottom: 40px;
`;

const StyledCommentInput = styled.div`
  ${applyFlexColumn('16px')}
`;

const StyledCommentTitle = styled.div`
  ${applyFontStyles(FontTypes.SEMIBOLD16, ColorTypes.SECONDARY_GRAY_800)}
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

const StyledButton = styled.button`
  width: 74px;
  height: 42px;
  padding: 12px 23px;
  background-color: ${({ theme }) => theme.colors[ColorTypes.SECONDARY_GRAY_400]};
`;

const StyledCommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const StyledCommentContent = styled.div`
  ${applyFontStyles(FontTypes.REGULAR14, ColorTypes.SECONDARY_GRAY_800)}
`;

const StyledUserInfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const StyledCommentWrapper = styled.div`
  ${applyFlexColumn('24px')}
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors[ColorTypes.SECONDARY_GRAY_200]};
`;

const StyledCommentContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const StyledUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledProfileWrapper = styled.div`
  width: 32px;
  height: 32px;
`;

const StyledNameWrapper = styled.div`
  ${applyFlexColumn('4px')}
`;

const StyledName = styled.p`
  ${applyFontStyles(FontTypes.REGULAR12, ColorTypes.SECONDARY_GRAY_600)}
`;

const StyledCreatedAt = styled.p`
  ${applyFontStyles(FontTypes.REGULAR12, ColorTypes.SECONDARY_GRAY_400)}
`;

const StyledKebabWrapper = styled.div`
  width: 24px;
  height: 24px;
`;
