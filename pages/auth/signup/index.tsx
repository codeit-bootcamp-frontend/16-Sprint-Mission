import { ReactNode } from "react";
import SignUpForm from "@/components/Form/SignUpForm";

const SignUpPage = () => {
  return (
    <section className="py-[80px]">
      <div className="flex items-center justify-center">
        <SignUpForm />
      </div>
    </section>
  );
};

SignUpPage.getLayout = (page: ReactNode) => <>{page}</>;

export default SignUpPage;
