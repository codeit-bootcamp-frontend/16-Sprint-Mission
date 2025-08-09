import { Item } from '@/types/TodoTypes';

import CheckListItem from './CheckListItem';
import EmptyContent from './EmptyContent';

interface TodoListProps {
  items: Item[];
  mode?: 'todo' | 'done';
  onClick?: (item: Item) => void;
}

const TodoList = ({ items, mode = 'todo', onClick }: TodoListProps) => {
  return (
    <div className='flex flex-col gap-4 pt-4 w-full'>
      {items.length ? (
        items.map((item) => (
          <CheckListItem
            name={item.name}
            checked={item.isCompleted}
            key={item.id}
            onClick={() => onClick?.(item)}
            className={`${mode === 'done' ? 'line-through' : ''}`}
          />
        ))
      ) : (
        <EmptyContent mode={mode} className='pt-16'></EmptyContent>
      )}
    </div>
  );
};

export default TodoList;
