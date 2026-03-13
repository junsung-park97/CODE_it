"use client";

import Image from "next/image";

interface MemoInputProps {
  memo: string;
  onChange: (memo: string) => void;
}

/**
 * 메모 입력 컴포넌트입니다.
 * 메모 배경 이미지 위에 textarea를 렌더링합니다.
 * defaultValue 대신 value를 사용하여 useTodoDetailPage의 memo 상태와 동기화합니다.
 * @param memo - 메모 내용
 * @param onChange - 메모 내용을 변경하는 함수
 */
const MemoInput = ({ memo, onChange }: MemoInputProps) => {
  return (
    <div className="relative flex-1 min-h-[240px] rounded-xl overflow-hidden">
      <Image
        src="/images/memo/memo.png"
        alt="메모 배경"
        fill
        className="object-cover"
      />
      <div className="relative z-10 flex flex-col gap-2 w-full h-full p-4">
        <span className="text-center font-bold text-amber">Memo</span>
        <textarea
          className="w-full flex-1 bg-transparent resize-none outline-none text-slate-800 text-s"
          placeholder="메모를 입력하세요"
          value={memo}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default MemoInput;
