interface Todo {
  id: string;
  name: string;
  isCompleted: boolean;
}

interface TodoProps {
  todo: Todo;
  onClick?: (todo: { id: string; name: string; isCompleted: boolean }) => void;
}

const ListItem = ({ todo, onClick }: TodoProps) => {
  return (
    <li
      className="flex items-center w-full mt-4 bg-white border-2 border-gray-900 px-[12px] py-2 text-base text-gray-800 rounded-full cursor-pointer"
      onClick={() => onClick?.(todo)}
    >
      <span className="inline-block w-8 h-8 mr-4 rounded-full border-2 border-gray-900 bg-yellow-100"></span>
      {todo.name}
    </li>
  );
};

export default ListItem;
