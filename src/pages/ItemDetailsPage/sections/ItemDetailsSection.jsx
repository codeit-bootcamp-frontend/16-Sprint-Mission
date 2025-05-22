import styles from "./ItemDetailsSection.module.css";
import { getItemDetails } from "../../../utils/api";
import { formatPriceKRW } from "../../../utils/formatPrice";
import ItemImageViewer from "../../../components/common/ItemImageViewer/ItemImageViewer";
import { useAsync } from "../../../hooks/useAsync";
import ItemTitleHeader from "../../../components/ItemDetails/ItemTitleHeader";
import ItemDescription from "../../../components/ItemDetails/ItemDescription";
import ItemMetaData from "../../../components/ItemDetails/ItemMetaData";

const ItemDetailsSection = ({ itemId }) => {
  const { result } = useAsync(getItemDetails, itemId);
  const details = result;

  const handleEditClick = () => {};

  const handleDeleteClick = () => {};

  const dropDownItems = [
    { label: "수정하기", onClick: handleEditClick },
    { label: "삭제하기", onClick: handleDeleteClick },
  ];

  return (
    <>
      <div className={styles["section"]}>
        <div className={styles["product-image-container"]}>
          <ItemImageViewer
            alt={details?.name}
            src={details?.images}
            defaultWidth={486}
            borderRadius={16}
          />
        </div>
        <div className={styles["context-container"]}>
          <ItemTitleHeader
            name={details?.name}
            price={formatPriceKRW(details?.price)}
            id={itemId}
            menuItems={dropDownItems}
          />
          <ItemDescription description={details?.description} tags={details?.tags} />
          <ItemMetaData
            ownerNickname={details?.ownerNickname}
            updatedAt={details?.updatedAt}
            favoriteCount={details?.favoriteCount}
          />
        </div>
      </div>
    </>
  );
};

export default ItemDetailsSection;
