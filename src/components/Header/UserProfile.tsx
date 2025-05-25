//Context에 user 정보가 있다면, UserProfile을 표시합니다.
import React, { useContext } from 'react';
import styles from './UserProfile.module.scss';
import { useAuth } from '@/Auth/useAuth';

function UserProfile() {
  const { user } = useAuth();

  return (
    <div className={styles['user-profile']}>
      <img
        className={styles['user-profile--avatar']}
        src={user?.userAvatar}
        alt="User Avatar"
      />
      <span className={styles['user-name']}>{user?.userName}</span>
    </div>
  );
}

export default UserProfile;
