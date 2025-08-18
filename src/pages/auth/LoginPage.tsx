/** @jsxImportSource @emotion/react */
import AuthContent from "@/components/layout/AuthContent";
import AuthPageStyle from "./AuthPageStyle";
import LoginForm from "@/components/Form/LoginForm";

const LoginPage = () => {
  return (
    <AuthContent css={AuthPageStyle}>
      <section className="login">
        <div className="form-container">
          <LoginForm />
        </div>
      </section>
    </AuthContent>
  );
};

export default LoginPage;
