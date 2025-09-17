import { ReactNode } from "react";
import LoginForm from "@/components/Form/LoginForm";
import AuthLayout from "@/components/layouts/AuthLayout";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center">
      <LoginForm />
    </div>
  );
};

LoginPage.getLayout = (page: ReactNode) => <AuthLayout>{page}</AuthLayout>;

export default LoginPage;
