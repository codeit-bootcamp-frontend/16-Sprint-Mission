"use client";

import Image from "next/image";
import Button from "@/components/Button";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");

  return (
    <div>
      <Button variant="primary" disabled={!value}>
        <Image
          src={`images/ico-plus-${value ? "wt" : "bk"}.svg`}
          alt=""
          width="16"
          height="16"
          className="mr-1"
        />
        추가하기
      </Button>
    </div>
  );
}
