import { FormEvent } from "react";
import Input from "./Input";
import CustomButton from "./CustomButton";

interface InputConfig {
  id: number;
  type: string;
  name: string;
  placeholder: string;
}

interface FormInputProps {
  inputs: InputConfig[];
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  containerStyle?: string;
}

export default function FormInput({ inputs, handleSubmit, containerStyle }: FormInputProps) {
  return (
    <form onSubmit={handleSubmit} className={`${containerStyle}`}>
      {inputs.map((input) => (
        <Input
          key={input.id}
          type={input.type}
          name={input.name}
          placeholder={input.placeholder}
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
