/** @jsxImportSource @emotion/react */
import AuthContent from "@/components/layout/AuthContent";
import AuthPageStyle from "./AuthPageStyle";
import SignUpForm from "@/components/Form/SignUpForm";

const SignUpPage = () => {
  return (
    <AuthContent css={AuthPageStyle}>
      <section className="signup">
        <div className="form-container">
          <SignUpForm />
        </div>
      </section>
    </AuthContent>
  );
};

export default SignUpPage;
