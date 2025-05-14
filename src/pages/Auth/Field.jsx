const Field = ({
  id,
  labelText,
  placeholder,
  ariaLabel,
  type = 'text',
  autoComplete = 'on',
  value,
  valid,
  hint,
  isVisible,
  handleInputChange,
  handleInputBlur,
  handlePasswordIconClick,
}) => {
  const inputContainerClassName = () => {
    if (valid === null) return '';
    if (valid === false) return 'invalid';
    else return 'valid';
  };

  const passwordIconClassName = () => {
    return isVisible ? '' : 'hidden';
  };

  const inputType = () => {
    return isVisible ? 'text' : type;
  };

  return (
    <label className="form-label">
      {labelText}
      <div className={`form-input-container ${inputContainerClassName()}`}>
        <input
          id={id}
          className="form-input"
          placeholder={placeholder}
          aria-label={ariaLabel}
          type={inputType()}
          autoComplete={autoComplete}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          value={value}
          name={id}
        ></input>
        {id.includes('password') && (
          <img
            className={`form-password-icon ${passwordIconClassName()}`}
            src={'./images/icon_password_visible.png'}
            width={20.47}
            onClick={() => handlePasswordIconClick(id)}
          />
        )}
      </div>
      <span className={`form-input-hint`}>{hint}</span>
    </label>
  );
};

export default Field;
