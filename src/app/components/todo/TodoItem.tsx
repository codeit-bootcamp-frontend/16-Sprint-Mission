import { MouseEvent } from "react";
import Icon from "../common/Icon";
import { Todo } from "../../types/todo";

interface TodoItemProps {
  item: Todo;
  onToggle: (
    e: MouseEvent<HTMLButtonElement>,
    id: number,
    current: boolean
  ) => void;
  disabled: boolean;
}

export default function TodoItem({ item, onToggle, disabled }: TodoItemProps) {
  return (
    <li
      className={`flex items-center justify-between px-2 py-3 h-[50px] max-w-[588px] rounded-[27px] border-2 border-slate-800 text-slate-800
        ${
          item.isCompleted
            ? "bg-violet-100 hover:bg-yellow-50"
            : "bg-yellow-50 hover:bg-violet-100"
        }`}
    >
      <button
        className={`flex items-center gap-2 flex-1 text-left cursor-pointer ${
          item.isCompleted
            ? "line-through hover:no-underline"
            : "hover:line-through"
        }`}
        onClick={(e) => onToggle(e, item.id, item.isCompleted)}
        disabled={disabled}
      >
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full ${
            item.isCompleted
              ? "bg-violet-500 border-0"
              : "bg-yellow-50 border-2"
          }`}
        >
          {item.isCompleted && (
            <Icon id="check" size={20} className="text-yellow-50" />
          )}
        </div>
        <span>{item.name}</span>
      </button>
    </li>
  );
}
