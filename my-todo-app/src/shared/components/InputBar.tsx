import Button from "@/shared/components/atoms/Button";
import PlusIcon from "@/shared/components/icon/PlusIcon";
import React from "react";

interface InputBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}
const InputBar = ({ value, onChange, onSubmit }: InputBarProps) => {
  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="flex gap-4">
      <input
        className="flex-1 border-2 border-slate-900 rounded-medium shadow-pill px-6"
        placeholder="할 일을 추가해주세요."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeydown}
      ></input>
      {/* 데스크탑, 태블릿 해상도 */}
      <Button
        shape="pill"
        variant="primary"
        icon={<PlusIcon />}
        className="hidden md:flex"
        onClick={onSubmit}
      >
        추가하기
      </Button>
      {/* 모바일 해상도 */}
      <Button
        shape="circle"
        variant="primary"
        icon={<PlusIcon />}
        className="md:hidden"
        onClick={onSubmit}
      />
    </div>
  );
};
export default InputBar;
