import { useFormFields } from '../../hooks/useFormFields';

const Form = ({ onSubmit, children, fieldKeys }) => {
  const {
    values,
    valids,
    hints,
    isSubmitEnabled,
    handleInputChange,
    handleInputBlur,
  } = useFormFields({ fieldKeys });

  const getFieldState = (name) => ({
    value: values[name],
    valid: valids[name],
    hint: hints[name],
  });

  const handlers = {
    handleInputChange,
    handleInputBlur,
  };

  const onSubmitSuccess = (e) => {
    e.preventDefault();
    if (!isSubmitEnabled) return;
    onSubmit();
  };

  return (
    <form className="form-container" onSubmit={onSubmitSuccess}>
      {children({ isSubmitEnabled, handlers, getFieldState })}
    </form>
  );
};

export default Form;
