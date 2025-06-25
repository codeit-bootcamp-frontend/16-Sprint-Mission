import { useState, useEffect } from 'react';
import { getProductComment } from '@service/api.js';
import AskForm from './AskForm';
import CommentItem from './CommentItem';
import EmptyComments from './EmptyComments';
import styles from './styles/ProductAsk.module.css';

const placeholder =
  '개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.';

function ProductAsk({ productId }) {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    async function getFetch() {
      const comments = await getProductComment(productId);
      setCommentList(comments.list);
    }
    getFetch();
  }, []);

  return (
    <section className={styles.productAsk}>
      <AskForm productId={productId} placeholder={placeholder} method={'POST'}>
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
