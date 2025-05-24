//Context에 user 정보가 있다면, UserProfile을 표시합니다.
import React, { useContext } from 'react';
import styles from './UserProfile.module.scss';
// 유저 정보를 Context에서 가져오는게 나을듯?
function UserProfile() {
  const [userName, userAvatar] = useContext(UserContext);
  return (
    <div className={styles['user-profile']}>
      <img
        className={styles['user-avatar']}
        src={userAvatar}
        alt="User Avatar"
      />
      <span className={styles['user-name']}>{userName}</span>
    </div>
  );
}

export default UserProfile;
