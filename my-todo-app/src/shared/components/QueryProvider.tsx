"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

/**
 * TanStack Query가
 * 동작하기 위해 전역 캐시 저장소를 앱 전체에 제공하는 컴포넌트
 * 
 * useState로 QueryClient를 생성하는 이유:
 * 컴포넌트 외부에서 생성하면 서버/클라이언트 간 상태가 공유되어
 * 여러 사용자의 데이터가 섞일 수 있기 때문
 */
const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
export default QueryProvider;
