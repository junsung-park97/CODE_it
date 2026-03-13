// src/shared/components/TodoList.tsx
"use client";

import TodoItem from "@/shared/components/atoms/TodoItem";
import { ToDoItem } from "@/shared/types/todo";

interface TodoListProps {
  todoList: ToDoItem[];
  doneList: ToDoItem[];
  onToggle: (id: number, isCompleted: boolean) => void;
}

const TodoList = ({ todoList, doneList, onToggle }: TodoListProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* TO DO 섹션 */}
      <div className="flex-1 flex flex-col gap-4">
        <span className="bg-lime text-green-700 font-bold px-4 py-1 rounded-full w-fit">
          TO DO
        </span>
        <ul className="flex flex-col gap-3">
          {todoList.map((todo) => (
            <li key={todo.id}>
              <TodoItem
                todo={todo}
                onToggle={() => onToggle(todo.id, todo.isCompleted)}
              />
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
          {doneList.map((todo) => (
            <li key={todo.id}>
              <TodoItem
                todo={todo}
                onToggle={() => {
                  onToggle(todo.id, todo.isCompleted);
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
