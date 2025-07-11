"use client";

import { FormEvent } from "react";
import * as z from "zod/v4";
import FormInput from "./components/FormInput";
import Navbar from "./components/Navbar";
import { todoSchema } from "./schemas/todo";

// input값들 설정하는 배열
const inputs = [
  {
    id: 1,
    type: "text",
    name: "todo",
    placeholder: "할 일을 입력해주세요.",
  },
];

// submit했을 때 함수
const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  // formData객체 생성해서 내부 input입력값들 모두 비제어로 접근
  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData.entries());

  // zod용 schema로 유효성 검사
  const validation = todoSchema.safeParse(data);

  // zod로 유효성 검사 실패 시에 에러 내용 및 return
  if (!validation.success) {
    const flattened = z.flattenError(validation.error)
    console.log(flattened.fieldErrors);
    // console.error("유효성 오류:", z.prettifyError(validation.error));
    return;
  }

  // 유효성 검사 통과할 시 입력값들 제출
  console.log("검증된 데이터:", validation.data);
};

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
        <FormInput
          inputs={inputs}
          handleSubmit={handleSubmit}
          containerStyle="flex gap-4"
        />
      </main>
    </>
  );
};

export default HomePage;
