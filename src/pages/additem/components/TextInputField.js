const TextInputField = ({
  label,
  name,
  onChange,
  onBlur,
  placeholder,
  error,
  type = "text",
  as = "input", // 'textarea'로도 가능
  wrapperClass,
  inputClass,
textAreaClass,
  errorClass,
}) => {
  return (
    <div className={wrapperClass}>
      <h3>{label}</h3>
      {as === "textarea" ? (
        <textarea
          type={type}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          className={textAreaClass}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          className={inputClass}
          placeholder={placeholder}
        />
      )}
      {error && <p className={errorClass}>{error}</p>}
    </div>
  );
};

export default TextInputField;
