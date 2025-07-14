import * as styles from "./ListItemStyle";
import Image from "next/image";
import { ItemProps } from "@/types/todo";

const ListItem = ({ item, variant, onClick }: ItemProps) => {
  if (variant === "todo") return <List.Todo item={item} onClick={onClick} />;
  if (variant === "done") return <List.Done item={item} onClick={onClick} />;
};

export default ListItem;

const List = {
  Todo: ({ item, onClick }: ItemProps) => (
    <li
      className={`${styles.itemBaseStyle} ${styles.todoItemStyle}`}
      onClick={() => onClick(item)}
    >
      <span
        className={`${styles.itemBulletBaseStyle} ${styles.todoBulletStyle}`}
      ></span>
      {item.name}
    </li>
  ),
  Done: ({ item, onClick }: ItemProps) => (
    <li
      className={`${styles.itemBaseStyle} ${styles.doneItemStyle}`}
      onClick={() => onClick(item)}
    >
      <span
        className={`${styles.itemBulletBaseStyle} ${styles.doneBulletStyle}`}
      >
        <Image
          src="/images/ico-check-wt.svg"
          alt="완료된 할 일"
          width="20"
          height="20"
        />
      </span>
      {item.name}
    </li>
  ),
};
