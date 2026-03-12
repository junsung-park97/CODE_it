// 생성 API

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "../api/todoApi";

/**
 * 할 일을 새로 생성하는 API 요청을 관리합니다.
 * 생성 성공 시 목록 캐시를 무효화하여 화면이 자동으로 갱신되도록 합니다.
 * @returns mutate - {name : string}을 인자로 받아 생성 API를 호출합니다.
 */
export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
