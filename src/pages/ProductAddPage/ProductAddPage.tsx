import React, { useRef, useState, ChangeEvent, KeyboardEvent } from 'react';
import style from './ProductAddPage.module.scss';

interface ImagePreview {
  file: File;
  url: string;
}

const MAX_IMAGES = 1;

export default function ProductAddPage() {
  const [images, setImages] = useState<ImagePreview[]>([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleSelectImages = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    if (images.length >= MAX_IMAGES) {
      setErrorMsg('*이미지 등록은 최대 1개까지 가능합니다.');
      e.target.value = '';
      return;
    }

    const [file] = files;
    setImages([{ file, url: URL.createObjectURL(file) }]);
    setErrorMsg('');
    e.target.value = '';
  };

  const handleRemoveImage = () => {
    images.forEach((i) => URL.revokeObjectURL(i.url));
    setImages([]);
    setErrorMsg('');
  };

  const handleTagKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;

    if (e.key !== 'Enter' && e.key !== ',') return;
    e.preventDefault();

    const value = tagInput.trim();
    if (!value || tags.includes(value)) return;

    setTags((prev) => [...prev, value]);
    setTagInput('');
  };
  const removeTag = (t: string) =>
    setTags((prev) => prev.filter((x) => x !== t));

  const handleSubmit = () => {
    console.log({ images, name, description, price: Number(price), tags });
  };

  return (
    <section className={style['product-add-page']}>
      {/* === 헤더 === */}
      <header className={style['product-add-page__header']}>
        <h3 className={style['product-add-page__title']}>상품 등록하기</h3>
        <button
          type="button"
          className={style['product-add-page__submit-btn']}
          onClick={handleSubmit}
          disabled={!name || !price || !images.length}
        >
          등록
        </button>
      </header>
      상품 이미지
      <div className={style['product-add-page__images']}>
        <label className={style['product-add-page__uploader']}>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleSelectImages}
            hidden
          />
          <span className={style['product-add-page__uploader-plus']}>＋</span>
          <span className={style['product-add-page__uploader-text']}>
            이미지 등록
          </span>
        </label>

        {images.map(({ url }) => (
          <div key={url} className={style['product-add-page__thumb']}>
            <img src={url} alt="preview" />
            <button
              type="button"
              className={style['product-add-page__thumb-delete']}
              onClick={handleRemoveImage}
            >
              ×
            </button>
          </div>
        ))}
      </div>
      {errorMsg && (
        <p className={style['product-add-page__images-error']}>{errorMsg}</p>
      )}
      상품명
      <input
        className={style['product-add-page__input']}
        placeholder="상품명을 입력해주세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      상품 소개
      <textarea
        className={style['product-add-page__textarea']}
        placeholder="상품 소개를 입력해주세요"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={6}
      />
      판매 가격
      <input
        type="number"
        min={0}
        className={style['product-add-page__input']}
        placeholder="판매 가격을 입력해주세요"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      태그
      <input
        className={style['product-add-page__input']}
        placeholder="태그를 입력해주세요"
        value={tagInput}
        onChange={(e) => setTagInput(e.target.value)}
        onKeyDown={handleTagKeyDown}
      />
      <ul className={style['product-add-page__tags']}>
        {tags.map((t) => (
          <li key={t} className={style['product-add-page__tag']}>
            #{t}
            <button
              type="button"
              className={style['product-add-page__tag-delete']}
              onClick={() => removeTag(t)}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
