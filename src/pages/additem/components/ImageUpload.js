import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./ImageUpload.module.css"

export default function ImageUpload({ onImageChange }) {
  const uploadImgRef = useRef();
  const [previewUrl, setPreviewUrl] = useState(""); // 프리뷰 이미지 URL

  // 이미지 등록 버튼을 누르면 숨겨져 있는 실제 file타입 input태그 클릭함
  const handleUpload = () => {
    if (uploadImgRef.current) {
      uploadImgRef.current.value = ""; // ← 같은 파일도 다시 선택 가능하게
      uploadImgRef.current.click();
    }
  };
  // URL.createObjectURL(file)로 임시 URL 생성해서 프리뷰 띄우는 함수
  const handleFileChange = () => {
    const file = uploadImgRef.current?.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      onImageChange(file, url); // 부모에게 전달
    }
  };
  // 프리뷰 이미지 닫기 함수
  const handleRemovePreviewButton = ()=>{
        setPreviewUrl(null);
    if (uploadImgRef.current) {
      uploadImgRef.current.value = "";
    }
    onImageChange(null, null); // 삭제 알림
  }

  return (
    <div className={styles.inputWrapper}>
      <h3>상품 이미지</h3>
      {/* 안 보이게 숨겨져 있음 */}
      <input
        type="file"
        accept="image/*"
        ref={uploadImgRef}
        name="imageUpload"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      {/* 실제로 보이는 부분 */}
      <div className={styles.imageWrapper}>
        <div className={styles.imageUploadBox} onClick={handleUpload}>
          <FontAwesomeIcon icon={faPlus} className={styles.plus} />
          <div>이미지 등록</div>
        </div>
        {/* preview 이미지 */}
        {previewUrl && (
          <div className={styles.imagePreviewWrapper}>
            <img
              src={previewUrl}
              alt="미리보기"
              className={styles.imagePreview}
            />
            <div
              type="button"
              onClick={handleRemovePreviewButton}
              className={styles.removeImageButton}
            >
              <FontAwesomeIcon icon={faTimesCircle} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
