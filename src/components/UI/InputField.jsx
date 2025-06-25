function InputField({ label, type, isTextArea }) {
  return isTextArea ? (
    <div>
      <label>{label}</label>
      <textarea />
    </div>
  ) : (
    <div>
      <label>{label}</label>
      <input type={type} />
    </div>
  );
}

export default InputField;
