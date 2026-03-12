// 목록 조회 API
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../api/todoApi";

/**
 * 할 일 전체 목록을 조회하는 훅입니다.
 * 컴포넌트 마운트 시 자동으로 API를 호출하며 결과를 캐시에 저장합니다.
 * @returns data - 조회된 할 일 전체 목록 (ToDoItem[])
 */
export const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
};
