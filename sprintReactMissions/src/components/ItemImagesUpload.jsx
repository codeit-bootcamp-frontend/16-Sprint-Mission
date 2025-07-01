//  백엔드 api 주소 https://panda-market-api.vercel.app/docs/#/ 나중에 이용
// 상품등록하기 기능 컴포넌트

import { useState } from "react";

function ItemImagesUpload() {
  const [previewUrl, setPreviewUrl] = useState(null);
  const handleImagesUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);

    e.target.value = "";
  };

  return (
    <>
      <label className="image-upload-box">
        <span>
          ＋ <br />
          이미지 등록
        </span>
        <input type="file" accept="image/*" onChange={handleImagesUpload} />
      </label>
      {previewUrl && <img src={previewUrl} alt="미리보기 이미지" />}
    </>
  );
}

export default ItemImagesUpload;
