import styles from "./Avatar.module.css";

const Avatar = ({ imgSrc, onClick, className }) => {
  return (
    <button onClick={onClick} className={`avatar ${className}`}>
      <img src={imgSrc} alt="프로필 이미지" className={styles["avatar-img"]} />
    </button>
  );
};

export default Avatar;
