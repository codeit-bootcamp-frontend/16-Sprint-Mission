import { useState, useEffect, useRef } from 'react';
import { getProductComment } from '@service/api.js';
import AskForm from './AskForm';
import CommentItem from './CommentItem';
import EmptyComments from './EmptyComments';
import styles from './styles/ProductAsk.module.css';
import { useLoadMoreComments } from '../../hooks/useLoadMoreComments';

const placeholder =
  '개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.';

function ProductAsk({ productId }) {
  const [commentList, setCommentList] = useState([]);
  const sectionRef = useRef(null);
  const cursorRef = useRef(0);

  useEffect(() => {
    async function getFetch() {
      const comments = await getProductComment(productId);
      setCommentList(comments.list);
      cursorRef.current = comments.nextCursor;
    }
    getFetch();
  }, [productId]);

  async function onIntersect() {
    //초기패칭 이전 0, 더 받아올 댓글 없을 때 null
    if (!cursorRef.current) return;

    const res = await getProductComment(productId, cursorRef.current);

    if (res.list?.length > 0) setCommentList((prev) => [...prev, ...res.list]);
  }

  useLoadMoreComments(sectionRef, onIntersect);

  return (
    <section ref={sectionRef} className={styles.productAsk}>
      <AskForm placeholder={placeholder} method={'POST'}>
        문의하기
      </AskForm>
      {commentList?.length === 0 ? (
        <EmptyComments placeholder={placeholder} />
      ) : (
        <ul>
          {commentList?.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default ProductAsk;
