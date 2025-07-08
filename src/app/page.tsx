"use client";

import FormInput from "./components/FormInput";
import Navbar from "./components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main
        className="px-4
      md:px-6
      lg:px-[360px]
      "
      >
        <FormInput />
      </main>
    </>
  );
};

export default HomePage;
