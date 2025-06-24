import { useState, useEffect } from 'react';
import UserProfileCard from '@components/userProfileCard';
import { getProductComment } from '@service/api.js';
import EmptyComments from './EmptyComments';
import styles from './styles/ProductAsk.module.css';
import KebabMenu from '@components/KebabMenu';

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
      <form>
        <label>
          문의하기
          <textarea name="" id="" placeholder={placeholder}></textarea>
        </label>
        <button>등록</button>
      </form>

      {commentList?.length === 0 ? (
        <EmptyComments />
      ) : (
        <ul>
          {commentList?.map((comment) => (
            <li key={comment.id}>
              {comment.content}
              <UserProfileCard
                authority={'comment'}
                image={comment.writer.image}
                name={comment.writer.nickname}
                time={comment.updatedAt}
              />
              <KebabMenu />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ProductAsk;
