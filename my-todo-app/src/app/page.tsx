// src/app/page.tsx - 목록 페이지
import InputBar from "@/shared/components/InputBar";
import TodoList from "@/shared/components/TodoList";

export default function Home() {
  return (
    <>
      <InputBar />
      <TodoList />
    </>
  );
}
