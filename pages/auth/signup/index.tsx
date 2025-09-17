import { ReactNode } from "react";
import SignUpForm from "@/components/Form/SignUpForm";
import AuthLayout from "@/components/layouts/AuthLayout";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center">
      <SignUpForm />
    </div>
  );
};

SignUpPage.getLayout = (page: ReactNode) => <AuthLayout>{page}</AuthLayout>;

export default SignUpPage;
