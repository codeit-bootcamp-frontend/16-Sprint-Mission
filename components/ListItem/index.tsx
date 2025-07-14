import * as styles from "./ListItemStyle";
import Image from "next/image";
interface Item {
  id: string;
  name: string;
  isCompleted: boolean;
}

interface ItemProps {
  item: Item;
  variant?: "todo" | "done";
  onClick?: (item: { id: string; name: string; isCompleted: boolean }) => void;
}

const ListItem = ({ item, variant, onClick }: ItemProps) => {
  if (variant === "todo") return <List.Todo item={item} onClick={onClick} />;
  if (variant === "done") return <List.Done item={item} />;
};

export default ListItem;

const List = {
  Todo: ({ item, onClick }: ItemProps) => (
    <li
      className={`${styles.itemBaseStyle} ${styles.todoItemStyle}`}
      onClick={() => onClick?.(item)}
    >
      <span
        className={`${styles.itemBulletBaseStyle} ${styles.todoBulletStyle}`}
      ></span>
      {item.name}
    </li>
  ),
  Done: ({ item }: ItemProps) => (
    <li className={`${styles.itemBaseStyle} ${styles.doneItemStyle}`}>
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
