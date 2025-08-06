import { useState, useRef } from "react";
import useSignIn from "./useSignIn";
import useForm from "./useForm";
import { ReqData } from "@/types/form";

interface UseAuthFormProps {
  onSubmit: (data: ReqData) => Promise<void>;
}

const useAuthForm = ({ onSubmit }: UseAuthFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<Error | null>(null);

  const signIn = useSignIn();

  const formRef = useRef(null);

  const { handleBlur, validateForm, isFormValid, fieldErrors } =
    useForm(formRef);

  const handleSubmit = async () => {
    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const userData: ReqData = {};

    for (const [key, value] of formData.entries()) {
      userData[key] = value;
    }

    try {
      setIsSubmitting(true);
      setSubmitError(null);
      await onSubmit(userData);
      signIn(); // 로그인 컨텍스트 처리 -> 상품 목록 페이지로 이동
    } catch (err) {
      if (err instanceof Error) {
        setSubmitError(err);
      } else {
        setSubmitError(new Error("알 수 없는 오류가 발생했습니다."));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    // 대상 폼
    formRef,

    // 로딩, 에러 상태
    isSubmitting,
    submitError,

    // 유효성 검사
    handleBlur,
    validateForm,
    isFormValid,
    fieldErrors,

    // 폼
    handleSubmit,
  };
};

export default useAuthForm;
