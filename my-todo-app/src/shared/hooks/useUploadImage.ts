// 이미지 업로드 API

import { useMutation } from "@tanstack/react-query";
import { uploadImage } from "../api/todoApi";

/**
 * 이미지를 업로드하는 훅입니다.
 * 업로드 성공 시 서버에서 반환된 이미지 URL을 사용할 수 있습니다.
 * @returns mutate - File을 인자로 받아 이미지 업로드 API를 호출하는 함수
 */
export const useUploadImage = () => {
  return useMutation({
    mutationFn: uploadImage,
  });
};
