// src/app/layout.tsx
import type { Metadata } from "next";
import Header from "@/shared/components/Header";
import "../shared/style/globals.css";

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
      </body>
    </html>
  );
}
