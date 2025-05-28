import Header from "../Header/Header";

import { useState, useRef, useEffect } from "react";

import Img from '../../assets/input/img.svg'
import DeleteImg from '../../assets/input/delete.svg'

import styles from './FormImg.module.css'

function FormImg({ label, name, value, initialPreview, onChange }) {
  const [preview, setPreview] = useState(initialPreview);
  const inputRef = useRef();
  
  const handleClick = () => {
    inputRef?.current?.click();
  };

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = '';
    onChange(name, null);
  };

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview(initialPreview);
      URL.revokeObjectURL(nextPreview);
    };
  }, [value, initialPreview]);

  
  return(
    <div className={styles.formGroup}>
      <Header type={'h3'} text={label} />
      <div className={styles.imgContainer}>
       
        <input
          className={styles.hidden}
          type="file"
          accept="image/*"
          onChange={handleChange}
          ref={inputRef}
        />
        <img src={Img} alt="이미지 등록" onClick={handleClick}/>
        {preview && (
          <div className={styles.imagePreview}>
            <img src={preview} alt="상품 이미지 미리보기" className={styles.previewImage} />
            <button type='button' className={styles.imageDeleteBtn} onClick={handleClearClick}>
              <img src={DeleteImg} alt="선택해제" />
            </button>
          </div>
        )}
        </div>
      
    </div>
  );
}

export default FormImg