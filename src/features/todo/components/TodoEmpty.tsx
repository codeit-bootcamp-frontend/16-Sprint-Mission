import Empty from "@/components/Empty";

const TodoEmpty = () => {
  return (
    <Empty
      src="/images/TodoEmptyIcon.svg"
      width={240}
      height={240}
      alt="할 일이 없어요."
    >
      할 일이 없어요. <br />
      TODO를 새롭게 추가해주세요!
    </Empty>
  );
};

export default TodoEmpty;
