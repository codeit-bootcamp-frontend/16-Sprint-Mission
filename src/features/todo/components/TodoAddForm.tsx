import Button from "@/components/Button";

const TodoAddForm = () => {
  return (
    <div className="flex gap-5">
      <input
        type="text"
        placeholder="할 일을 입력해주세요"
        className="px-6 border-2 border-slate900 bg-slate100 rounded-3xl grow-1 shadow-custom placeholder:text-slate500"
      />
      <Button disabled={true} variant="add">
        추가하기
      </Button>
    </div>
  );
};

export default TodoAddForm;
