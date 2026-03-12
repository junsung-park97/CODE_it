// 수정 API

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updataTodo } from "@/shared/api/todoApi";
import type { UpdateTodoRequest } from "@/shared/types/todo";

/**
 * 할 일을 수정하는 훅입니다.
 * 수정 성공 시 전체 목록 캐시와 해당 단건 캐시를 무효화하여 최신 데이터를 가져옵니다.
 * @returns mutate - { itemId: number, body: UpdateTodoRequest }를 인자로 받아 수정 API를 호출하는 함수
 */
export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      body,
      itemId,
    }: {
      itemId: number;
      body: UpdateTodoRequest;
    }) => updataTodo(body, itemId),
    onSuccess: (_, { itemId }) => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      queryClient.invalidateQueries({ queryKey: ["todos", itemId] });
    },
  });
};
