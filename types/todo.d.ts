export interface Item {
  id?: string;
  name: string;
  isCompleted: boolean;
  memo?: string;
  imageUrl?: string;
}

export interface ItemProps {
  item: Item;
  variant?: "todo" | "done";
  onClick: (item: Item) => void;
}

export interface ItemListProps {
  items: Item[] | undefined;
  variant?: "todo" | "done";
  onClick?: ({}: Item) => void;
}
