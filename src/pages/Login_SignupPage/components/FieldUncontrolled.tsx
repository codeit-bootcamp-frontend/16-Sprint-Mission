import visibilityOn from "@/assets/icons/ic_visibility_on.svg";
import visibilityOff from "@/assets/icons/ic_visibility_off.svg";
import isEmpty from "@/utils/isEmpty";
import { type ILoginData } from "../LoginPage";
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

type SingleParamValidator = (value: string) => {
  isValid: boolean;
  errorMsg: string | null;
};
type TwoParamValidator = (
  value: string,
  comparisonValue: string | undefined
) => { isValid: boolean; errorMsg: string | null };

interface Props {
  id: string;
  label: string;
  type: "email" | "text" | "password";
  placeholder: string;
  validator?: SingleParamValidator | TwoParamValidator;
  formData: ILoginData;
  validationTrigger: boolean;
  onCheckValidating: React.Dispatch<React.SetStateAction<boolean>>;
  errorSetter: React.Dispatch<React.SetStateAction<boolean>>;
  //비밀번호 확인을 위한 비밀번호 값
  comparisonValue?: string;
}

const FieldUncontrolled = ({
  id,
  label,
  type,
  placeholder,
  validator,
  formData,
  validationTrigger,
  onCheckValidating,
  errorSetter,
  comparisonValue,
}: Props) => {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isVisibilityOn, setIsVisibilityOn] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const isMount = useRef(true);
  const isPassword = type === "password";

  const handleChangeValue = () => {
    if (id in formData && inputRef.current) {
      formData[id as keyof ILoginData] = inputRef.current?.value;
    }
  };

  useEffect(() => {
    if (isMount.current) {
      isMount.current = false;
      return;
    }

    //의존성 배열에 다른 것을 포함시키면서 trigger가 true일 때에만 실행하도록
    if (!validationTrigger) {
      return;
    }

    const value = inputRef.current!.value;

    if (isEmpty(value)) {
      errorSetter(true);
      setErrorMsg(placeholder);
      onCheckValidating(false);
      return;
    }

    if (validator && id === "passwordCheck") {
      const { isValid, errorMsg } = validator(value, comparisonValue);

      if (!isValid) {
        errorSetter(true);
        setErrorMsg(errorMsg);
        onCheckValidating(false);
        return;
      }
    } else if (validator) {
      const { isValid, errorMsg } = (validator as SingleParamValidator)(value);

      if (!isValid) {
        errorSetter(true);
        setErrorMsg(errorMsg);
        onCheckValidating(false);
        return;
      }
    }

    setErrorMsg(null);
    onCheckValidating(false);
  }, [validationTrigger, isEmpty, validator]);

  return (
    <div>
      <label
        className="text-text-grey800 font-bold text-[14px]
      md:text-[18px]"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative">
        <input
          className={clsx(
            "bg-text-grey100 w-full h-14 px-lg py-md mt-sm mb-md rounded-[12px] placeholder-shown:text-text-grey400",
            "md:w-160 md:mt-md md:mb-lg",
            { "border-[1.5px] border-error-red": errorMsg }
          )}
          id={id}
          ref={inputRef}
          type={isPassword && isVisibilityOn ? "text" : type}
          placeholder={placeholder}
          onChange={handleChangeValue}
          onFocus={() => {
            setErrorMsg(null);
          }}
        />
        {isPassword ? (
          <button
            className="absolute top-6 right-6 cursor-pointer
            md:top-8"
            type="button"
            onClick={() => {
              setIsVisibilityOn((prev) => !prev);
            }}
          >
            <img
              className={clsx({ hidden: isVisibilityOn })}
              src={visibilityOff}
              alt="비밀번호 숨김 아이콘"
            />
            <img
              className={clsx({ hidden: !isVisibilityOn })}
              src={visibilityOn}
              alt="비밀번호 표시 아이콘"
            />
          </button>
        ) : undefined}
      </div>
      {errorMsg ? (
        <div className="text-error-red text-[14px] font-semibold pl-md -mt-2 mb-[10px]">
          {errorMsg}
        </div>
      ) : undefined}
    </div>
  );
};

export default FieldUncontrolled;
