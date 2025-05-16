import { useState } from 'react';

const PASSWORD_ICON_CONFIG = {
  false: {
    src: './images/icon_password_invisible.png',
    className: 'form-password-icon hidden',
  },
  true: {
    src: './images/icon_password_visible.png',
    className: 'form-password-icon',
  },
};

const INPUT_CONTAINER_CLASSNAME = {
  null: 'form-input-container',
  false: 'form-input-container invalid',
  true: 'form-input-container valid',
};

const Field = ({ fieldConfig, handlers, getFieldState }) => {
  //prettier-ignore
  const fieldState = getFieldState(fieldConfig.id);
  const [isVisible, setIsVisible] = useState(false);
  const handlePasswordIconClick = () => setIsVisible((prev) => !prev);

  return (
    <label className="form-label">
      {fieldConfig.labelText}
      <div className={INPUT_CONTAINER_CLASSNAME[fieldState.valid]}>
        <input
          className="form-input"
          id={fieldConfig.id}
          name={fieldConfig.id}
          value={fieldState.value}
          placeholder={fieldConfig.placeholder}
          aria-label={fieldConfig.ariaLabel}
          type={isVisible ? 'text' : fieldConfig.type}
          autoComplete={fieldConfig.autoComplete}
          onChange={handlers.handleInputChange}
          onBlur={handlers.handleInputBlur}
        ></input>
        {fieldConfig.id.includes('password') && (
          <img
            className={PASSWORD_ICON_CONFIG[isVisible].className}
            width={20.47}
            src={PASSWORD_ICON_CONFIG[isVisible].src}
            onClick={handlePasswordIconClick}
          />
        )}
      </div>
      {fieldConfig.hint !== '' && (
        <span className={`form-input-hint`}>{fieldState.hint}</span>
      )}
    </label>
  );
};

export default Field;
