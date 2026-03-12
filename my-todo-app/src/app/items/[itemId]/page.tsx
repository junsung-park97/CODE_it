// src/app/items/[itemId]/page.tsx
"use client";
import DetailTodoItem from "@/shared/components/atoms/DetailTodoItem";
import ImageUploader from "@/shared/components/atoms/ImageUpload";
import MemoInput from "@/shared/components/atoms/MemoInput";
import DetailActionButtons from "@/shared/components/DetailActionButton";
import type { ToDoItem } from "@/shared/types/todo";

const DUMMY_TODO: ToDoItem = {
  id: 1,
  name: "비타민 챙겨 먹기",
  isCompleted: false,
  memo: "오메가 3, 프로폴리스, 아연 챙겨먹기",
  imageUrl: "",
};

export default function ItemDetailPage() {
  return (
    <div className="flex flex-col gap-6 py-6">
      <DetailTodoItem todo={DUMMY_TODO} onToggle={() => {}} />
      <div className="flex flex-col lg:flex-row gap-6">
        <ImageUploader imageUrl={DUMMY_TODO.imageUrl} />
        <MemoInput memo={DUMMY_TODO.memo} />
      </div>
      <DetailActionButtons onUpdate={() => {}} onDelete={() => {}} />
    </div>
  );
}
