import * as z from "zod/v4";
import { FormEvent } from "react";
import Icon from "./Icon";

const todoSchema = z.object({
  todo: z.string().trim().min(1),
});

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);

  const todo = formData.get("todo") as string | null;
  const validation = todoSchema.safeParse({ todo });
  if (!validation.success) {
    console.error("유효성 실패 : ", z.prettifyError(validation.error));
    return;
  }
  console.log("할 일:", validation.data.todo);
};

export default function FormInput() {
  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <div className="relative w-full h-14 mt-6">
        <div className="absolute inset-[1px] rounded-3xl bg-[#f5f8fc] border border-black z-10"></div>
        <div className="absolute left-[9px] right-[-4px] top-[5px] h-14 rounded-3xl bg-black z-0"></div>
        <input
          type="text"
          name="todo"
          placeholder="할 일을 입력해주세요"
          className="absolute inset-0 px-6 py-[15px] bg-transparent z-20 text-slate-800 placeholder-slate-500 font-normal focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="group relative w-[168px] h-14 mt-6 cursor-pointer"
      >
        <div className="relative flex justify-center items-center gap-1 z-20  group-hover:text-amber-50  transition-colors duration-200">
          <Icon id="plus" className="fill-slate-900 h-5 w-5" />
          <span className="font-[--font-nanumsquareB] font-bold leading-none translate-y-[1.5px]">
            추가하기
          </span>
        </div>
        <div className="absolute inset-[1px] rounded-3xl bg-[#f5f8fc] border border-black group-hover:bg-violet-600 transition-colors duration-200 z-10"></div>
        <div className="absolute left-[9px] right-[-4px] top-[5px] h-14 rounded-3xl bg-black z-0"></div>
      </button>
    </form>
  );
}
