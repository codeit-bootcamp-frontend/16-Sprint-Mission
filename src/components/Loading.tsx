export const LoadingArea = () => {
  return (
    <div className="flex items-center justify-center h-[50vh]">
      <LoadingSpinner />
    </div>
  );
};

export const LoadingSpinner = () => {
  return (
    <div className="w-5 h-5 border-[5px] border-violet600 border-t-violet100 rounded-full animate-spin" />
  );
};
