import { useEffect, useRef, useState } from "react";
import deleteIcon from "@assets/icon/ic_X.png";
import addItemImg from "@assets/images/addItemImg.png";
import styled from "styled-components";

function AddImageField(props) {
  const { className } = props;
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

  // function onDelete(e) {
  //   setPreview(null);
  // }

  // 삭제 이미지 사이즈 조절하기

  return (
    <ImageFieldStyle className={className}>
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
        <div>
          {" "}
          <img src={preview} alt="등록할 상품 미리보기" />{" "}
          <img id="delete-button" src={deleteIcon} alt="미리보기 삭제버튼" />
        </div>
      )}
      <p ref={messageRef}>*이미지 등록은 최대 1개까지 가능합니다.</p>
    </ImageFieldStyle>
  );
}

export default AddImageField;

const ImageFieldStyle = styled.div`
  div {
    display: flex;
    gap: 10px;
  }

  label {
    margin-bottom: var(--add-item-gap);
    width: var(--file-input-size);
    cursor: pointer;
  }

  input {
    display: none;
  }

  img {
    width: var(--file-input-size);
    height: var(--file-input-size);
    margin-top: 16px;
    border-radius: 12px;
  }

  p {
    font-size: 16px;
    color: red;
    font-weight: 400;
    margin-top: 16px;
    display: none;
  }

  /* GlobalStyles, theme.js만들기  */
`;
