import "./css/ItemRegisterPage.css";
import { useReducer } from "react";
import Button from "../components/Button";
import Label from "../components/Label";
import Textfield from "../components/Textfield";
import TextArea from "../components/TextArea";
import ImageUploader from "../components/ImageUploader";
import TagInput from "../components/TagInput";
import { validateInput } from "../utils/formValidation";

const ItemRegisterPage = () => {
  // 폼 리듀서 관련
  const initialReducerState = {
    image: { value: "", validInfo: { isValid: null, message: "" } },
    title: { value: "", validInfo: { isValid: null, message: "" } },
    content: { value: "", validInfo: { isValid: null, message: "" } },
    price: { value: "", validInfo: { isValid: null, message: "" } },
    tagList: { value: [], validInfo: { isValid: null, message: "" } },
  };

  const formReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_FIELD":
        return {
          ...state,
          [action.field]: {
            ...state[action.field],
            value: action.value,
          },
        };
      case "UPDATE_VALIDATE":
        return {
          ...state,
          [action.field]: {
            ...state[action.field],
            validInfo: {
              isValid: action.value.isValid,
              message: action.value.message,
            },
          },
        };
      default:
        return state;
    }
  };

  const [formState, dispatchForm] = useReducer(
    formReducer,
    initialReducerState
  );

  /* 유효성 체크 */
  const updateValidate = (name, val) => {
    const validateResult = validateInput(name, val);
    dispatchForm({
      type: "UPDATE_VALIDATE",
      field: name,
      value: validateResult,
    });
  };

  /* 이미지 컴포넌트 관련 */
  const onClickAddImage = () => {
    updateValidate("image", formState.image.value);
  };

  const onChangeImage = (value) => {
    dispatchForm({
      type: "CHANGE_FIELD",
      field: "image",
      value,
    });
  };

  const onDeleteImage = () => {
    dispatchForm({
      type: "CHANGE_FIELD",
      field: "image",
      value: "",
    });
    updateValidate("image", "");
  };

  /* 텍스트필드 데이터 세팅과 유효성 체크 */
  const onChangeTextfield = (name, value) => {
    let trimVal = value.trim();
    dispatchForm({
      type: "CHANGE_FIELD",
      field: name,
      value,
    });
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
    const newTagList = [...formState.tagList.value, tagVal];
    dispatchForm({
      type: "CHANGE_FIELD",
      field: "tagList",
      value: newTagList,
    });
    updateValidate("tagList", newTagList);
  };

  const onDeleteTag = (index) => {
    const changedTagList = formState.tagList.value.filter(
      (_, i) => i !== index
    );
    dispatchForm({
      type: "CHANGE_FIELD",
      field: "tagList",
      value: changedTagList,
    });
    updateValidate("tagList", changedTagList);
  };

  /* 등록 버튼 활성화 여부  */
  const disableRegisterButton = () => {
    const isAllValid =
      formState.title.validInfo.isValid &&
      formState.content.validInfo.isValid &&
      formState.price.validInfo.isValid &&
      formState.tagList.validInfo.isValid;
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
                message={formState.image.validInfo.message}
                isValid={formState.image.validInfo.isValid}
                onAdd={onClickAddImage}
                onChange={onChangeImage}
                onDelete={onDeleteImage}
              />
            </div>
            <div className="register__form__group">
              <Label>상품명</Label>
              <Textfield
                name="title"
                value={formState.title.value}
                message={formState.title.validInfo.message}
                isValid={formState.title.validInfo.isValid}
                placeholder="상품명을 입력해주세요"
                onValueChange={onChangeTextfield}
              />
            </div>

            <div className="register__form__group">
              <Label>상품 소개</Label>
              <TextArea
                name="content"
                value={formState.content.value}
                message={formState.content.validInfo.message}
                isValid={formState.content.validInfo.isValid}
                placeholder="상품 소개를 입력해주세요"
                onChange={onChangeTextfield}
              />
            </div>

            <div className="register__form__group">
              <Label>판매가격</Label>
              <Textfield
                type="text"
                name="price"
                value={formState.price.value}
                min="1"
                message={formState.price.validInfo.message}
                isValid={formState.price.validInfo.isValid}
                placeholder="판매 가격을 입력해주세요"
                onValueChange={onPriceChange}
              />
            </div>

            <div className="register__form__group">
              <Label>태그</Label>
              <TagInput
                name="tagList"
                tagList={formState.tagList.value}
                message={formState.tagList.validInfo.message}
                isValid={formState.tagList.validInfo.isValid}
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
