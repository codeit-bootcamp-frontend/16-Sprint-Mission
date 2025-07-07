import profileImage from '@assets/icon/ic_user.png';
import styles from '../styles/UserProfilCard.module.css';

const classNameByauthority = {
  post: styles.post,
  comment: styles.comment,
};

function UserProfileCard({ authority, name, time, image }) {
  const userImage = image || profileImage;

  return (
    <div className={classNameByauthority[authority]}>
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
