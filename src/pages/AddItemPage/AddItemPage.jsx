import { useRef, useState } from "react";
import "./additem.css";
import { postProducts } from "../../api";
import plus from "../../assets/plus.png";
import xbtn from "../../assets/X.png";

function AddItemPage() {
  const [newItem, setNewItem] = useState({
    images: null,
    tagInput: "",
    tags: [],
    price: "",
    description: "",
    name: "",
  });

  const [imageAlert, setImageAlert] = useState("");
  const fileInputRef = useRef(null);

  const handleInputChange = (field, value) => {
    setNewItem((prev) => ({ ...prev, [field]: value }));
  };

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" && newItem.tagInput.trim() !== "") {
      e.preventDefault();
      const newTag = newItem.tagInput.trim();
      if (!newItem.tags.includes(newTag)) {
        setNewItem((prev) => ({
          ...prev,
          tags: [...prev.tags, newTag],
          tagInput: "",
        }));
      }
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setNewItem((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleImageClick = () => {
    if (newItem.images) {
      setImageAlert(`*이미지 등록은 최대 1개까지 가능합니다.`);
      return;
    }
    fileInputRef.current.click();
  };

  const handleCreateItem = async () => {
    const itemData = {
      images: newItem.images,
      tags: newItem.tags,
      price: newItem.price,
      description: newItem.description,
      name: newItem.name,
    };

    const result = await postProducts(itemData);

    if (result) {
      setNewItem({
        images: null,
        tags: [],
        price: "",
        description: "",
        name: "",
      });
    }
  };

  const isFormValid =
    newItem.name.trim() !== "" &&
    newItem.description.trim() !== "" &&
    newItem.price !== "" &&
    newItem.tags.length > 0;

  return (
    <>
      <div className="item__container">
        <div className="item__register">
          <h1>상품 등록하기</h1>
          <button
            className={`item__register--button ${isFormValid ? "active" : ""} `}
            disabled={!isFormValid}
            onClick={handleCreateItem}
          >
            등록
          </button>
        </div>
        <div className="item__info">
          <div className="item__image">
            <h2>상품 이미지</h2>
            <div className="item__image-wrapper">
              <button
                type="button"
                onClick={handleImageClick}
                className="item__image-upload"
              >
                <img className="item__image-plus" src={plus} alt="추가" />
                <span className="upload-text">이미지 등록</span>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    if (newItem.images) {
                      setImageAlert(`*이미지 등록은 최대 1개까지 가능합니다.`);
                      return;
                    }
                    handleInputChange("images", e.target.files[0]);
                    setImageAlert(""); // 정상 등록이면 에러 제거
                  }}
                />
              </button>
              {newItem.images && (
                <div className="item__image-preview">
                  <img
                    src={URL.createObjectURL(newItem.images)}
                    alt="preview"
                  />
                  <button
                    className="item__delete"
                    onClick={() => {
                      handleInputChange("images", null);
                      setImageAlert("");
                    }}
                  >
                    <img src={xbtn} alt="삭제" />
                  </button>
                </div>
              )}
            </div>
            {imageAlert && <p className="item__alert">{imageAlert}</p>}
          </div>
          <div className="item__name">
            <h2>상품명</h2>
            <input
              type="text"
              value={newItem.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="item__input"
              placeholder="상품명을 입력해주세요"
            />
          </div>
          <div className="item__description">
            <h2>상품 소개</h2>
            <textarea
              type="text"
              value={newItem.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              className="item__textarea"
              placeholder="상품 소개를 입력해주세요"
            />
          </div>
          <div className="item__price">
            <h2>판매 가격</h2>
            <input
              type="number"
              value={newItem.price}
              onChange={(e) => handleInputChange("price", e.target.value)}
              className="item__input"
              placeholder="판매 가격을 입력해주세요"
            />
          </div>
          <div className="item__tags">
            <h2>태그</h2>
            <div className="item__tag">
              <input
                type="text"
                value={newItem.tagInput}
                onChange={(e) => handleInputChange("tagInput", e.target.value)}
                onKeyDown={handleTagKeyDown}
                className="item__input"
                placeholder="태그를 입력해주세요"
              />
              <div className="item__tag-list">
                {newItem.tags.map((tag) => (
                  <div key={tag} className="item__tag-hash">
                    <span>#{tag}</span>
                    <button
                      className="item__delete"
                      onClick={() => handleRemoveTag(tag)}
                    >
                      <img src={xbtn} alt="삭제" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddItemPage;
