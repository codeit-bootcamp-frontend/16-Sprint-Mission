const Input = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
  disabled = false,
  name,
  onKeyDown,
}) => {
  const commonProps = {
    value,
    onChange,
    placeholder,
    disabled,
    name,
    onKeyDown,
    className: `
      border 
      border-gray-200 
      rounded-xl 
      bg-gray-100 
      px-6 
      py-4 
      text-base 
      font-normal 
      text-gray-400 
      w-full
      disabled:opacity-50
      disabled:cursor-not-allowed
    `,
  };

  if (type === "textarea") {
    return (
      <textarea
        {...commonProps}
        className={`${commonProps.className} h-[282px] resize-none`}
      />
    );
  }

  return <input type={type} {...commonProps} />;
};

export default Input;
