"use client";

import CheckboxEmptyIcon from "@/shared/icon/CheckboxEmptyIcon";
import CheckboxFilledIcon from "@/shared/icon/CheckboxFillIcon";

interface DetailTodoItemProps {
  name: string;
  isCompleted: boolean;
  onToggle: () => void;
  onNameChange: (name: string) => void;
}

/**
 * 상세 페이지 상단에 표시되는 할 일 아이템 컴포넌트입니다.
 * 완료 상태 토글과 이름 수정 기능을 제공합니다.
 * @param name - 할 일 이름
 * @param isCompleted - 완료 여부 (true: 완료, false: 진행 중)
 * @param onToggle - 완료 상태를 토글하는 함수
 * @param onNameChange - 할 일 이름을 변경하는 함수
 */
const DetailTodoItem = ({
  name,
  isCompleted,
  onToggle,
  onNameChange,
}: DetailTodoItemProps) => {
  return (
    <div
      className={`flex items-center w-full px-4 py-3 rounded-full border-2 border-slate-900 ${
        isCompleted ? "bg-primary-light" : "bg-white"
      }`}
    >
      {/* 체크박스 버튼 */}
      <button onClick={onToggle} className="flex-shrink-0">
        {isCompleted ? <CheckboxFilledIcon /> : <CheckboxEmptyIcon />}
      </button>

      {/* 이름 수정 input */}
      <input
        className={`flex-1 text-center font-bold text-slate-900 bg-transparent outline-none ${
          isCompleted ? "line-through" : ""
        }`}
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
      />

      {/* 체크박스 너비만큼 우측 여백 */}
      <div className="flex-shrink-0 w-[32px]" />
    </div>
  );
};

export default DetailTodoItem;
