"use client";

import clsx from "clsx";
import { ReactNode, useState } from "react";

const StylecheckWrap = {
  default: "flex itemx-center rounded-[27px] px-[10px] py-[7px]",
  detail: "rounded-[24px] p-[14px] text-center text-[0px] overflow-hidden",
};

interface Props {
  id: number;
  initValue: boolean;
  onChange: (value: boolean) => void;
  variant?: "default" | "detail";
  children: ReactNode;
}

const CheckItem = ({
  id,
  onChange,
  initValue,
  variant = "default",
  children,
}: Props) => {
  const [checked, setChecked] = useState(initValue);
  const matchId = `todo_${id}`;

  const handleChange = () => {
    const nextCheck = !checked;
    setChecked(nextCheck);
    onChange(nextCheck);
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
        {children}
      </div>
    </div>
  );
};

export default CheckItem;
