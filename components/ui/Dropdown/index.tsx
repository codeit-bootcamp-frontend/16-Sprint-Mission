import clsx from "clsx";

interface DropdownProps {
  items: string[];
  onClick: () => void;
  isDropdownOpen: boolean;
  isCommentDropdown?: boolean;
}

const Dropdown = ({
  items = [],
  onClick,
  isDropdownOpen,
  isCommentDropdown,
}: DropdownProps) => {
  return (
    <ul
      className={clsx(
        "absolute right-0 top-[110%] w-full min-w-[130px] border border-gray-300 rounded-xl overflow-hidden z-10",
        {
          block: isDropdownOpen,
          hidden: !isDropdownOpen,
          "top-[30px] w-auto": isCommentDropdown,
        }
      )}
    >
      {items.map((item) => (
        <li
          key={item}
          className="w-full bg-white text-gray-500 hover:text-primary"
        >
          <button onClick={onClick} className="w-full py-3 px-2 text-base">
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
