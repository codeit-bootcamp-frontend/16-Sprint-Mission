import { FormEvent, useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Input from "@/components/Input";
import FormControl from "@/components/FormControl";

interface AddTodoFormProps {
  onAddTodo: () => void;
}

const AddTodoForm = ({ onAddTodo }: AddTodoFormProps) => {
  const [value, setValue] = useState("");

  const newTodo = {
    name: value,
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch(
      "https://assignment-todolist-api.vercel.app/api/sdsample/items",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      }
    );

    if (!res.ok) {
      console.error("todo 추가 실패:", await res.text());
    }

    onAddTodo();
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
        <Button variant="primary" disabled={!value}>
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

export default AddTodoForm;
