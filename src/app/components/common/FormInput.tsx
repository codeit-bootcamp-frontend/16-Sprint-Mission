"use client";

import { DetailedHTMLProps, FormEvent, FormHTMLAttributes } from "react";
import CustomButton from "./CustomButton";
import { FormInputConfig } from "../../types/form";
import Input from "./Input";

interface FormInputProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  inputs: FormInputConfig[];
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  errors?: Record<string, string>;
  containerStyle?: string;
}

export default function FormInput({
  inputs,
  handleSubmit,
  errors,
  containerStyle,
}: FormInputProps) {
  return (
    <form onSubmit={handleSubmit} className={`${containerStyle}`}>
      {inputs.map((input) => (
        <Input
          key={input.id}
          type={input.type}
          name={input.name}
          placeholder={input.placeholder}
          error={errors?.[input.name]}
        />
      ))}
      <CustomButton
        btnType="submit"
        title="추가하기"
        leftIcon="plus"
        hoverColor="violet"
      />
    </form>
  );
}
