// src/shared/components/atoms/MemoInput.tsx
"use client";
import Image from "next/image";
import { useState } from "react";

interface MemoInputProps {
  initMemo?: string;
}

const MemoInput = ({ initMemo }: MemoInputProps) => {
  const [memo, setMemo] = useState("");

  return (
    <div className="relative flex-1 min-h-[240px] rounded-xl overflow-hidden">
      {/* 배경 이미지 */}
      <Image
        src="/images/memo/memo.png"
        alt="메모 배경"
        fill
        className="object-cover"
      />

      {/* 메모 내용 */}
      <div className="relative z-10 flex flex-col gap-2 w-full h-full p-4">
        <span className="text-center font-bold text-amber">Memo</span>
        <textarea
          className="w-full flex-1 bg-transparent resize-none outline-none text-slate-800 text-s"
          placeholder="메모를 입력하세요"
          defaultValue={initMemo}
          onChange={(e) => {
            setMemo(e.target.value);
            console.log(memo);
          }}
        />
      </div>
    </div>
  );
};

export default MemoInput;
