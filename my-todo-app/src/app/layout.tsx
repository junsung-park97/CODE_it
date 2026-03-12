// src/app/layout.tsx
import type { Metadata } from "next";
import Header from "@/shared/components/Header";
import "@/shared/style/globals.css";
import InputBar from "@/shared/components/InputBar";
import QueryProvider from "@/shared/components/QueryProvider";

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
      <body className="">
        <QueryProvider>
          <Header />
          <div className="wrapper px-4 md:px-6 lg:w-[1200px] mx-auto my-0">
            {children}
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
