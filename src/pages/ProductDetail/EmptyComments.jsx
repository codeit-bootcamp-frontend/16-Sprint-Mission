import noCommentsImg from '@assets/images/no-comments-image.png';
import styles from './styles/EmptyComments.module.css';

function EmptyComments() {
  return (
    <div className={styles.emptyComments}>
      <img src={noCommentsImg} alt="댓글이 없다는 이미지" />
    </div>
  );
}

export default EmptyComments;
