import { useRef, useState } from "react";

function ImageUploadField({ children }) {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
    }
  };

  const handleDelete = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
  };

  const fileInputProps = {
    type: "file",
    accept: "image/*",
    ref: inputRef,
    onChange: handleChange,
    onClick: handleClick,
  };

  return children(fileInputProps, previewUrl, handleDelete);
}
export default ImageUploadField;
