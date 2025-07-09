import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getComments, postComment, patchComment, deleteComment } from '../../../api/api';
import { applyFontStyles } from '../../../styles/mixins';
import { FontTypes, ColorTypes } from '../../../styles/theme';
import { applyFlexColumn } from '../../../styles/mixins';
import useFormatTime from '../../../hooks/useFormatTime';
import profile from '../../../assets/images/icons/ic_profile.png';
import CommentEditList from '../../UI/CommentEditList';
import noComment from '../../../assets/images/icons/ic_nocomment.png';

function ProductComments() {
  const { productId } = useParams();
  const [isNoComment, setIsNoComment] = useState(true);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [editCommentId, setEditCommentId] = useState(null);
  const [editContent, setEditContent] = useState('');

  const submitComment = async (content) => {
    try {
      const data = await postComment(productId, content);
      console.log(data);
    } catch (error) {
      console.error('댓글 등록 실패:', error);
    }
  };

  const fetchComments = async (isInitial = false) => {
    try {
      const data = await getComments(productId, 3, isInitial ? null : nextCursor);
      setIsNoComment(data.list.length === 0);
      if (isInitial) {
        setComments(data.list);
      } else {
        setComments((prev) => [...prev, ...data.list]);
      }
      setNextCursor(data.nextCursor);
    } catch (error) {
      console.error('댓글 목록 가져오기 실패:', error);
    }
  };

  const editComment = async (commentId, content) => {
    try {
      const data = await patchComment(commentId, content);
      console.log(data);
    } catch (error) {
      console.error('댓글 수정 실패:', error);
    }
  };

  const removeComment = async (commentId) => {
    try {
      const data = await deleteComment(commentId);
      console.log(data);
    } catch (error) {
      console.error('댓글 삭제 실패:', error);
    }
  };

  useEffect(() => {
    setNextCursor(null);
    fetchComments(true);
  }, [productId]);

  const handlePostComment = (content) => {
    submitComment(content);
    setComments((prevComments) => [...prevComments, { id: 'new', content: content }]);
  };

  const handleEditClick = (commentId) => {
    setEditCommentId(commentId);
    const updateComment = comments.find((comment) => comment.id === commentId);
    setEditContent(updateComment?.content || '');
  };

  const handleCancelEdit = () => {
    setEditCommentId(null);
    setEditContent('');
  };

  const handleSaveEdit = async (commentId, content) => {
    try {
      await editComment(commentId, content);
      setEditCommentId(null);
      setEditContent('');
      setComments((prevComments) =>
        prevComments.map((comment) => (comment.id === commentId ? { ...comment, content: content } : comment))
      );
    } catch (error) {
      console.error('댓글 수정 실패:', error);
    }
  };

  const handleDeleteClick = (commentId) => {
    removeComment(commentId);
    setComments((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
  };

  return (
    <StyledCommentContainer>
      <StyledCommentInput>
        <StyledCommentTitle>문의하기</StyledCommentTitle>
        <textarea
          rows={5}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <StyledButtonWrapper>
          <StyledButton onClick={() => handlePostComment(comment)}>등록</StyledButton>
        </StyledButtonWrapper>
      </StyledCommentInput>

      {isNoComment ? (
        <StyledNoCommentContainer>
          <img
            src={noComment}
            alt="noComment"
          />
          <div>아직 문의가 없어요</div>
        </StyledNoCommentContainer>
      ) : (
        <StyledCommentList>
          {comments?.map((comment) => {
            const time = useFormatTime(comment?.createdAt || '');
            return editCommentId === comment.id ? (
              <StyledEditCommentWrapper key={comment?.id}>
                <StyledEditComment>
                  <textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                  />
                  <StyledEditUserInfo>
                    <StyledProfileContainer>
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
                    </StyledProfileContainer>
                    <StyledEditButtonContainer>
                      <StyledEditButtonWrapper>
                        <StyledEditCancelButton onClick={handleCancelEdit}>취소</StyledEditCancelButton>
                        <StyledEditSaveButton onClick={() => handleSaveEdit(comment.id, editContent)}>
                          수정 완료
                        </StyledEditSaveButton>
                      </StyledEditButtonWrapper>
                    </StyledEditButtonContainer>
                  </StyledEditUserInfo>
                </StyledEditComment>
              </StyledEditCommentWrapper>
            ) : (
              <StyledCommentWrapper key={comment?.id}>
                <StyledCommentContentWrapper>
                  <StyledCommentContent>{comment.content}</StyledCommentContent>
                  <StyledKebabWrapper>
                    <CommentEditList
                      onEditClick={handleEditClick}
                      commentId={comment.id}
                      onDeleteClick={handleDeleteClick}
                    />
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
            );
          })}
        </StyledCommentList>
      )}
    </StyledCommentContainer>
  );
}

export default ProductComments;

const StyledNoCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 59px;

  img {
    width: 196px;
    height: 196px;
  }

  div {
    ${applyFlexColumn('16px')}
  }
`;

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

const StyledEditCommentWrapper = styled.div`
  ${applyFlexColumn('16px')}
  width: 100%;
`;

const StyledEditComment = styled.div`
  ${applyFlexColumn('16px')}
  width: 100%;
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

const StyledEditUserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const StyledProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledEditButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const StyledProfileWrapper = styled.div`
  width: 32px;
  height: 32px;
`;

const StyledNameWrapper = styled.div`
  ${applyFlexColumn('4px')}
`;

const StyledEditButtonWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

const StyledEditCancelButton = styled.button`
  background-color: transparent;
  ${applyFontStyles(FontTypes.SEMIBOLD16, ColorTypes.SECONDARY_GRAY_500)}
`;

const StyledEditSaveButton = styled.button`
  width: 106px;
  height: 42px;
  padding: 12px 23px;
  ${applyFontStyles(FontTypes.SEMIBOLD16, ColorTypes.SECONDARY_GRAY_100)}
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
