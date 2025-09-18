interface InputType {
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ className, ...props }: InputType) => {
  return (
    <input
      placeholder='할 일을 입력해주세요'
      className={`bg-slate-100 focus:outline-none
        border-2 border-b-4 border-r-4 border-black rounded-[24px]
        px-5 py-4 w-auto h-[52px] ${className}`}
      {...props}
    />
  );
};

export default Input;
