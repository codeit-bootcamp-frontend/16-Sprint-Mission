import { Link } from 'react-router-dom';
import styled from 'styled-components';

import defaultProfile from '../assets/icon/ic_default_profile.png';

const StyledProfile = styled.img`
  vertical-align: bottom;
`;

const Profile = ({ user }) => {
  const profileImg = user.img ?? defaultProfile;

  return (
    <Link to={'/mypage'}>
      <StyledProfile src={profileImg} alt={'나의 프로필 이미지'} />
    </Link>
  );
};

export default Profile;
