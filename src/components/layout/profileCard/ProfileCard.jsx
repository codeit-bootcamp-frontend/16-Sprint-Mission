import styles from "./ProfileCard.module.css";

const PROFILE_IMAGE_DEFAULT = "/images/icon_profile.png";

const ProfileCard = ({
  ProfileImgUrl = PROFILE_IMAGE_DEFAULT,
  nickname,
  timeStamp,
  Size = 32,
}) => {
  const ProfileImageStyle = {
    width: Size,
  };

  return (
    <div className={styles["profile-container"]}>
      <img
        style={ProfileImageStyle}
        className={styles["profile-image"]}
        src={ProfileImgUrl}
        width={32}
      />
      <div className={styles["profile-context"]}>
        <span className={styles["profile-name"]}>{nickname}</span>
        <span className={styles["time-stamp"]}>{timeStamp}</span>
      </div>
    </div>
  );
};

export default ProfileCard;
