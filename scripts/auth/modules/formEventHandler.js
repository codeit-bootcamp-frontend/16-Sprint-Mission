export const formEventHandler = ({
  form,
  buttonElement,
  fieldMap,
  onButtonRedirectUrl,
}) => {
  const inputState = new Map(Object.keys(fieldMap).map((key) => [key, null]));

  const onInputFocusOut = (stateKey) => {
    const validResult = getValidResult(stateKey);
    setState(stateKey, validResult);
    updateUIByState(stateKey, validResult);
    updateButtonState();
    updatePasswordVerify(stateKey);
  };

  const getValidResult = (stateKey) => {
    const inputText = form.querySelector(`#${stateKey} .form-input`).value;
    const validtorFunction = fieldMap[stateKey];
    return validtorFunction(inputText);
  };

  const setState = (stateKey, validResult) => {
    inputState.set(stateKey, validResult.isValid);
  };

  const updateUIByState = (stateKey, validResult) => {
    //prettier-ignore
    const inputContainerElement = form.querySelector(`#${stateKey} .form-input-container`);
    //prettier-ignore
    const spanStateElement = form.querySelector(`#${stateKey} .form-status-info`);
    spanStateElement.textContent = validResult.message;
    if (validResult.isValid) {
      inputContainerElement.classList.add('valid');
      inputContainerElement.classList.remove('inValid');
      spanStateElement.classList.add('hidden');
    } else {
      inputContainerElement.classList.add('inValid');
      inputContainerElement.classList.remove('valid');
      spanStateElement.classList.remove('hidden');
    }
  };

  const updateButtonState = () => {
    //prettier-ignore
    buttonElement.disabled = ![...inputState.values()].every((isValid) => isValid);
  };

  const updatePasswordVerify = (stateKey) => {
    if (
      stateKey === 'password' &&
      inputState.get('passwordVerify') !== undefined &&
      inputState.get('passwordVerify') !== null
    )
      onInputFocusOut('passwordVerify');
  };

  const onButtonClick = (e) => {
    e.preventDefault();
    location.href = onButtonRedirectUrl;
  };

  const onPasswordIconToggle = (stateKey, e) => {
    const inputElement = form.querySelector(`#${stateKey} .form-input`);
    e.target.classList.toggle('hidden');
    if (e.target.classList.contains('hidden')) {
      inputElement.type = 'password';
    } else {
      inputElement.type = 'text';
    }
  };

  //이벤트 할당
  for (const stateKey in fieldMap) {
    const inputElement = form.querySelector(`#${stateKey} .form-input`);
    inputElement.addEventListener('focusout', () => onInputFocusOut(stateKey));

    const passwordIconElement = form.querySelector(
      `#${stateKey} .form-icon-password`
    );
    if (passwordIconElement) {
      passwordIconElement.addEventListener('click', (e) =>
        onPasswordIconToggle(stateKey, e)
      );
    }
  }
  buttonElement.addEventListener('click', onButtonClick);
};
