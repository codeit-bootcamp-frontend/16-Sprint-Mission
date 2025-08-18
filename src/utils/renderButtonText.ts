type LoadingText<T extends string> = `${T}중...`;

type ButtonState<T extends string> = {
  isSubmitting: boolean;
  defaultText: T;
  loadingText: LoadingText<T>;
};

const renderButtonText = <T extends string>(state: ButtonState<T>) => {
  const { isSubmitting, defaultText, loadingText } = state;

  return isSubmitting ? loadingText : defaultText;
};

export const renderButtonTextByState = <T extends string>(
  isSubmitting: boolean,
  defaultText: T
) => {
  const loadingText: LoadingText<T> = `${defaultText}중...` as LoadingText<T>; // 템플릿 리터럴 타입 적용 보장

  return renderButtonText({
    isSubmitting,
    defaultText,
    loadingText,
  });
};
