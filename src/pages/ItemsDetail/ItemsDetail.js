import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByProductId } from "../../api/products";
import profileImage from "../../assets/images/profile-image.png";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import styles from "./ItemsDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextInputField from "../additem/components/TextInputField";
import { deleteCommentsByCommentId, getCommentsByProductId, updateCommentById } from "../../api/comments";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { getTimeAgo } from "../../utils/getTimeAgo";
import CommentDropdown from "../../components/Dropdown/CommentDropdown";

export default function ItemsDetail() {
  const { productId } = useParams();
  const [comments, setComments] = useState([]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeDropdownId, setActiveDropdownId] = useState(null);
  const [editCommentId, setEditCommentId] = useState(null); // 수정 중인 댓글 ID
const [editContent, setEditContent] = useState("");       // 수정할 내용

const handleUpdateComment = async (commentId) => {
  try {
    // 수정 요청 보내기
    await updateCommentById({ commentId, content: editContent });

    // 목록 갱신
    const updated = await getCommentsByProductId({ productId });
    setComments(updated.list);

    // 상태 초기화
    setEditCommentId(null);
    setEditContent("");
  } catch (err) {
    console.error("댓글 수정 실패:", err);
  }
};

  const handleDropdownClick = (id) => {
    console.log("토글");
    if (activeDropdownId === id) {
      setActiveDropdownId(null);
    } else {
      setActiveDropdownId(id);
    }
  };

const handleDeleteComment = async (commentId) => {
  try {
    await deleteCommentsByCommentId(commentId);
    // 삭제 후 댓글 목록 다시 불러오기
    const updated = await getCommentsByProductId({ productId});
    setComments(updated.list);
    setActiveDropdownId(null); // 드롭다운 닫기
  } catch (err) {
    console.error("댓글 삭제 실패:", err);
  }
};

  useEffect(() => {
    setLoading(true);
    setError(null);
    const load = async () => {
      try {
        // 상품과 댓글을 병렬로 가져오기
        const [prodRes, commRes] = await Promise.all([
          getProductByProductId({ productId }),
          getCommentsByProductId({ productId, limit: 5 }),
        ]);

        setProduct(prodRes);
        setComments(commRes.list); // 실제 댓글 배열 저장
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [productId]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 발생: {error.message}</p>;

  return (
    <section>
      <h1>아이템 디테일 페이지 ID:{productId}</h1>
      <div className={styles.productInfoContainer}>
        <img
          className={styles.productImage}
          src={product.images[0]}
          alt={product.name}
        />
        <div className={styles.productInfo}>
          <h4>{product.name}</h4>
          <strong>{product.price.toLocaleString()}원</strong>
        </div>
        <hr className={styles.divider} />
        <div className={styles.productMeta}>
          <div className={styles.productMeta1}>
            <h4>상품 소개</h4>
            <p>{product.description}</p>
          </div>
          <div className={styles.productMeta2}>
            <h4>상품 태그</h4>
            <div className={styles.tags}>
              {product.tags.map((value) => {
                return <p key={value}>#{value}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.userInfoContainer}>
        <div className={styles.userInfo}>
          <img
            src={profileImage}
            alt="프로필 이미지"
            style={{
              width: "40px",
              height: "40px",
            }}
          />
          <div className={styles.profileInfo}>
            <p>{product.ownerNickname}</p>
            <p>{product.updatedAt.slice(0, 10).replace(/-/g, "/")}</p>
          </div>
        </div>
        <div className={styles.favourite}>
          <FontAwesomeIcon icon={farHeart} />
          <p>{product.favoriteCount}</p>
        </div>
      </div>
      <hr className={styles.divider2} />
      <div className={styles.inquiryContainer}>
        <TextInputField
          as="textarea"
          label="문의하기"
          name="productInquiryMessage"
          // onChange={handleChange("productDescription")}
          // onBlur={handleBlur("productDescription")}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          // error={errors.productDescription}
          // wrapperClass={styles.inputWrapper}
          // textAreaClass={styles.textArea}
          // errorClass={styles.errorText}
        />
        <div className={styles.inquiryComments}>
          {comments.length === 0 ? (
            <p>아직 댓글이 없습니다.</p>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className={styles.inquiryComment}>
                {editCommentId === comment.id ? (
                  <div className={styles.inquiryCommentEditBox}>
                    <textarea
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      className={styles.editTextarea}
                    />
                    <div className={styles.editActions}>
                      <button onClick={() => handleUpdateComment(comment.id)}>
                        수정 완료
                      </button>
                      <button onClick={() => setEditCommentId(null)}>
                        취소
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className={styles.inquiryCommentHeader}>
                    <p>{comment.content}</p>
                    <div style={{ position: "relative" }}>
                      <FontAwesomeIcon
                        icon={faBars}
                        onMouseDown={(e) => e.stopPropagation()}
                        onClick={() => handleDropdownClick(comment.id)}
                        style={{ cursor: "pointer" }}
                      />
                      {activeDropdownId === comment.id && (
                        <CommentDropdown
                          onEdit={() => {
                            setEditCommentId(comment.id);
                            setEditContent(comment.content);
                            setActiveDropdownId(null);
                          }}
                          onDelete={() => handleDeleteComment(comment.id)}
                          onClose={() => setActiveDropdownId(null)}
                        />
                      )}
                    </div>
                  </div>
                )}
                <div className={styles.inquiryCommentFooter}>
                  <div>
                    <img
                      src={profileImage}
                      alt="프로필 이미지"
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                    />
                  </div>
                  <div className={styles.inquiryCommentFooterInfo}>
                    <strong>{comment.writer.nickname}</strong>
                    <p>{getTimeAgo(comment.updatedAt)}</p>
                  </div>
                </div>
                <hr className={styles.divider} />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
