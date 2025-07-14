import * as styles from "./ListItemStyle";
import Image from "next/image";
import { ItemProps } from "@/types/todo";

const ListItemBase = ({ item, variant = "todo", onClick }: ItemProps) => {
  const itemStyle = styles[`${variant}ItemStyle`];
  const bulletStyle = styles[`${variant}BulletStyle`];

  return (
    <li
      className={`${styles.itemBaseStyle} ${itemStyle}`}
      onClick={() => onClick(item)}
    >
      <span className={`${styles.itemBulletBaseStyle} ${bulletStyle}`}>
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
