import { FormEvent, useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Input from "@/components/Input";
import FormControl from "@/components/FormControl";
import { TENANT_ID } from "@/constants/constants";
import axios from "@/lib/axios";

interface TodoFormProps {
  onAddTodo?: () => void;
}

const TodoForm = ({ onAddTodo }: TodoFormProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newTodo = { name: value };

    await axios.post(`/${TENANT_ID}/items`, newTodo);

    onAddTodo?.();
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <Input
          id="todoInput"
          value={value}
          placeholder="할 일을 입력해주세요"
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type="submit" variant="primary" disabled={!value}>
          <Image
            src={`images/ico-plus-${value ? "wt" : "bk"}.svg`}
            alt=""
            width="16"
            height="16"
            className="mr-1"
          />
          추가하기
        </Button>
      </FormControl>
    </form>
  );
};

export default TodoForm;
