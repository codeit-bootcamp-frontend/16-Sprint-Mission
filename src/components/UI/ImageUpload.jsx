import PlusIcon from '../../assets/images/icons/ic_plus.svg';

function ImageUpload() {
  return (
    <div>
      <label>상품 이미지</label>
      <input type="file" />
      <img
        src={PlusIcon}
        alt="plus"
      />
    </div>
  );
}

export default ImageUpload;
