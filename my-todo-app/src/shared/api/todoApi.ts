import { CreateTodoRequest, ToDoItem, UpdateTodoRequest } from "../types/todo";
import axiosInstance from "./axiosInstance";
/**
 * 전체 목록 조회 모듈
 * @returns todo 배열 
 */
export const getTodos = async (): Promise<ToDoItem[]> => {
  const { data } = await axiosInstance.get("/items");
  return data;
};

/**
 * 상세 todo 조회 모듈
 * @param itemId - 조회 할 todo ID
 * @returns - 할 일 상세 정보
 */
export const getTodoDetail = async (itemId: number): Promise<ToDoItem> => {
  const { data } = await axiosInstance.get(`/items/${itemId}`);
  return data;
};

/**
 * todo 생성 모듈
 * @param body - 생성 할 todo { name }
 * @returns 생성된 todo
 */
export const createTodo = async (
  body: CreateTodoRequest,
): Promise<ToDoItem> => {
  const { data } = await axiosInstance.post("/items", body);
  return data;
};

/**
 * todo 수정 모듈
 * @param body 수정할 데이터 { name?, isCompleted?, memo?, imageUrl? }
 * @param itemsId 수정할 to의 id
 * @returns 수정된 할 일
 */
export const updataTodo = async (
  body: UpdateTodoRequest,
  itemsId: number,
): Promise<ToDoItem> => {
  const { data } = await axiosInstance.patch(`/items/${itemsId}`, body);
  return data;
};

/**
 * todo 삭제 모듈
 * @param itemsId 삭제할 todo의 id
 * @returns void
 */
export const deleteTodo = async (itemsId: number): Promise<void> => {
  await axiosInstance.delete(`/items/${itemsId}`);
  return;
};

/**
 * images 업로드 모듈
 * @param file 업로드할 이미지 사진 (5MB 이하)
 * @returns 업로드된 이미지 URL
 */
export const uploadImage = async (file: File): Promise<{ url: string }> => {
  const formData = new FormData();
  formData.append("image", file);
  const { data } = await axiosInstance.post("/images/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};
