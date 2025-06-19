import styles from "./ItemDetailsPage.module.css";
import { useParams } from "react-router";

import Nav from "../../components/layout/Nav/Nav";
import ItemDetailsSection from "./sections/ItemDetailsSection";
import ItemCommentsSection from "./sections/ItemCommentsSection";

const ItemDetailsPage = () => {
  const { itemId } = useParams();

  return (
    <>
      <Nav />
      <main className={styles["page"]}>
        <ItemDetailsSection itemId={itemId} />
        <ItemCommentsSection itemId={itemId} />
      </main>
    </>
  );
};

export default ItemDetailsPage;
