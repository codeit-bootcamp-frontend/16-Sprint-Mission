import Image from "next/image";
import Badge from "@/components/Badge";

interface TodoListProps {
  todos: string[] | undefined;
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <>
      {!todos && <ListEmpty />}
      {todos && <ul></ul>}
    </>
  );
};

export default TodoList;

const ListEmpty = () => {
  return (
    <div className="w-full">
      <Badge text="TO DO" variant="todo" />
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/todo-empty.png"
          alt="연필 들고 있는 두잇 캐릭터"
          width="240"
          height="240"
        />
        <p className="text-gray-400 text-base text-center">
          할 일이 없어요.
          <br />
          TODO를 새롭게 추가해주세요!
        </p>
      </div>
    </div>
  );
};
