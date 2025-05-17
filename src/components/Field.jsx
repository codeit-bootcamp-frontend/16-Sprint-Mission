import { useState } from 'react';
import styles from './Field.module.css';

const PASSWORD_ICON_CONFIG = {
  false: {
    src: './images/icon_password_invisible.png',
    className: 'password-icon hidden',
  },
  true: {
    src: './images/icon_password_visible.png',
    className: 'password-icon',
  },
};

const INPUT_CONTAINER_CLASSNAME = {
  null: '',
  false: 'invalid',
  true: 'valid',
};

const Field = ({ fieldConfig, handlers, getFieldState }) => {
  //prettier-ignore
  const fieldState = getFieldState(fieldConfig.id);
  const [isVisible, setIsVisible] = useState(false);
  const handlePasswordIconClick = () => setIsVisible((prev) => !prev);

  const inputContainerClass = INPUT_CONTAINER_CLASSNAME[fieldState.valid];

  return (
    <label className={styles['label']}>
      {fieldConfig.labelText}
      <div
        className={`${styles['input-container']} ${styles[inputContainerClass]}`}
      >
        <input
          className={styles['input']}
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
            className={styles[PASSWORD_ICON_CONFIG[isVisible].className]}
            width={20.47}
            src={PASSWORD_ICON_CONFIG[isVisible].src}
            onClick={handlePasswordIconClick}
          />
        )}
      </div>
      {fieldConfig.hint !== '' && (
        <span className={styles['input-hint']}>{fieldState.hint}</span>
      )}
    </label>
  );
};

export default Field;
