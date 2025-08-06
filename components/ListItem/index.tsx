import Image from "next/image";
import { ItemProps } from "@/types/todo";
import clsx from "clsx";

const ListItemBase = ({ item, variant = "todo", onClick }: ItemProps) => {
  return (
    <li
      className={clsx("item-base", {
        "item-todo": variant === "todo",
        "item-done": variant === "done",
      })}
      onClick={() => onClick(item)}
    >
      <span
        className={clsx("bullet-base", {
          "bullet-todo": variant === "todo",
          "bullet-done": variant === "done",
        })}
      >
        {variant === "done" && (
          <Image
            src="/images/ico-check-wt.svg"
            alt="완료된 할 일"
            width="20"
            height="20"
          />
        )}
      </span>
      {item.name}
    </li>
  );
};

const ListItem = {
  Todo: ({ item, onClick }: ItemProps) => (
    <ListItemBase item={item} variant="todo" onClick={onClick} />
  ),
  Done: ({ item, onClick }: ItemProps) => (
    <ListItemBase item={item} variant="done" onClick={onClick} />
  ),
};

export default ListItem;
