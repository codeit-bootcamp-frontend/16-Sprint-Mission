import { useState } from "react";
import { FormInput } from "../../components/Form/FormInput";
import googleLogo from "../../assets/images/google-logo.png";
import kakaoLogo from "../../assets/images/kakao-logo.png";
import pandaLogo from "../../assets/images/auth-logo.png"
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login() {
  // input의 값들 설정
  const [values, setValues] = useState<Record<string, string>>({
    email: "",
    password: "",
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
      name: "password",
      type: "password",
      placeholder: "비밀번호를 입력해주세요",
      errorMessage: "비밀번호는 최소 8글자이상 입력해주세요",
      label: "비밀번호",
      pattern: "^([a-zA-Z0-9!@#$%^&*]){8,}$",
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

    if (input.pattern) {
      const regex = new RegExp(input.pattern);
      return regex.test(value);
    }

    return true;
  });

    return (
    <main className={styles.wrapper}>
      <img className={styles.pandaLogo} src={pandaLogo} alt="판다마켓 로고"/>
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
          로그인
        </button>
        <div className={styles.loginContainer}>
          <div>간편 로그인하기</div>
          <div className={styles.loginLogos}>
            <img src={googleLogo} alt="구글 로고" width={42} height={42}/>
            <img src={kakaoLogo} alt="카카오 로고" width={42} height={42} />
          </div>
        </div>
        <p>
          판다마켓이 처음이신가요? <Link className={styles.loginLink} to="/login">회원가입</Link>
        </p>
      </form>
    </main>
  );
}
