"use client";
// src/app/page.tsx - 목록 페이지
import InputBar from "@/shared/components/InputBar";
import TodoList from "@/shared/components/TodoList";
import { useTodoListPage } from "@/shared/hooks/useTodoListPage";

export default function Home() {
  const {
    inputValue,
    setInputValue,
    todoList,
    doneList,
    handleCreate,
    handleToggle,
  } = useTodoListPage();
  return (
    <>
      <InputBar
        value={inputValue}
        onChange={setInputValue}
        onSubmit={handleCreate}
      />
      <TodoList
        todoList={todoList}
        doneList={doneList}
        onToggle={handleToggle}
      />
    </>
  );
}
