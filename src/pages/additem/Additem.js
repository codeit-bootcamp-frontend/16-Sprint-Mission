import styles from "./Additem.module.css";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

function Additem() {
  const formRef = useRef(null);
  const uploadImgRef = useRef();
  const [previewUrl, setPreviewUrl] = useState("");  // 프리뷰 이미지 URL

  const validateProductName = (value) => {
    if (!value.trim()) return "상품명을 입력해 주세요";
    return "";
  };
  const validateProductDescription = (value) => {
    if (!value.trim()) return "상품 소개를 입력해주세요.";
    return "";
  };
  const validatePrice = (value) => {
    if (!value.trim()) return "가격을 입력해주세요.";
    if (isNaN(value)) return "숫자만 입력해주세요.";
    return "";
  };
  const validateField = (name, value) => {
    const validators = {
      productName: validateProductName,
      productDescription: validateProductDescription,
      price: validatePrice,
    };

    return validators[name] ? validators[name](value) : "";
  };

  // 이미지 등록 버튼을 누르면 숨겨져 있는 실제 file타입 input태그 클릭함
  const handleUpload = () => {
    if (uploadImgRef.current) {
      uploadImgRef.current.value = ""; // ← 같은 파일도 다시 선택 가능하게
      uploadImgRef.current.click();
    }
  };
  // URL.createObjectURL(file)로 임시 URL 생성해서 프리뷰 띄우는 함수
  const handleFileChange = () => {
    console.log(`파일 현ㅈ`,uploadImgRef.current.files);
    const file = uploadImgRef.current?.files?.[0];
    console.log(file);
    if(file){
      const url = URL.createObjectURL(file)
      setPreviewUrl(url);
    }
  }
  // 파일 내용 확인용(나중에 지워야함)
  const handleChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      console.log("선택된 파일:", files);
    }
  };

  return (
    <form ref={formRef} className={styles.form}>
      <header className={styles.header}>
        <h1 className={styles.title}>상품 등록하기</h1>
        <button type="submit" className={styles.submitButton}>
          등록
        </button>
      </header>
      <div className={styles.inputContainer}>
        {/* 상품 이미지 등록 관련 컴포넌트 S */}
        <div className={styles.inputWrapper}>
          <h3>상품 이미지</h3>
          {/* 안 보이게 숨겨져 있음 */}
          <input
            type="file"
            accept="image/*"
            ref={uploadImgRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          {/* 실제로 보이는 부분 */}
          <div className={styles.imageWrapper}>
            <div className={styles.imageUploadBox} onClick={handleUpload}>
              <FontAwesomeIcon icon={faPlus} className={styles.plus} />
              <div>이미지 등록</div>
            </div>
          </div>
        </div>
        {/* 상품 이미지 등록 관련 컴포넌트 E */}
        {previewUrl && <img src={previewUrl} alt="미리보기" width={200} />}

        <div className={styles.inputWrapper}>
          <h3>상품명</h3>
          <input
            name="productName"
            className={styles.input}
            placeholder="상품명을 입력해주세요"
          />
        </div>
        <div className={styles.inputWrapper}>
          <h3>상품 소개</h3>
          <textarea
            name="productDescription"
            className={styles.textArea}
            placeholder="상품 소개를 입력해주세요"
          />
          {/* {errors.productDescription && (
              <p className={styles.errorText}>{errors.productDescription}</p>
            )} */}
        </div>
        <div className={styles.inputWrapper}>
          <h3>판매 가격</h3>
          <input
            name="price"
            className={styles.input}
            placeholder="판매 가격을 입력해주세요"
          />
        </div>
        <div className={styles.inputWrapper}>
          <h3>태그</h3>
          <input
            type="text"
            placeholder="태그를 입력하고 Enter키를 눌러주세요"
            className={styles.input}
          />

          <div className={styles.tagsContainer}></div>
        </div>
      </div>
    </form>
  );
}
export default Additem;
