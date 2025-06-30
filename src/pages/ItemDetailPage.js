import "./css/ItemDetailPage.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemDetail, getItemDetailComments } from "../api/Items";
import Tag from "../components/Tag";
import Button from "../components/Button";
import userIcon from "../img/user.svg";
import HeartButton from "../components/HeartButton";
import TextArea from "../components/TextArea";
import MoreDropdown from "../components/MoreDropdown";
import Comment from "../components/Comment";

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
      const data = await getItemDetailComments(params);
      setComments(data);
    } catch (error) {
    } finally {
    }
  };

  const formatDate = (newDate) => {
    const date = new Date(newDate);
    const formattedDate = date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    return formattedDate;
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
                    {detail.price?.toLocaleString("ko-KR")}원
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
                  {detail.tags.map((tag) => (
                    <Tag hideDeleteIcon>{tag}</Tag>
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
                  placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.

"
                  className="detail__textarea"
                />
              </div>
              <Button
                type="register"
                disabled
                className="detail__register__btn"
              >
                등록
              </Button>
            </div>

            <div>
              <Comment />
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
