// 단건 조회 API

import { useQuery } from "@tanstack/react-query";
import { getTodoDetail } from "../api/todoApi";

/**
 * 특정 할 일의 상세 정보를 조회하는 훅입니다.
 * 컴포넌트 마운트 시 자동으로 API를 호출하며 결과를 캐시에 저장합니다.
 * @param itemId - 조회할 할 일의 ID
 * @returns data - 조회된 할 일 상세 정보 (ToDoItem)
 */
export const useTodoDetail = (itemId: number) => {
  return useQuery({
    queryKey: ["todos", itemId],
    queryFn: () => getTodoDetail(itemId),
  });
};
