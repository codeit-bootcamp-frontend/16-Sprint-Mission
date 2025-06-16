import { useEffect, useRef, useState } from 'react';
import deleteIcon from '@assets/icon/ic_X.png';
import addItemImg from '@assets/images/addItemImg.png';
import styles from './styles/AddImageField.module.css';

function AddImageField() {
  const [preview, setPreview] = useState(null);
  const [showErrMsg, setShowErrMsg] = useState(false);
  const imageValueRef = useRef(null);

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
      console.log(showErrMsg);
      setShowErrMsg(true);
      e.preventDefault();
    } else {
      setShowErrMsg(false);
    }
  }

  function handleDelete() {
    setPreview(null);
    imageValueRef.current.value = null;
  }

  return (
    <>
      <div className={styles.imageField}>
        <label htmlFor="image-input">
          상품 이미지
          <div>
            <img src={addItemImg} alt="이미지 등록하기 버튼" />
            <input
              ref={imageValueRef}
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
            <img src={preview} alt="등록할 상품 미리보기" />{' '}
            <img
              onClick={handleDelete}
              className={styles.deleteBtn}
              src={deleteIcon}
              alt="미리보기 삭제버튼"
            />
          </div>
        )}
      </div>
      {showErrMsg && (
        <p className={styles.errMsg}>*이미지 등록은 최대 1개까지 가능합니다.</p>
      )}
    </>
  );
}

export default AddImageField;
