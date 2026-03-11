// src/app/layout.tsx
import type { Metadata } from "next";
import Header from "@/shared/components/Header";
import "../shared/style/globals.css";
import Button from "@/shared/components/Button";
import PlusIcon from "@/shared/components/icon/PlusIcon";
import PlusGrayIcon from "@/shared/components/icon/PlusGrayIcon";
import XIcon from "@/shared/components/icon/XIcon";

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
        <div className=" px-12">
          <Button shape="circle-lg" variant="dark" icon={<PlusIcon />} />
          <Button shape="circle" variant="primary" icon={<PlusIcon />} />
          <Button shape="pill" variant="danger" icon={<XIcon />}>
            추가하기
          </Button>
          <Button shape="pill" variant="success" icon={<PlusIcon />}>
            추가하기
          </Button>
        </div>
      </body>
    </html>
  );
}
