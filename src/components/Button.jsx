function Button({
  children,
  className,
  btnSize = "medium",
  width = "100%",
  radius = "lg",
  ariaLabel,
  type = "button",
  isDisabled = false,
  onClick,
}) {
  const btnHeight = `btn--${btnSize}`;
  const borderRadius = `var(--border-radius-${radius})`;

  return (
    <button
      className={`btn btn--color1 ${btnHeight} ${className}`}
      style={{ "--btn-width": width, borderRadius: borderRadius }}
      aria-label={ariaLabel}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
