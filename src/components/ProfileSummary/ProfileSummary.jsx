import avatarImg from "@/assets/images/img-avatar.png";

const ProfileSummary = ({ name, imgSrc, createdAt, favoriteCount }) => {
  return (
    <div className="profile-area">
      <div className="profile">
        <img src={imgSrc || avatarImg} alt="기본 프로필 이미지" />
        <span className="owner-name">{name}</span>
        <span className="createAt">{createdAt}</span>
      </div>
      <span className="favorite-count">{favoriteCount}</span>
    </div>
  );
};

export default ProfileSummary;
