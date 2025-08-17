"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

const StylecheckWrap = {
  default: "flex itemx-center rounded-[27px] px-[10px] py-[7px]",
  detail: "rounded-[24px] p-[14px] text-center text-[0px] overflow-hidden",
};

interface SubProps {
  id?: number;
  name: string;
}

const DetailCheckItem = ({ name }: SubProps) => {
  return (
    <input
      name="name"
      type="text"
      defaultValue={name}
      className="max-w-[90%] py-1 text-xl font-bold underline underline-offset-4 field-sizing-content"
      placeholder="할일을 입력해주세요."
    />
  );
};

const DefaultCheckItem = ({ id, name }: SubProps) => {
  return (
    <Link
      href={`/items/${id}`}
      className={"text-base group-has-checked:line-through break-keep"}
    >
      {name}
    </Link>
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
  const matchId = `todo_${id}`;

  const handleChange = () => {
    setChecked(!checked);
    onUpdate(id);
  };

  return (
    <div
      className={clsx(
        "border-2 border-slate900 bg-white has-checked:bg-violet100 group overflow-hidden",
        StylecheckWrap[variant]
      )}
    >
      <input
        id={matchId}
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={handleChange}
      />

      <div
        className={clsx(
          "inline-flex items-center gap-4",
          variant === "detail"
            ? "max-w-full overflow-hidden justify-center"
            : null
        )}
      >
        <label
          htmlFor={matchId}
          className="block w-8 h-8 border-2 border-slate900 bg-yellow-50 rounded-full cursor-pointer group-has-checked:border-violet600 group-has-checked:bg-violet600 group-has-checked:bg-[url(/images/CheckboxIcon.svg)] group-has-checked:bg-no-repeat group-has-checked:bg-center shrink-0 grow-0 basis-auto"
        />
        {isDefault ? (
          <DefaultCheckItem id={id} name={name} />
        ) : (
          <DetailCheckItem name={name} />
        )}
      </div>
    </div>
  );
};

export default CheckItem;
