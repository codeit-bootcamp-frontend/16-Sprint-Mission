import styles from "./ItemDetailsPage.module.css";
import Nav from "../../components/Nav";
import { useParams } from "react-router";
import ItemDetails from "../../components/ItemDetails";
import ItemComments from "../../components/ItemComments";

const ItemDetailsPage = () => {
  const { itemId } = useParams();

  return (
    <>
      <Nav />
      <main className={styles["page"]}>
        <ItemDetails itemId={itemId} />
        <ItemComments itemId={itemId} />
      </main>
    </>
  );
};

export default ItemDetailsPage;
