import backLinkIcon from '@assets/icon/ic_back.png';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/BackLink.module.css';

function BackLink() {
  const navigator = useNavigate();

  return (
    <button className={styles.backLink} onClick={() => navigator(-1)}>
      목록으로 돌아가기 <img src={backLinkIcon} alt="뒤로가기 아이콘" />
    </button>
  );
}

export default BackLink;
