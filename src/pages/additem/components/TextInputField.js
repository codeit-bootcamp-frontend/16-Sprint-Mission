import { forwardRef } from "react";
const TextInputField = forwardRef(
  (
    {
      label,
      name,
      defaultValue,
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
      labelClass,
    },
    ref
  ) => (
    <div className={wrapperClass}>
      <h5 className={labelClass}>{label}</h5>
      {as === "textarea" ? (
        <textarea
          type={type}
          name={name}
          ref={ref}
          defaultValue={defaultValue}
          onChange={onChange}
          onBlur={onBlur}
          className={textAreaClass}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          name={name}
          ref={ref}
          defaultValue={defaultValue}
          onChange={onChange}
          onBlur={onBlur}
          className={inputClass}
          placeholder={placeholder}
        />
      )}
      <p className={errorClass}>
  {error || "\u00A0" /* 에러 없을 땐 공백 문자로 대체 */}</p>
    </div>
  )
);

export default TextInputField;
