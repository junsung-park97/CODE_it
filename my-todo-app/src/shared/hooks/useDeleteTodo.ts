// 삭제 API

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "../api/todoApi";

/**
 * 할 일을 삭제하는 훅입니다.
 * 삭제 성공 시 할 일 목록 캐시를 무효화하여 최신 목록을 가져옵니다.
 * @returns mutate - itemId(number)를 인자로 받아 삭제 API를 호출하는 함수
 */
export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: (_, itemId) => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      queryClient.removeQueries({ queryKey: ["todos", itemId] });
    },
  });
};
