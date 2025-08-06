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
  onBulletClick: (item: Item) => void;
  onListClick: () => void;
}

export interface ItemListProps {
  items: Item[] | undefined;
  variant?: "todo" | "done";
  onClick?: ({}: Item) => void;
}

export interface ItemListBaseProps extends ItemListProps {
  badgeTxt: string;
  emptyImg: string;
  emptyMsg: string | ReactNode;
}

export type UpdateItem = Omit<Item, "id">;

export type newItem = Omit<Item, "id", "isCompleted">;
