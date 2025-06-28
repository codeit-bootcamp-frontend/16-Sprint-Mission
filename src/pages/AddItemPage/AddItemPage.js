import { useState } from "react";
import Input from "../../components/Input/Input";
import styles from "./AddItemPage.module.scss";
import TextArea from "../../components/TextArea/TextArea";

const AddItemPage = () => {
  const [prdName, setPrdName] = useState("");
  const [prdDesc, setPrdDesc] = useState("");
  const [prdPrice, setPrdPrice] = useState("");
  const [prdTag, setPrdTag] = useState("");

  return (
    <div id="container" className={styles.addItemPage}>
      <div className={styles.addItemPage__inner}>
        <form action="" className={styles.addItemPage__form}>
          <div className={styles.form__header}>
            <h2 className={styles.form__title}>상품 등록하기</h2>
            <button className={`btn ${styles.form__submitBtn}`} disabled>
              등록
            </button>
          </div>
          <div className={styles.form__item}>
            <label htmlFor="" className={styles.form__label}>
              상품 이미지
            </label>
            <div className={styles.form__imgArea}>
              <div
                className={`${styles.imgArea__item} ${styles.imgArea__addItem}`}
              >
                <input type="file" name="imgAdd" id="imgAdd" />
                <label htmlFor="imgAdd">
                  <span>이미지 등록</span>
                </label>
              </div>
              <div
                className={`${styles.imgArea__item} ${styles.imgArea__previewItem}`}
              >
                <img src="" alt="" />
                <button type="button" className={styles["imgArea__delBtn"]}>
                  닫기
                </button>
              </div>
            </div>
            <p className={styles.form__errorMsg}>
              *이미지 등록은 최대 1개까지 가능합니다.
            </p>
          </div>
          <div className={styles.form__item}>
            <label htmlFor="title" className={styles.form__label}>
              상품명
            </label>
            <Input
              type={"text"}
              name={"title"}
              value={prdName}
              onChange={setPrdName}
              placeholder={"상품명을 입력해주세요"}
            />
          </div>
          <div className={styles.form__item}>
            <label htmlFor="desc" className={styles.form__label}>
              상품 소개
            </label>
            <TextArea
              name={"desc"}
              id={"desc"}
              value={prdDesc}
              onChange={setPrdDesc}
              placeholder={"상품 소개를 입력해주세요"}
            />
          </div>
          <div className={styles.form__item}>
            <label htmlFor="price" className={styles.form__label}>
              판매가격
            </label>
            <Input
              type={"tel"}
              name={"price"}
              value={prdPrice}
              onChange={setPrdPrice}
              placeholder={"판매 가격을 입력해주세요"}
            />
          </div>
          <div className={styles.form__item}>
            <label htmlFor="tag" className={styles.form__label}>
              태그
            </label>
            <Input
              type={"text"}
              name={"tag"}
              value={prdTag}
              onChange={setPrdTag}
              placeholder={"태그를 입력해주세요"}
            />
            <div className={styles.form__tagArea}>
              <button type="button" className={styles.tagArea__tagItem}>
                티셔츠
              </button>
              <button type="button" className={styles.tagArea__tagItem}>
                상의
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemPage;
