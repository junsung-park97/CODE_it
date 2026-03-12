// 할 일 목록 상태 + 액션 관리
import { useState } from "react";
import { useTodos } from "@/shared/hooks/useTodos";
import { useUpdateTodo } from "./useUpdateTodo";
import { useCreateTodo } from "@/shared/hooks/useCreateTodo";

/**
 * 할 일 목록 페이지의 상태와 액션을 관리하는 훅입니다.
 * useDetailPage와 마찬가지로 페이지 비대함을 방지하기 위함니다.
 * @returns inputValue - 할 일 입력창 텍스트 상태
 * @returns setInputValue - 입력창 텍스트 변경 함수
 * @returns todoList - 진행 중인 할 일 목록
 * @returns doneList - 완료된 할 일 목록
 * @returns handleCreate - 입력값으로 새로운 할 일을 생성하는 함수
 * @returns handleToggle - 할 일의 완료 상태를 토글하는 함수 (id, isCompleted)
 */
export const useTodoListPage = () => {
  const [inputValue, setInputValue] = useState("");

  const { data: todos = [] } = useTodos();
  const { mutate: createTodo } = useCreateTodo();
  const { mutate: updateTodo } = useUpdateTodo();

  // 진행중 / 완료 필터링
  const todoList = todos.filter((todo) => !todo.isCompleted);
  const doneList = todos.filter((todo) => todo.isCompleted);

  // 할 일 추가
  const handleCreate = () => {
    if (!inputValue.trim()) return;
    createTodo({ name: inputValue }, { onSuccess: () => setInputValue("") });
  };

  // 완료 토글
  const handleToggle = (id: number, isCompleted: boolean) => {
    updateTodo({ body: { isCompleted: !isCompleted }, itemId: id });
  };

  return {
    inputValue,
    setInputValue,
    todoList,
    doneList,
    handleCreate,
    handleToggle,
  };
};
