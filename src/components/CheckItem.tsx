"use client";

import Link from "next/link";
import { useState } from "react";

const StyleCheckWrapBase =
  "flex items-center border-2 border-slate900 bg-white has-checked:bg-violet100";

const StylecheckWrap = {
  default: "rounded-[27px] px-[10px] py-[7px]",
  detail: "justify-center rounded-[24px] py-[14px]",
};

const StyleCheckInner = "inline-flex items-center gap-4";

const StyleCheckIcon =
  "block w-8 h-8 border-2 border-slate900 bg-yellow-50 rounded-full cursor-pointer group-has-checked:border-violet600 group-has-checked:bg-violet600 group-has-checked:bg-[url(/images/CheckboxIcon.svg)] group-has-checked:bg-no-repeat group-has-checked:bg-center";

interface SubProps {
  id: string;
  name: string;
}

const DetailCheckItem = ({ id, name }: SubProps) => {
  return (
    <label htmlFor={id} className={`${StyleCheckInner} cursor-pointer`}>
      <span className={StyleCheckIcon} />
      <span className="text-xl font-bold underline">{name}</span>
    </label>
  );
};

const DefaultCheckItem = ({ id, name }: SubProps) => {
  return (
    <div className={StyleCheckInner}>
      <label htmlFor={id} className={StyleCheckIcon} />
      <Link href="/" className={"text-base group-has-checked:line-through"}>
        {name}
      </Link>
    </div>
  );
};

interface Props {
  id: number;
  name: string;
  isCompleted: boolean;
  variant?: "default" | "detail";
  onUpdate: (id: number) => void;
}

const CheckItem = ({
  name,
  id,
  isCompleted = false,
  variant = "default",
  onUpdate,
}: Props) => {
  const [checked, setChecked] = useState(isCompleted);
  const isDefault = variant === "default";
  const matchId = `${name}_${id}`;

  const handleChange = () => {
    setChecked(!checked);
    onUpdate(id);
  };

  return (
    <div className={`${StyleCheckWrapBase} ${StylecheckWrap[variant]} group`}>
      <input
        id={matchId}
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={handleChange}
      />
      {isDefault ? (
        <DefaultCheckItem id={matchId} name={name} />
      ) : (
        <DetailCheckItem id={matchId} name={name} />
      )}
    </div>
  );
};

export default CheckItem;
