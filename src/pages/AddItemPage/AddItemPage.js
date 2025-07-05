import { useMemo, useState } from "react";
import Input from "../../components/Input/Input";
import styles from "./AddItemPage.module.scss";
import TextArea from "../../components/TextArea/TextArea";
import ImagePreview from "../../components/ImagePreview/ImagePreview";
import useImageUpload from "../../hooks/useImageUpload";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import useTagUpdate from "../../hooks/useTagUpdate";
import useRequiredValidation from "../../hooks/useRequiredValidation";
import { formatPrice } from "../../utils/formatters";

const IMG_MAX_LIMIT = 1;

const AddItemPage = () => {
  const { uploadImgs, imgValid, handleUploadImg, handleDeleteImg, fileRef } =
    useImageUpload({ maxLength: IMG_MAX_LIMIT });
  const { tagList, tagInput, setTagInput, handleDeleteTag, handleAddTag } =
    useTagUpdate();
  const [prdName, setPrdName] = useState("");
  const [prdDesc, setPrdDesc] = useState("");
  const [prdPrice, setPrdPrice] = useState("");

  const formData = useMemo(() => {
    return {
      prdName,
      prdDesc,
      prdPrice,
      tagList,
    };
  }, [prdName, prdDesc, prdPrice, tagList]);

  const { isAllValid } = useRequiredValidation(formData);

  const handleChangePrice = (value) => {
    const changePrice = formatPrice(value);
    setPrdPrice(changePrice);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="container" className={styles.addItemPage}>
      <div className={styles.addItemPage__inner}>
        <form className={styles.addItemPage__form} onSubmit={handleSubmit}>
          <div className={styles.form__header}>
            <h2 className={styles.form__title}>상품 등록하기</h2>
            <button
              className={`btn ${styles.form__submitBtn}`}
              disabled={!isAllValid}
            >
              등록
            </button>
          </div>
          {/* 상품 이미지 */}
          <div className={styles.form__item}>
            <span className={styles.form__label}>상품 이미지</span>
            <div className={styles.form__imgArea}>
              <div className={styles.imgArea__item}>
                <ImageUpload
                  name={"imgAdd"}
                  onChange={handleUploadImg}
                  ref={fileRef}
                />
              </div>
              {!!uploadImgs.length &&
                uploadImgs.map((file, idx) => (
                  <div className={styles.imgArea__item} key={idx}>
                    <ImagePreview
                      file={file}
                      id={idx}
                      onDelete={handleDeleteImg}
                    />
                  </div>
                ))}
            </div>
            {imgValid.isValid === false && (
              <p className={styles.form__errorMsg}>{imgValid.msg}</p>
            )}
          </div>
          {/* 상품명 */}
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
          {/* 상품 소개 */}
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
          {/* 판매가격 */}
          <div className={styles.form__item}>
            <label htmlFor="price" className={styles.form__label}>
              판매가격
            </label>
            <Input
              type={"tel"}
              name={"price"}
              value={prdPrice}
              onChange={handleChangePrice}
              placeholder={"판매 가격을 입력해주세요"}
            />
          </div>
          {/* 태그 */}
          <div className={styles.form__item}>
            <label htmlFor="tag" className={styles.form__label}>
              태그
            </label>
            <Input
              type={"text"}
              name={"tag"}
              value={tagInput}
              onChange={setTagInput}
              placeholder={"태그를 입력해주세요"}
              onKeyDown={handleAddTag}
            />
            {tagList && (
              <div className={styles.form__tagArea}>
                {tagList.map((tag, id) => (
                  <button
                    type="button"
                    className={styles.tagArea__tagItem}
                    key={id}
                    onClick={() => {
                      handleDeleteTag(id);
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemPage;
