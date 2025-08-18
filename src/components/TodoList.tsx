import { Item } from '@/types/TodoTypes';

import CheckListItem from './CheckListItem';
import EmptyContent from './EmptyContent';

interface TodoListProps {
  items: Item[];
  mode?: 'todo' | 'done';
  onCheck?: (item: Item) => void;
  onClick?: (item: Item) => void;
}

const TodoList = ({ items, mode = 'todo', onCheck, onClick }: TodoListProps) => {
  return (
    <div className='flex flex-col gap-4 pt-4 w-full'>
      {items.length ? (
        items.map((item) => (
          <CheckListItem
            name={item.name}
            checked={item.isCompleted}
            key={item.id}
            onCheck={() => onCheck?.(item)}
            onClick={() => onClick?.(item)}
            className={`${mode === 'done' ? 'line-through' : ''}`}
            disabled={typeof item.id === 'string' && item.id.startsWith('temp')}
          />
        ))
      ) : (
        <EmptyContent
          mode={mode}
          className='pt-16 w-full flex-1 flex items-center justify-center'
        ></EmptyContent>
      )}
    </div>
  );
};

export default TodoList;
