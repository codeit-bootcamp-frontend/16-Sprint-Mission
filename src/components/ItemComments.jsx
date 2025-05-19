import styles from "./ItemComments.module.css";
import { useEffect, useState } from "react";
import { getItemComments } from "../utils/api";

const ItemComments = ({ itemId }) => {
  const [comments, setComments] = useState([]);

  const loadItemComments = async () => {
    const result = await getItemComments(itemId);
    const { list } = result;
    setComments(list);
  };

  useEffect(() => {
    (async () => {
      await loadItemComments();
    })();
  }, []);

  return (
    <section className={styles["section"]}>
      <div className={styles["inquire-container"]}>
        <label className={styles["inquire-label"]} />
      </div>
    </section>
  );
};

export default ItemComments;
