// src/shared/components/TodoList.tsx
"use client";

import TodoItem from "@/shared/components/atoms/TodoItem";
import { ToDoItem } from "@/shared/types/todo";

// 임시 더미 데이터
const DUMMY_TODOS: ToDoItem[] = [
  { id: "1", title: "비타민 챙겨 먹기", isCompleted: false },
  { id: "2", title: "맥주 마시기", isCompleted: false },
  { id: "3", title: "운동하기", isCompleted: false },
  { id: "4", title: "은행 다녀오기", isCompleted: true },
  { id: "5", title: "비타민 챙겨 먹기", isCompleted: true },
];

const TodoList = () => {
  // isCompleted 필터링
  const todos = DUMMY_TODOS.filter((todo) => !todo.isCompleted);
  const dones = DUMMY_TODOS.filter((todo) => todo.isCompleted);

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* TO DO 섹션 */}
      <div className="flex-1 flex flex-col gap-4">
        <span className="bg-lime text-green-700 font-bold px-4 py-1 rounded-full w-fit">
          TO DO
        </span>
        <ul className="flex flex-col gap-3">
          {todos.map((todo) => (
            <li key={todo.id}>
              <TodoItem todo={todo} onToggle={() => {}} />
            </li>
          ))}
        </ul>
      </div>

      {/* DONE 섹션 */}
      <div className="flex-1 flex flex-col gap-4">
        <span className="bg-green-700 text-lime font-bold px-4 py-1 rounded-full w-fit">
          DONE
        </span>
        <ul className="flex flex-col gap-3">
          {dones.map((todo) => (
            <li key={todo.id}>
              <TodoItem todo={todo} onToggle={() => {}} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
