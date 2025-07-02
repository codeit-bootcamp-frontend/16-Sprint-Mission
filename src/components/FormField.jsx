function FormField({ children, className = "", id, name = "", placeholder, value, onChange, isTextarea = false }) {
  const labelClass = className ? `${className}__label` : "";
  const inputClass = className ? `${className}__input` : "";
  const textareaClass = className ? `${className}__textarea` : "";

  const handleFormattedChange = (e) => {
    const raw = e.target.value.replace(/,/g, "").replace(/\D/g, "");
    const formatted = raw ? Number(raw).toLocaleString() : "";
    onChange?.({ target: { name, value: formatted } });
  };

  const commonProps = {
    id,
    name,
    placeholder,
    className: isTextarea ? textareaClass : inputClass,
    autoComplete: "off",
    value,
    onChange: name === "price" ? handleFormattedChange : onChange,
  };

  return (
    <div className={`input__wrapper ${className}`}>
      <label className={labelClass} htmlFor={id}>
        {children}
      </label>

      {!isTextarea ? (
        <input type="text" {...commonProps} />
      ) : (
        <textarea {...(onChange ? { ...commonProps } : { ...commonProps, defaultValue: value, value: undefined })}></textarea>
      )}
    </div>
  );
}

export default FormField;
