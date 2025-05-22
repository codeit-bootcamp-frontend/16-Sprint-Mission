import styles from "./ItemMetaData.module.css";
import ProfileCard from "../layout/ProfileCard/ProfileCard";
import FavoriteButton from "../common/FavoriteButton/FavoriteButton";

const ItemMetaData = ({ ownerNickname, updatedAt, favoriteCount }) => {
  return (
    <div className={styles["metadata-container"]}>
      <ProfileCard nickname={ownerNickname} timeStamp={updatedAt} Size={40} />
      <div className={styles["vertical-line-box"]} />
      <FavoriteButton favoriteCount={favoriteCount} />
    </div>
  );
};

export default ItemMetaData;
