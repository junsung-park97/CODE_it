// todo 아이템 interface
export interface ToDoItem {
  id: number;
  name: string;
  isCompleted: boolean;
  memo?: string;
  imageUrl?: string;
}

// item 생성 요청 interface
export interface CreateTodoRequest {
  name: string;
}

// item 수정 요청 interface
export interface UpdateTodoRequest {
  name?: string;
  isCompleted?: boolean;
  memo?: string;
  imageUrl?: string;
}
