import { ReactNode } from "react";
import LoginForm from "@/components/Form/LoginForm";

const LoginPage = () => {
  return (
    <section className="py-[80px]">
      <div className="flex items-center justify-center">
        <LoginForm />
      </div>
    </section>
  );
};

LoginPage.getLayout = (page: ReactNode) => <>{page}</>;

export default LoginPage;
