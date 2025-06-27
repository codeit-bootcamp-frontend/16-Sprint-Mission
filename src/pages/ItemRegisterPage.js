import "./css/ItemRegisterPage.css";
import { useState } from "react";
import Button from "../components/Button";
import Label from "../components/Label";
import Textfield from "../components/Textfield";
import TextArea from "../components/TextArea";
import ImageUploader from "../components/ImageUploader";
import TagInput from "../components/TagInput";
import { validateInput } from "../utils/formValidation";

const ItemRegisterPage = () => {
  /* 유효성 체크 관련 훅  */

  const [formData, setFormData] = useState({
    image: "",
    title: "",
    content: "",
    price: "",
    tagList: [],
  });

  const [validInfo, setValidInfo] = useState({
    image: { isValid: null, message: "" },
    title: { isValid: null, message: "" },
    content: { isValid: null, message: "" },
    price: { isValid: null, message: "" },
    tagList: { isValid: null, message: "" },
  });

  /* 유효성 체크 */
  const updateValidate = (name, val) => {
    const validateResult = validateInput(name, val);
    setValidInfo((prev) => ({ ...prev, [name]: validateResult }));
  };

  /* 이미지 컴포넌트 관련 */
  const onClickAddImage = () => {
    updateValidate("image", formData.image);
  };

  const onChangeImage = (value) => {
    setFormData((prev) => ({
      ...prev,
      image: value,
    }));
  };

  const onDeleteImage = () => {
    setFormData((prev) => ({
      ...prev,
      image: "",
    }));
    updateValidate("image", "");
  };

  /* 텍스트필드 데이터 세팅과 유효성 체크 */
  const onChangeTextfield = (name, value) => {
    let trimVal = value.trim();
    setFormData((prev) => ({ ...prev, [name]: value }));
    updateValidate(name, trimVal);
  };

  /* 가격 입력 시 숫자만 입력 가능하게 */
  /* type=number로 했을 때 한글 입력 시 오류 발생하여 type=text로 처리 */
  const onPriceChange = (name, value) => {
    let changedVal = value.replace(/[^0-9]/g, "");

    if (changedVal !== "") {
      changedVal = changedVal.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    onChangeTextfield(name, changedVal);
  };

  /* 태그 컴포넌트 관련  */
  const onAddTag = (tagVal) => {
    const newTagList = [...formData.tagList, tagVal];
    setFormData((prev) => ({
      ...prev,
      tagList: newTagList,
    }));
    updateValidate("tagList", newTagList);
  };

  const onDeleteTag = (index) => {
    const changedTagList = formData.tagList.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      tagList: changedTagList,
    }));
    updateValidate("tagList", changedTagList);
  };

  /* 등록 버튼 활성화 여부  */
  const disableRegisterButton = () => {
    const isAllValid = Object.keys(validInfo)
      .filter((key) => key !== "image")
      .every((key) => validInfo[key].isValid === true);
    return !Boolean(isAllValid);
  };

  return (
    <>
      <div className="register__container">
        <div className="register__container__inner">
          <div className="register__header">
            <span className="register__header__title">상품 등록하기</span>
            <Button disabled={disableRegisterButton()} type="register">
              등록
            </Button>
          </div>

          <div className="register__form__container">
            <div className="register__form__group">
              <Label>상품이미지</Label>
              <ImageUploader
                message={validInfo.image.message}
                isValid={validInfo.image.isValid}
                onAdd={onClickAddImage}
                onChange={onChangeImage}
                onDelete={onDeleteImage}
              />
            </div>
            <div className="register__form__group">
              <Label>상품명</Label>
              <Textfield
                name="title"
                value={formData.title}
                message={validInfo.title.message}
                isValid={validInfo.title.isValid}
                placeholder="상품명을 입력해주세요"
                onChange={onChangeTextfield}
              />
            </div>

            <div className="register__form__group">
              <Label>상품 소개</Label>
              <TextArea
                name="content"
                value={formData.content}
                message={validInfo.content.message}
                isValid={validInfo.content.isValid}
                placeholder="상품 소개를 입력해주세요"
                onChange={onChangeTextfield}
              />
            </div>

            <div className="register__form__group">
              <Label>판매가격</Label>
              <Textfield
                type="text"
                name="price"
                value={formData.price}
                min="1"
                message={validInfo.price.message}
                isValid={validInfo.price.isValid}
                placeholder="판매 가격을 입력해주세요"
                onChange={onPriceChange}
              />
            </div>

            <div className="register__form__group">
              <Label>태그</Label>
              <TagInput
                name="tagList"
                tagList={formData.tagList}
                message={validInfo.tagList.message}
                isValid={validInfo.tagList.isValid}
                onAdd={onAddTag}
                onDelete={onDeleteTag}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemRegisterPage;
