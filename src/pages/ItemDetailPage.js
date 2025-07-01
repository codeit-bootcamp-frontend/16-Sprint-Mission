import "./css/ItemDetailPage.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useReducer } from "react";
import { useParams } from "react-router-dom";
import { getItemDetail, getItemDetailComments } from "../api/Items";
import { formatDate, formatPrice } from "../utils/formatUtil";
import Tag from "../components/Tag";
import Button from "../components/Button";
import userIcon from "../img/user.svg";
import inquiryEmpty from "../img/inquiry_empty.jpg";
import HeartButton from "../components/HeartButton";
import TextArea from "../components/TextArea";
import MoreDropdown from "../components/MoreDropdown";
import Comment from "../components/Comment";
import { validateInput } from "../utils/formValidation";

const ItemDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detail, setDetail] = useState({
    favoriteCount: 0,
    images: [],
    tags: [],
    name: "",
    description: "",
  });
  const [comments, setComments] = useState([
    {
      id: 0,
      content: "",
      updatedAt: "",
      writer: {
        id: 0,
        nickname: "",
        image: null,
      },
    },
  ]);

  // 리듀서 관련
  const initialCommentReducerState = {
    inquiry: { value: "", validInfo: { isValid: null, message: "" } },
  };

  const commentReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_FIELD":
        return {
          ...state,
          [action.field]: {
            ...state[action.field],
            value: action.value,
          },
        };
      case "UPDATE_VALIDATE":
        return {
          ...state,
          [action.field]: {
            ...state[action.field],
            validInfo: {
              isValid: action.value.isValid,
              message: action.value.message,
            },
          },
        };
      default:
        return state;
    }
  };

  const [commentState, dispatchForm] = useReducer(
    commentReducer,
    initialCommentReducerState
  );

  /* 유효성 체크 */
  const updateValidate = (name, val) => {
    const validateResult = validateInput(name, val);
    dispatchForm({
      type: "UPDATE_VALIDATE",
      field: name,
      value: validateResult,
    });
  };

  /* 문의하기 값 업데이트 */
  const onChangeComment = (name, value) => {
    let trimVal = value.trim();
    dispatchForm({
      type: "CHANGE_FIELD",
      field: name,
      value,
    });
    updateValidate(name, trimVal);
  };

  const disableInquiryRegisterButton = () => {
    return !commentState.inquiry.validInfo.isValid;
  };

  const fetchItemDetail = async (params) => {
    try {
      const data = await getItemDetail(params);
      setDetail(data);
    } catch (error) {
    } finally {
    }
  };

  const fetchItemDetailComments = async (params) => {
    try {
      const { list } = await getItemDetailComments(params);
      setComments(list);
    } catch (error) {
    } finally {
    }
  };

  const onClickReturn = () => {
    navigate("/items");
  };

  useEffect(() => {
    fetchItemDetail({ productId: id });
    fetchItemDetailComments({ productId: id });
  }, [id]);

  return (
    <div className="detail__container">
      <div className="detail__container__inner">
        <div className="detail__content">
          <img
            src={detail.images[0]}
            alt="상품 이미지"
            className="detail__image"
          />

          <div className="detail__info__group">
            <div className="detail__info">
              <div className="detail__summary">
                <div className="detail__title__group">
                  <span className="detail__title">{detail.name}</span>
                  <span className="detail__price">
                    {formatPrice(detail.price)}원
                  </span>
                </div>
                <MoreDropdown />
              </div>
              <div className="detail__description__group">
                <span className="detail__subtitle">상품 소개</span>
                <span className="detail__description">
                  {detail.description}
                </span>
              </div>
              <div className="detail__tag__group">
                <span className="detail__subtitle">상품 태그</span>
                <div className="detail__tagList">
                  {detail.tags.map((tag, index) => (
                    <Tag key={`${tag}-${index}`} hideDeleteIcon>
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
            </div>
            <div className="detail__profile__group">
              <div className="detail__profile__content">
                <img
                  src={userIcon}
                  alt="판다 썸네일 아이콘"
                  className="detail__profile__image"
                />
                <div className="detail__profile__info">
                  <span className="detail__profile__name">
                    {detail.ownerNickname}
                  </span>
                  <span className="detail__profile__date">
                    {formatDate(detail.updatedAt)}
                  </span>
                </div>
              </div>
              <div className="detail__profile__button">
                <HeartButton size="large" isLiked={detail.isFavorite}>
                  {detail.favoriteCount}
                </HeartButton>
              </div>
            </div>
          </div>
        </div>

        <div className="detail__comment__group">
          <div className="detail__comment">
            <div className="detail__input__group">
              <div className="detail__input">
                <span className="detail__subtitle">문의하기</span>
                <TextArea
                  name="inquiry"
                  value={commentState.inquiry.value}
                  message={commentState.inquiry.validInfo.message}
                  isValid={commentState.inquiry.validInfo.isValid}
                  placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.

"
                  className="detail__textarea"
                  onChange={onChangeComment}
                />
              </div>
              <Button
                type="register"
                disabled={disableInquiryRegisterButton()}
                className="detail__register__btn"
              >
                등록
              </Button>
            </div>

            <div className="detail__comment__list">
              {!comments.length && (
                <div className="detail__comment__empty">
                  <img src={inquiryEmpty} alt="댓글 없음 이미지" />
                  <span>아직 문의가 없어요</span>
                </div>
              )}

              {comments.map((comment) => (
                <Comment key={comment.id} data={comment} />
              ))}
            </div>
          </div>
          <Button
            type="return"
            className="detail__return__btn"
            onClick={onClickReturn}
          >
            목록으로 돌아가기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailPage;
