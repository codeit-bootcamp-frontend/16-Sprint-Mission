const DropdownMenu = ({ items, onClick }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>
          <button onClick={onClick}>{item}</button>
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
