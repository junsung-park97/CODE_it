// todo 아이템 interface
export interface ToDoItem {
  id: string;
  name: string;
  isCompleted: boolean;
  memo?: string;
  imagUrl?: string;
}

// item 생성 요청 interface
export interface CreateTodoRequest {
  name: string;
}

// item 수정 요청 interface
export interface UpdataTodoRequest {
  name?: string;
  isCompleted?: boolean;
  memo?: string;
  imagUrl?: string;
}
