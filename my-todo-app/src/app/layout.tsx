// src/app/layout.tsx
import type { Metadata } from "next";
import Header from "@/shared/components/Header";
import "../shared/style/globals.css";
import Button from "@/shared/components/Button";

export const metadata: Metadata = {
  title: "Todo List",
  description: "할 일 목록을 관리하는 To Do 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-slate-100 font-sans antialiased mx-auto py-0">
        <Header />
        <Button shape="circle" variant="default" icon="+" />
        <Button shape="circle" variant="primary" icon="+" />
        <Button shape="pill" variant="danger" icon="*">
          추가하기
        </Button>
        <Button shape="pill" variant="success" icon="✓">
          추가하기
        </Button>
      </body>
    </html>
  );
}
