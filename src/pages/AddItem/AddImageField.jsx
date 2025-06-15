import { useEffect, useRef, useState } from "react";
import deleteIcon from "@assets/icon/ic_X.png";
import addItemImg from "@assets/images/addItemImg.png";
import styles from "./styles/AddImageField.module.css";

function AddImageField() {
  const [preview, setPreview] = useState(null);
  const messageRef = useRef(null);

  function handleChange(e) {
    const nextPreview = URL.createObjectURL(e.target.files[0]);

    setPreview(nextPreview);
  }

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  function handleClick(e) {
    if (preview) {
      messageRef.current.style.display = "block";
      e.preventDefault();
    }
  }

  function handleDelete(e) {
    setPreview(null);
  }

  return (
    <>
      <div className={styles.imageField}>
        <label htmlFor="image-input">
          상품 이미지
          <div>
            <img src={addItemImg} alt="이미지 등록하기 버튼" />
            <input
              onClick={handleClick}
              onChange={handleChange}
              type="file"
              id="image-input"
              name="image"
            />
          </div>
        </label>
        {preview && (
          <div className={styles.previewContainer}>
            <img src={preview} alt="등록할 상품 미리보기" />{" "}
            <img
              onClick={handleDelete}
              className={styles.deleteBtn}
              src={deleteIcon}
              alt="미리보기 삭제버튼"
            />
          </div>
        )}
      </div>
      <p className={styles.errMsg} ref={messageRef}>
        *이미지 등록은 최대 1개까지 가능합니다.
      </p>
    </>
  );
}

export default AddImageField;
