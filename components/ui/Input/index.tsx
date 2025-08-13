import clsx from "clsx";

const Input = ({ ...props }) => {
  const {
    id,
    type = "text",
    name,
    value,
    placeholder,
    onChange,
    onBlur,
    isError = false,
  } = props;
  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      className={clsx("input", {
        "input-error": isError,
      })}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default Input;
