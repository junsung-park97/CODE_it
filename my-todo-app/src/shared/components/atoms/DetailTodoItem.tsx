"use client";

// src/shared/components/atoms/DetailTodoItem.tsx
import CheckboxEmptyIcon from "@/shared/components/icon/CheckboxEmptyIcon";
import CheckboxFilledIcon from "@/shared/components/icon/CheckboxFillIcon";
import type { ToDoItem } from "@/shared/types/todo";

interface DetailTodoItemProps {
  todo: ToDoItem;
  onToggle: (id: number) => void;
}

const DetailTodoItem = ({ todo, onToggle }: DetailTodoItemProps) => {
  const { id, name, isCompleted } = todo;

  return (
    <div
      className={`flex items-center w-full px-4 py-3 rounded-full border-2 border-slate-900 ${
        isCompleted ? "bg-primary-light" : "bg-white"
      }`}
    >
      {/* 체크박스 버튼 */}
      <button onClick={() => onToggle(id)} className="flex-shrink-0">
        {isCompleted ? <CheckboxFilledIcon /> : <CheckboxEmptyIcon />}
      </button>

      {/* 텍스트 - 가운데 정렬 */}
      <span
        className={`flex-1 text-center font-bold text-slate-900 ${
          isCompleted ? "line-through" : ""
        }`}
      >
        {name}
      </span>

      {/* 체크박스 너비만큼 우측 여백 */}
      <div className="flex-shrink-0 w-[32px]" />
    </div>
  );
};

export default DetailTodoItem;
