import profileImage from '@assets/icon/ic_user.png';
import styles from '../styles/UserProfilCard.module.css';

function UserProfileCard({ authority, name, time, image }) {
  const userImage = image ? image : profileImage;

  return (
    <div className={authority === 'post' ? styles.post : styles.comment}>
      <div className={styles.userInfo}>
        <img src={userImage} alt="사용자 프로필 사진" />
        <div>
          <div className={styles.userName}>{name}</div>
          <div className={styles.postTime}>{time}</div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileCard;
