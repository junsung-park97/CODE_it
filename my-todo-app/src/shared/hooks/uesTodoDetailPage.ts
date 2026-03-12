// 상세 페이지 상태 + 액션 관리

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTodoDetail } from "@/shared/hooks/useTodoDetail";
import { useUpdateTodo } from "@/shared/hooks/useUpdateTodo";
import { useDeleteTodo } from "@/shared/hooks/useDeleteTodo";
import { useUploadImage } from "@/shared/hooks/useUploadImage";

/**
 * 상세 페이지의 상태와 액션을 관리하는 훅입니다.
 * 페이지 컴포넌트가 비대해지는 것을 방지하기 위해 별도로 분리했습니다.
 * 서버에서 데이터를 받으면 useEffect를 통해 폼 상태를 초기화합니다.
 * @param itemId - 조회할 할 일의 ID
 * @returns name - 할 일 이름 상태
 * @returns setName - 할 일 이름 변경 함수
 * @returns memo - 메모 상태
 * @returns setMemo - 메모 변경 함수
 * @returns imageUrl - 이미지 URL 상태
 * @returns isCompleted - 완료 여부 상태
 * @returns setIsCompleted - 완료 여부 변경 함수
 * @returns handleImageUpload - 이미지 파일을 업로드하고 imageUrl을 업데이트하는 함수
 * @returns handleUpdate - 현재 폼 상태로 할 일을 수정하고 목록 페이지로 이동하는 함수
 * @returns handleDelete - 할 일을 삭제하고 목록 페이지로 이동하는 함수
 */
export const useTodoDetailPage = (itemId: number) => {
  const router = useRouter();

  const { data: todo } = useTodoDetail(itemId);
  const { mutate: updateTodo } = useUpdateTodo();
  const { mutate: deleteTodo } = useDeleteTodo();
  const { mutate: uploadImage } = useUploadImage();

  const [name, setName] = useState("");
  const [memo, setMemo] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  // 서버로 부터 데이터를 받으면 폼 초기화
  useEffect(() => {
    if (!todo) return;
    setName(todo.name);
    setMemo(todo.memo ?? "");
    setImageUrl(todo.imageUrl ?? "");
    setIsCompleted(todo.isCompleted);
  }, [todo]);

  // 이미지 업로드
  const handleImageUpload = (file: File) => {
    uploadImage(file, {
      onSuccess: ({ url }) => {
        setImageUrl(url);
      },
    });
  };

  // 수정완료
  const handleUpdate = () => {
    updateTodo(
      { itemId, body: { name, memo, imageUrl, isCompleted } },
      { onSuccess: () => router.push("/") },
    );
  };

  // 삭제
  const handleDelete = () => {
    deleteTodo(itemId, { onSuccess: () => router.push("/") });
  };

  return {
    name,
    setName,
    memo,
    setMemo,
    imageUrl,
    isCompleted,
    setIsCompleted,
    handleImageUpload,
    handleDelete,
    handleUpdate,
  };
};
