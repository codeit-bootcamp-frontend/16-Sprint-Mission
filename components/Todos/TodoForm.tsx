import { FormEvent, useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Input from "@/components/Input";
import FormControl from "@/components/FormControl";
import { addTodo } from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Item } from "@/types/todo";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: addTodo,
    retry: 1,
    retryDelay: 0.3,
    onMutate: async (newTodoName: string) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      const prevItems = queryClient.getQueryData(["todos"]);

      if (prevItems) {
        queryClient.setQueryData<Item[]>(["todos"], (oldItems) => {
          const optimisticTodo = { name: newTodoName, isCompleted: false };
          return oldItems ? [optimisticTodo, ...oldItems] : [optimisticTodo];
        });
      }

      return { prevItems };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      setValue("");
    },
    onError: (err, newTodoName, context) => {
      if (context?.prevItems) {
        queryClient.setQueryData(["todos"], context.prevItems);
      }
      console.error(err);
      alert("투두 추가에 실패했습니다.");
    },
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    mutate(value);
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
        <Button type="submit" variant="primary" disabled={!value || isPending}>
          <Image
            src={`images/ico-plus-${value && !isPending ? "wt" : "bk"}.svg`}
            alt=""
            width="16"
            height="16"
            className="mr-1"
          />
          {isPending ? "추가중..." : "추가하기"}
        </Button>
      </FormControl>
    </form>
  );
};

export default TodoForm;
