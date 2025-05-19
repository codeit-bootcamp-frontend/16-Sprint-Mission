import { useEffect, useRef, useState } from "react";
import Nav from "../../components/Nav";
import styles from "./AddItemPage.module.css";
import { formatNumber } from "../../utils/formatPrice";

const AddItemPage = () => {
  const [preview, setPreview] = useState(null);

  const [hintVisible, setHintVisible] = useState(false);
  const [tag, setTag] = useState("");

  const [imgUrl, setImgUrl] = useState(null);
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tagList, setTagList] = useState([]);

  //prettier-ignore
  const isSubmitEnabled = imgUrl && product && description && price && tagList.length;

  const fileInputRef = useRef();

  const handleAddItemClick = () => {
    if (!imgUrl) fileInputRef.current.click();
    else setHintVisible(true);
  };

  const handleInputFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImgUrl(file);
  };

  const handleInputFileDeleteClick = () => {
    const inputNode = fileInputRef.current;
    if (!inputNode) return;
    inputNode.value = "";
    setImgUrl(null);
    setHintVisible(false);
  };

  const handleInputProductChange = (e) => setProduct(e.target.value);

  const handleInputDescriptionChange = (e) => setDescription(e.target.value);

  const handleInputPriceChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, "");
    const formattedValue = formatNumber(numericValue);
    setPrice(formattedValue);
  };

  const handleInputTagChange = (e) => setTag(e.target.value);

  const handleTagInputEnterPress = (e) => {
    if (e.key === "Enter") {
      if (tagList.indexOf(e.target.value) !== -1) return;
      setTagList((prev) => [...prev, e.target.value]);
      setTag("");
    }
  };

  const handleTagDelete = (e) => {
    setTagList((prev) => {
      const tagIndex = prev.indexOf(e.target.name);
      return [...prev.slice(0, tagIndex), ...prev.slice(tagIndex + 1)];
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (!imgUrl) return;
    const nextPreview = URL.createObjectURL(imgUrl);
    setPreview(nextPreview);

    return () => {
      setPreview();
      URL.revokeObjectURL(nextPreview);
    };
  }, [imgUrl]);

  return (
    <>
      <Nav currentSection={"items"} />
      <form className={styles["form"]}>
        <div className={styles["title-container"]}>
          <h1 className={styles["title"]}>상품 등록하기</h1>
          <button
            className={`button-style ${styles["submit"]}`}
            disabled={!isSubmitEnabled}
            onClick={handleSubmit}
          >
            등록
          </button>
        </div>
        <div className={styles["subtitle-container"]}>
          <h2 className={styles["subtitle"]}>상품 이미지</h2>
          <div className={styles["images-container"]}>
            <div
              className={`${styles["input"]} ${styles["button-additems"]}`}
              onClick={handleAddItemClick}
            >
              <img
                className={styles["additems-preview-image"]}
                src="./images/ic_plus.png"
                width={48}
              />
              <span className={styles["additems-text"]}>이미지 등록</span>
              <input
                style={{ display: "none" }}
                type="file"
                ref={fileInputRef}
                onChange={handleInputFileChange}
              />
            </div>
            {preview && (
              <>
                <div className={styles["image-container"]}>
                  <img className={styles["image"]} src={preview} />
                  <img
                    className={styles["icon-delete"]}
                    src={"./images/ic_X.png"}
                    onClick={handleInputFileDeleteClick}
                    width={24}
                  />
                </div>
              </>
            )}
          </div>
          {hintVisible && (
            <span className={styles["input-additems-hint"]}>
              *이미지 등록은 최대 1개까지 가능합니다.
            </span>
          )}
        </div>
        <div className={styles["subtitle-container"]}>
          <h2 className={styles["subtitle"]}>상품명</h2>
          <input
            value={product}
            className={styles["input"]}
            placeholder="상품명을 입력해주세요"
            onChange={handleInputProductChange}
          />
        </div>
        <div className={styles["subtitle-container"]}>
          <h2 className={styles["subtitle"]}>상품 소개</h2>
          <textarea
            className={`${styles["input"]} ${styles["input-textarea"]}`}
            placeholder="상품 소개를 입력해주세요"
            onChange={handleInputDescriptionChange}
            value={description}
          />
        </div>
        <div className={styles["subtitle-container"]}>
          <h2 className={styles["subtitle"]}>판매가격</h2>
          <input
            inputMode="numeric"
            className={styles["input"]}
            placeholder="판매 가격을 입력해주세요"
            onChange={handleInputPriceChange}
            value={price}
          />
        </div>
        <div className={styles["subtitle-container"]}>
          <h2 className={styles["subtitle"]}>태그</h2>
          <input
            className={styles["input"]}
            placeholder="태그를 입력해주세요"
            onKeyDown={handleTagInputEnterPress}
            value={tag}
            onChange={handleInputTagChange}
          />
          <div className={styles["tag-list"]}>
            {tagList.map((tag) => {
              return (
                <div key={tag} className={styles["tag"]}>
                  <span>{`#${tag}`}</span>
                  <img
                    name={tag}
                    className={styles["icon-delete-tag"]}
                    src={"./images/ic_X.png"}
                    width={24}
                    onClick={handleTagDelete}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </form>
    </>
  );
};

export default AddItemPage;
