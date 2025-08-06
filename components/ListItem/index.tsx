import Image from "next/image";
import { ItemProps } from "@/types/todo";
import clsx from "clsx";

const ListItemBase = ({
  item,
  variant = "todo",
  onBulletClick,
  onListClick,
}: ItemProps) => {
  const handleBulletClick = (e: MouseEvent) => {
    e.stopPropagation();
    onBulletClick(item);
  };

  return (
    <li
      className={clsx("item-base", {
        "item-todo": variant === "todo",
        "item-done": variant === "done",
      })}
      onClick={onListClick}
    >
      <button
        className={clsx("bullet-base", {
          "bullet-todo": variant === "todo",
          "bullet-done": variant === "done",
        })}
        onClick={handleBulletClick}
      >
        {variant === "done" && (
          <Image
            src="/images/ico-check-wt.svg"
            alt="완료된 할 일"
            width="20"
            height="20"
          />
        )}
      </button>
      {item.name}
    </li>
  );
};

const ListItem = {
  Todo: ({ item, onBulletClick, onListClick }: ItemProps) => (
    <ListItemBase
      item={item}
      variant="todo"
      onBulletClick={onBulletClick}
      onListClick={onListClick}
    />
  ),
  Done: ({ item, onBulletClick, onListClick }: ItemProps) => (
    <ListItemBase
      item={item}
      variant="done"
      onBulletClick={onBulletClick}
      onListClick={onListClick}
    />
  ),
};

export default ListItem;
