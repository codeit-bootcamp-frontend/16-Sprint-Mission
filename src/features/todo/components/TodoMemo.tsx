const TodoMemo = ({ ...props }) => {
  return (
    <div className="flex flex-col py-6 grow-1 bg-[url(/images/MemoLineBg.jpg)] bg-top bg-repeat-y rounded-3xl">
      <h3 className="mb-6 text-base text-center text-amber font-extrabold shrink-0">
        Memo
      </h3>
      <div className="flex items-center px-[10px] justify-center grow-1 overflow-hidden">
        <textarea
          placeholder="메모를 입력해주세요."
          className="custom-scroll px-[6px] resize-none field-sizing-content max-w-full max-h-full"
          {...props}
        />
      </div>
    </div>
  );
};

export default TodoMemo;
