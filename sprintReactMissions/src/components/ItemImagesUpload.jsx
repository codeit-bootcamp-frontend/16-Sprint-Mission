//  백엔드 api 주소 https://panda-market-api.vercel.app/docs/#/ 나중에 이용
// 상품등록하기 기능 컴포넌트

import { useEffect, useRef, useState } from "react";
import "../styles/itemimagesupload.css";

function ItemImagesUpload() {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef();

  const handleImagesUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (previewUrl) {
      setError("*이미지 등록은 최대 1개까지 가능합니다.");
      e.target.value = "";
      return;
    }
    // 미리보기 URL 생성
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setError("");
    //같은 파일 선택해도 change 이벤트가 발생하도록 input값 비워두기
    e.target.value = "";
  };

  const handleRemoveImage = () => {
    setPreviewUrl(null);
    setError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };
  // 컴포넌트가 언마운트될 때 미리보기 URL 해제, 메모리 누수 방지용
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  return (
    <div className="image-upload-wrapper">
      <label className="image-upload-box">
        <span>
          ＋ <br />
          이미지 등록
        </span>
        <input
          type="file"
          accept="image/*"
          onChange={handleImagesUpload}
          ref={fileInputRef}
        />
      </label>

      {previewUrl && (
        <div className="image-preview">
          <img src={previewUrl} alt="미리보기 이미지" />
          <button className="remove-btn" onClick={handleRemoveImage}>
            ×
          </button>
        </div>
      )}

      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default ItemImagesUpload;
