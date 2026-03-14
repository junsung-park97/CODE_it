# My Todo App

해당 프로젝트는 코드잇 부트캠프 스프틴트 FE심화반 과제전형 프로젝트 입니다.


>
> 💡 **Pull request**에서 더 자세한 구현 과정을 보실 수 있습니다.
>


---

## 실행 방법

### 1. 패키지 설치

```bash
npm install
```

### 2. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 아래 변수를 설정합니다.

```env
NEXT_PUBLIC_BASE_URL=https://your-api-server.com
NEXT_PUBLIC_TENANT_ID=your-tenant-id
```

| 변수명 | 설명 |
|---|---|
| `NEXT_PUBLIC_BASE_URL` | API 서버의 기본 URL |
| `NEXT_PUBLIC_TENANT_ID` | 테넌트 식별자 (API 경로에 포함됨) |

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 으로 접속합니다.

### 4. 프로덕션 빌드 및 실행

```bash
npm run build
npm run start
```

---

## 사용 기술

| 분류 | 기술 | 버전 |
|---|---|---|
| 프레임워크 | Next.js (App Router) | 16.1.6 |
| UI 라이브러리 | React | 19.2.3 |
| 언어 | TypeScript | ^5 |
| 서버 상태 관리 | TanStack Query (React Query) | ^5 |
| HTTP 클라이언트 | Axios | ^1 |
| 스타일링 | Tailwind CSS | ^4 |

---

## 파일 구조

```
my-todo-app/
├── src/
│   ├── app/                        # Next.js App Router 라우트
│   │   ├── layout.tsx              # 루트 레이아웃 (Header, QueryProvider 포함)
│   │   ├── page.tsx                # 할 일 목록 페이지 (/)
│   │   ├── favicon.ico
│   │   └── items/
│   │       └── [itemId]/
│   │           └── page.tsx        # 할 일 상세 페이지 (/items/:itemId)
│   │
│   └── shared/                     # 공통 모듈
│       ├── api/                    # API 통신 레이어
│       │   ├── axiosInstance.ts    # Axios 인스턴스 및 인터셉터 설정
│       │   └── todoApi.ts          # Todo CRUD + 이미지 업로드 API 함수
│       │
│       ├── components/             # UI 컴포넌트
│       │   ├── Header.tsx          # 공통 헤더 (로고, 홈 링크)
│       │   ├── InputBar.tsx        # 할 일 텍스트 입력 바
│       │   ├── TodoList.tsx        # 진행 중 / 완료 목록 렌더링
│       │   ├── DetailActionButton.tsx  # 상세 페이지 수정완료·삭제 버튼
│       │   ├── QueryProvider.tsx   # TanStack Query 전역 Provider
│       │   └── atoms/              # 재사용 단위 컴포넌트
│       │       ├── Button.tsx          # 공통 버튼
│       │       ├── TodoItem.tsx        # 목록 페이지 할 일 아이템
│       │       ├── DetailTodoItem.tsx  # 상세 페이지 할 일 아이템 (이름 편집 가능)
│       │       ├── ImageUpload.tsx     # 이미지 업로드 UI
│       │       └── MemoInput.tsx       # 메모 텍스트 입력
│       │
│       ├── hooks/                  # 커스텀 훅
│       │   ├── useTodos.ts             # 전체 목록 조회 (useQuery)
│       │   ├── useTodoDetail.ts        # 단건 상세 조회 (useQuery)
│       │   ├── useCreateTodo.ts        # 할 일 생성 (useMutation)
│       │   ├── useUpdateTodo.ts        # 할 일 수정 (useMutation)
│       │   ├── useDeleteTodo.ts        # 할 일 삭제 (useMutation)
│       │   ├── useUploadImage.ts       # 이미지 업로드 (useMutation)
│       │   ├── useTodoListPage.ts      # 목록 페이지 통합 상태·액션 훅
│       │   └── uesTodoDetailPage.ts    # 상세 페이지 통합 상태·액션 훅
│       │
│       ├── icon/                   # SVG 아이콘 컴포넌트
│       │   ├── Check.tsx
│       │   ├── CheckboxEmptyIcon.tsx
│       │   ├── CheckboxFillIcon.tsx
│       │   ├── EditIcon.tsx
│       │   ├── PlusGrayIcon.tsx
│       │   ├── PlusIcon.tsx
│       │   └── XIcon.tsx
│       │
│       ├── style/
│       │   └── globals.css         # 전역 스타일 (Tailwind CSS 진입점)
│       │
│       └── types/
│           └── todo.ts             # ToDoItem, CreateTodoRequest, UpdateTodoRequest 타입
│
├── .env.local                      # 환경 변수 (git 제외)
├── next.config.ts                  # Next.js 설정 (React Compiler 활성화)
├── tsconfig.json                   # TypeScript 컴파일러 설정
├── postcss.config.mjs              # PostCSS / Tailwind CSS 설정
├── eslint.config.mjs               # ESLint 설정
└── package.json
```

---

## 주요 파일 설명

### `src/app/layout.tsx`
앱 전체를 감싸는 루트 레이아웃입니다. `QueryProvider`로 TanStack Query 캐시를 전역에 제공하고, 모든 페이지 상단에 `Header`를 고정합니다. 반응형 최대 너비(1200px)를 적용합니다.

### `src/app/page.tsx`
할 일 목록 페이지(`/`)입니다. `useTodoListPage` 훅으로 상태와 액션을 받아 `InputBar`, `TodoList` 컴포넌트에 전달하는 역할만 담당합니다.

### `src/app/items/[itemId]/page.tsx`
할 일 상세 페이지(`/items/:itemId`)입니다. URL 파라미터로 `itemId`를 받아 `useTodoDetailPage` 훅을 통해 이름·메모·이미지·완료 여부를 수정하거나 삭제할 수 있습니다.

### `src/shared/api/axiosInstance.ts`
Axios 인스턴스를 생성하고 `baseURL`을 `BASE_URL/TENANT_ID` 형태로 설정합니다. 응답 에러 인터셉터를 통해 API 오류 메시지를 콘솔에 출력합니다.

### `src/shared/api/todoApi.ts`
서버와 통신하는 순수 API 함수 모음입니다. 목록 조회(`getTodos`), 단건 조회(`getTodoDetail`), 생성(`createTodo`), 수정(`updataTodo`), 삭제(`deleteTodo`), 이미지 업로드(`uploadImage`) 총 6개의 함수를 제공합니다.

### `src/shared/hooks/useTodos.ts` / `useTodoDetail.ts`
TanStack Query의 `useQuery`를 래핑한 조회 훅입니다. 각각 `["todos"]`, `["todos", itemId]` 키로 캐시를 관리합니다.

### `src/shared/hooks/useCreateTodo.ts` / `useUpdateTodo.ts` / `useDeleteTodo.ts`
TanStack Query의 `useMutation`을 래핑한 변이 훅입니다. 성공 시 관련 쿼리 캐시를 자동으로 무효화(`invalidateQueries`)하여 UI가 최신 데이터를 반영하도록 합니다.

### `src/shared/hooks/useUploadImage.ts`
이미지 파일을 `multipart/form-data`로 서버에 업로드하는 훅입니다. 성공 시 반환된 URL을 상태에 저장해 미리보기에 사용합니다.

### `src/shared/hooks/useTodoListPage.ts`
목록 페이지에 필요한 모든 상태(입력값, 진행 중 목록, 완료 목록)와 액션(생성, 토글)을 하나의 훅으로 통합합니다. 페이지 컴포넌트의 비대함을 방지하기 위해 분리되었습니다.

### `src/shared/hooks/uesTodoDetailPage.ts`
상세 페이지에 필요한 상태(이름, 메모, 이미지 URL, 완료 여부)와 액션(이미지 업로드, 수정, 삭제)을 통합 관리합니다. 서버 데이터를 받으면 `useEffect`로 폼 상태를 초기화합니다.

### `src/shared/components/QueryProvider.tsx`
`QueryClient`를 `useState`로 생성하여 서버·클라이언트 간 상태 공유를 방지하고, `QueryClientProvider`로 앱 전체에 주입합니다.

### `src/shared/types/todo.ts`
앱 전반에서 사용하는 TypeScript 타입을 정의합니다.

| 타입 | 설명 |
|---|---|
| `ToDoItem` | 할 일 항목 (id, name, isCompleted, memo?, imageUrl?) |
| `CreateTodoRequest` | 생성 요청 body `{ name }` |
| `UpdateTodoRequest` | 수정 요청 body `{ name?, isCompleted?, memo?, imageUrl? }` |
