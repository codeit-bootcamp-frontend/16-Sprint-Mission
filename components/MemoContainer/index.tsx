"use client";

import nanumSquare from "@/assets/fonts/NanumSquare/nanumSquare";
import { useEffect, useRef } from "react";

const MemoContainer = () => {
  const memoRef = useRef<HTMLTextAreaElement>(null);

  const getTextarea = (callback: (el: HTMLTextAreaElement) => void) => {
    const el = memoRef.current;
    if (!el) return;
    callback(el);
  };

  const handleHeight = () => {
    // 디바운싱 처리 필요
    getTextarea((el) => {
      el.style.height = "auto";
      el.style.height = `${el.scrollHeight}px`;
    });
  };

  const focusTextarea = () => {
    getTextarea((el) => {
      el.focus();
    });
  };

  useEffect(() => {
    getTextarea((el) => {
      if (el.value.length === 0) el.focus();
    });
  }, []);

  return (
    <div
      className={`flex flex-col items-center w-full h-[310px] rounded-3xl bg-custom-stripe ${nanumSquare.className}`}
    >
      <span className="mt-6 text-amber-800 font-bold">Memo</span>
      <div
        className="flex items-center justify-center w-full h-full"
        onClick={focusTextarea}
      >
        <textarea
          ref={memoRef}
          name="textarea"
          rows={1}
          spellCheck={false}
          style={{ resize: "none" }}
          onInput={handleHeight}
          className="bg-transparent w-[50%] max-h-[220px] -mt-10 text-center"
        ></textarea>
      </div>
    </div>
  );
};

export default MemoContainer;
