import Badge from "../Badge";

const TodoLoading = () => {
  return (
    <div className="flex flex-col">
      <div className="input-search-skeleton"></div>
      <div className="flex gap-6 mt-10">
        <div className="w-full flex flex-col gap-4">
          <Badge className="badge-skeleton" />
          <ul className="flex flex-col gap-4">
            <li className="item-skeleton"></li>
            <li className="item-skeleton"></li>
          </ul>
        </div>
        <div className="w-full flex flex-col gap-4 ">
          <Badge className="badge-skeleton" />
          <ul className="flex flex-col gap-4">
            <li className="item-skeleton"></li>
            <li className="item-skeleton"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoLoading;
