import { useState } from "react";
import { FormInput } from "../../components/Form/FormInput";
import styles from "./SignUp.module.css";

export default function SignUp() {
  // input의 값들 설정
  const [values, setValues] = useState<Record<string, string>>({
    email: "",
    nickname: "",
    password: "",
    passwordConfirm: "",
  });

  // input정보들 객체형식으로 정리
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "이메일을 입력해주세요",
      errorMessage: "이메일 형식에 맞게 입력해주세요",
      label: "이메일",
      pattern: "^[^@]+@[^@]+\\.[^@]+$",
      required: true,
    },
    {
      id: 2,
      name: "nickname",
      type: "text",
      placeholder: "닉네임을 입력해주세요",
      errorMessage: "닉네임은 최소 1글자 최대 20글자까지 입력해주세요",
      label: "닉네임",
      pattern: "^[a-zA-Z0-9가-힣]{1,20}$",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "비밀번호를 입력해주세요",
      errorMessage: "비밀번호는 최소 8글자이상 입력해주세요",
      label: "비밀번호",
      pattern: "^([a-zA-Z0-9!@#$%^&*]){8,}$",
      required: true,
    },
    {
      id: 4,
      name: "passwordConfirm",
      type: "password",
      placeholder: "비밀번호를 한 번더 입력해주세요",
      errorMessage: "비밀번호가 일치하지 않습니다",
      label: "비밀번호 확인",
      required: true,
    },
  ];

  // onChange 함수
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // 폼 제출할 때 실행함수
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // 모든 input에 제대로 된 값이 들어가 있는지 확인
  const isFormValid = inputs.every((input) => {
    const value = values[input.name];

    if (input.name === "passwordConfirm") {
      return value === values.password;
    }

    if (input.pattern) {
      const regex = new RegExp(input.pattern);
      return regex.test(value);
    }

    return true;
  });

  return (
    <main className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.signupForm}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className={styles.submitButton} disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </main>
  );
}
