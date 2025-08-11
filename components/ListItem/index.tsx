import { MouseEvent } from "react";
import { ItemProps, Item } from "@/types/todo";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import BulletButton from "@/components/Button/BulletButton";

const ListItemBase = ({ item, variant = "todo", onBulletClick }: ItemProps) => {
  const router = useRouter();

  const handleBulletClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onBulletClick(item);
  };

  const handleListClick = (item: Item) => {
    router.push(`/items/${item.id}`);
  };

  return (
    <li
      className={clsx("item-base", {
        "item-todo": variant === "todo",
        "item-done": variant === "done",
      })}
      onClick={() => handleListClick(item)}
    >
      <BulletButton
        variant={variant}
        onClick={handleBulletClick}
      ></BulletButton>
      {item.name}
    </li>
  );
};

const ListItem = {
  Todo: ({ item, onBulletClick }: ItemProps) => (
    <ListItemBase item={item} variant="todo" onBulletClick={onBulletClick} />
  ),
  Done: ({ item, onBulletClick }: ItemProps) => (
    <ListItemBase item={item} variant="done" onBulletClick={onBulletClick} />
  ),
};

export default ListItem;
