interface InputProps {
  type: string;
  name: string;
  placeholder: string;
}

export default function Input({ type, name, placeholder }: InputProps) {
  return (
    <div className="relative w-full h-14 mt-6">
      <div className="absolute inset-[1px] rounded-3xl bg-[#f5f8fc] border border-black z-10"></div>
      <div className="absolute left-[9px] right-[-4px] top-[5px] h-14 rounded-3xl bg-black z-0"></div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="absolute inset-0 px-6 py-[15px] bg-transparent z-20 text-slate-800 placeholder-slate-500 font-normal focus:outline-none"
      />
    </div>
  );
}
