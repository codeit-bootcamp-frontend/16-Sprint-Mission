const DropdownBtn = ({ uiType, children }) => {
  const className = `${uiType}`;
  return (
    <button type="button" className={className}>
      최신순
    </button>
  );
};

export default DropdownBtn;
