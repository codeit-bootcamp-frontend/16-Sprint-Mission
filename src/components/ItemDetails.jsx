import styles from "./ItemDetails.module.css";
import { getItemDetails } from "../utils/api";
import { useEffect, useState } from "react";
import { formatDateKRW, formatPriceKRW } from "../utils/formatPrice";

const INITIAL_DETAILS = {
  id: null,
  name: null,
  description: null,
  price: null,
  tags: [],
  images: null,
  ownerId: null,
  favoriteCount: null,
  createdAt: null,
  updatedAt: null,
  ownerNickname: null,
  isFavorite: null,
};

const ItemDetails = ({ itemId }) => {
  const [details, setDetails] = useState(INITIAL_DETAILS);

  const loadItemDetails = async () => {
    const result = await getItemDetails(itemId);
    console.log(result);
    setDetails(result);
  };

  useEffect(() => {
    (async () => {
      await loadItemDetails();
    })();
  }, []);

  return (
    <>
      <div className={styles["details-container"]}>
        <img
          className={styles["details-image"]}
          src={details.images}
          width={486}
        />
        <div className={styles["details-context-container"]}>
          <div className={styles["details-header-container"]}>
            <div className={styles["details-title-container"]}>
              <h1 className={styles["details-title"]}>{details.name}</h1>
              <span className={styles["details-price"]}>
                {formatPriceKRW(details.price)}
              </span>
            </div>
            <img
              className={styles["details-kebab"]}
              src={"/images/ic_kebab.png"}
              width={24}
            />
          </div>
          <div className={styles["details-description-container"]}>
            <div className={styles["details-subtitle-container"]}>
              <h2 className={styles["details-subtitle"]}>상품 소개</h2>
              <span className={styles["details-description"]}>
                {details.description}
              </span>
            </div>
            <div className={styles["details-subtitle-container"]}>
              <h2 className={styles["details-subtitle"]}>상품 태그</h2>
              <div className={styles["details-tag-container"]}>
                {details.tags.map((tag) => {
                  return (
                    <div key={tag} className={styles["details-tag"]}>
                      {`#${tag}`}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles["details-metadata-container"]}>
            <img
              className={styles["details-profile"]}
              src={"/images/icon_profile.png"}
              width={40}
            />
            <div className={styles["details-metadata-context-container"]}>
              <span className={styles["details-nickname"]}>
                {details.ownerNickname}
              </span>
              <span className={styles["details-updatedAt"]}>
                {formatDateKRW(details.updatedAt)}
              </span>
            </div>
            <div className={styles["vertical-line"]} />
            <div className={styles["details-favorite-container"]}>
              <img
                className={styles["details-favorite-image"]}
                src={"/images/img_favorite_inactive.png"}
                width={32}
              />
              <span className={styles["details-favorite-count"]}>
                {details.favoriteCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
