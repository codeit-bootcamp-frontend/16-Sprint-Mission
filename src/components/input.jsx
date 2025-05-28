import "./input.css";

function Input({
  renderSlot,
  slotDirection = "right",
  onChange,
  onBlur,
  type,
  name,
  placeholder,
}) {
  return (
    <div className="input-container">
      {slotDirection === "left" && renderSlot && (
        <div className="slot-left-image">{renderSlot}</div>
      )}
      <input
        className={slotDirection === "left" ? "input-slanted" : "input"}
        onChange={onChange}
        type={type}
        name={name}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {slotDirection === "right" && renderSlot && (
        <button className="input-button">{renderSlot}</button>
      )}
    </div>
  );
}

export default Input;
