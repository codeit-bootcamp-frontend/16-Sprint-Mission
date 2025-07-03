//  백엔드 api 주소 https://panda-market-api.vercel.app/docs/#/ 나중에 이용
// 상품등록하기 기능 컴포넌트

import { useEffect, useState } from "react";

function ItemImagesUpload() {
  const [previewUrl, setPreviewUrl] = useState(null);
  const handleImagesUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // 미리보기 URL 생성
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    //같은 파일 선택해도 change 이벤트가 발생하도록 input값 비워두기
    e.target.value = "";
  };
  // 컴포넌트가 언마운트될 때 미리보기 URL 해제, 메모리 누수 방지용
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

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
