function AddItemFormInput(props) {
  const { type, id, name, placeholder, className } = props;

  return (
    <div className={className}>
      <label htmlFor={id}>상품 이미지</label>
      <input type={type} id={id} name={name} placeholder={placeholder} />
    </div>
  );
}

export default AddItemFormInput;
