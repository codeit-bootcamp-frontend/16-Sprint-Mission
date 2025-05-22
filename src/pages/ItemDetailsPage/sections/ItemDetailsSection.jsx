import styles from "./ItemDetailsSection.module.css";
import { getItemDetails } from "../../../utils/api";
import { useEffect, useState } from "react";
import { formatDateKRW, formatPriceKRW } from "../../../utils/formatPrice";
import KebabButton from "../../../components/KebabButton";

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

const IMAGE_DEFAULT_URL = "/images/img_items_default_md.png";

const ItemDetailsSection = ({ itemId }) => {
  const [details, setDetails] = useState(INITIAL_DETAILS);
  const [isImageValid, setIsImageValid] = useState(true);

  const imgSrc = isImageValid && details.images ? details.images : IMAGE_DEFAULT_URL;

  const loadItemDetails = async () => {
    const result = await getItemDetails(itemId);
    setDetails(result);
  };

  const handleKebabClick = () => {};

  useEffect(() => {
    (async () => {
      await loadItemDetails();
    })();
  }, []);

  return (
    <>
      <div className={styles["section"]}>
        <img
          className={styles["product-image"]}
          src={imgSrc}
          onError={() => setIsImageValid(false)}
          width={486}
        />
        <div className={styles["context-container"]}>
          <div className={styles["header-container"]}>
            <div className={styles["title-container"]}>
              <h1 className={styles["title"]}>{details.name}</h1>
              <span className={styles["price"]}>{formatPriceKRW(details.price)}</span>
            </div>
            {/* <KebabButton id={itemId} onClick={handleKebabClick} kebabRef={null} /> */}
          </div>
          <div className={styles["description-container"]}>
            <div className={styles["subtitle-container"]}>
              <h2 className={styles["subtitle"]}>상품 소개</h2>
              <span className={styles["description"]}>{details.description}</span>
            </div>
            <div className={styles["subtitle-container"]}>
              <h2 className={styles["subtitle"]}>상품 태그</h2>
              <div className={styles["tag-container"]}>
                {details.tags.map((tag) => {
                  return (
                    <div key={tag} className={styles["tag"]}>
                      {`#${tag}`}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles["metadata-container"]}>
            <img
              className={styles["profile-image"]}
              src={"/images/icon_profile.png"}
              width={40}
            />
            <div className={styles["metadata-context-container"]}>
              <span className={styles["nickname"]}>{details.ownerNickname}</span>
              <span className={styles["updatedAt"]}>
                {formatDateKRW(details.updatedAt)}
              </span>
            </div>
            <div className={styles["vertical-line"]} />
            <div className={styles["favorite-container"]}>
              <img
                className={styles["favorite-image"]}
                src={"/images/img_favorite_inactive.png"}
                width={32}
              />
              <span className={styles["favorite-count"]}>{details.favoriteCount}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetailsSection;
