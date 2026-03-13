"use client";

import DetailTodoItem from "@/shared/components/atoms/DetailTodoItem";
import ImageUploader from "@/shared/components/atoms/ImageUpload";
import MemoInput from "@/shared/components/atoms/MemoInput";
import DetailActionButtons from "@/shared/components/DetailActionButton";
import { useTodoDetailPage } from "@/shared/hooks/uesTodoDetailPage";
import { use } from "react";

interface ItemDetailPageProps {
  params: Promise<{ itemId: string }>;
}

/**
 * 할 일 상세 페이지 컴포넌트입니다.
 * useTodoDetailPage 훅을 통해 상태와 액션 함수를 가져와 자식 컴포넌트에 전달합니다.
 * 페이지 컴포넌트는 JSX 렌더링만 담당하며 별도의 로직을 포함하지 않습니다.
 * @param params - URL 파라미터 (itemId: string) Next.js 15 이상에서 params는 Promise로 전달됩니다.
 */
export default function ItemDetailPage({ params }: ItemDetailPageProps) {
  const { itemId } = use(params);
  const {
    name,
    setName,
    memo,
    setMemo,
    imageUrl,
    isCompleted,
    setIsCompleted,
    handleImageUpload,
    handleUpdate,
    handleDelete,
  } = useTodoDetailPage(Number(itemId));

  return (
    <div className="flex flex-col gap-6 py-6">
      <DetailTodoItem
        name={name}
        isCompleted={isCompleted}
        onToggle={() => setIsCompleted(!isCompleted)}
        onNameChange={setName}
      />
      <div className="flex flex-col lg:flex-row gap-6">
        <ImageUploader imageUrl={imageUrl} onUpload={handleImageUpload} />
        <MemoInput memo={memo} onChange={setMemo} />
      </div>
      <DetailActionButtons onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
}
