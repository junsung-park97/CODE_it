// src/shared/components/TodoItem.tsx
import Link from "next/link";
import CheckboxEmptyIcon from "@/shared/components/icon/CheckboxEmptyIcon";
import CheckboxFilledIcon from "@/shared/components/icon/CheckboxFillIcon";
import type { ToDoItem } from "@/shared/types/todo";

interface TodoItemProps {
  todo: ToDoItem;
  onToggle: (id: number) => void;
}

//TODO: onToggle은 isCompleted상태를 관리 Zustand로 전역적으로 관리하면 될 듯
const TodoItem = ({ todo, onToggle }: TodoItemProps) => {
  const { id, title, isCompleted } = todo;
  return (
    <div
      className={`flex items-center gap-3 w-full px-4 py-3 rounded-full border-2 border-slate-900 ${
        isCompleted ? "bg-primary-light" : "bg-white"
      }`}
    >
      {/* 체크박스 버튼 - 클릭 시 완료 토글 */}
      <button onClick={() => onToggle(parseInt(id))} className="flex-shrink-0">
        {isCompleted ? <CheckboxFilledIcon /> : <CheckboxEmptyIcon />}
      </button>

      {/* 텍스트 - 클릭 시 상세 페이지 이동 */}
      <Link
        href={`/items/${id}`}
        className={`flex-1 font-bold text-slate-900 ${
          isCompleted ? "line-through" : ""
        }`}
      >
        {title}
      </Link>
    </div>
  );
};

export default TodoItem;
