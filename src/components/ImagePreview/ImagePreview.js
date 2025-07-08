import { useEffect, useState } from "react";
import styles from "./ImagePreview.module.scss";

const ImagePreview = ({ file, id, onDelete }) => {
  const [preview, setPreview] = useState();

  useEffect(() => {
    const fileURL = URL.createObjectURL(file);

    setPreview(fileURL);

    return () => {
      URL.revokeObjectURL(file);
    };
  }, [file]);

  const handleClickDelete = () => onDelete(id);

  return (
    <div className={`${styles.imagePreview}`}>
      <img src={preview} alt="" className={styles.imagePreview__image} />
      <button
        type="button"
        className={styles.imagePreview__delBtn}
        onClick={handleClickDelete}
      >
        닫기
      </button>
    </div>
  );
};

export default ImagePreview;
