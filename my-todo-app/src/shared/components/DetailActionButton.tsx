// src/shared/components/atoms/DetailActionButtons.tsx
"use client";
import Button from "@/shared/components/atoms/Button";
import CheckIcon from "@/shared/components/icon/Check";
import XIcon from "@/shared/components/icon/XIcon";

interface DetailActionButtonsProps {
  todoId: string;
}

const DetailActionButtons = ({ todoId }: DetailActionButtonsProps) => {
  const handleUpdate = () => {
    // TODO: API 연동 시 수정 로직 구현 예정
    console.log("수정버튼 클릭");
  };

  const handleDelete = () => {
    // TODO: API 연동 시 삭제 로직 구현 예정
    console.log("삭제버튼 클릭");
  };

  return (
    <div className="flex justify-end gap-3">
      <Button
        shape="pill"
        variant="success"
        icon={<CheckIcon />}
        onClick={handleUpdate}
      >
        수정 완료
      </Button>
      <Button
        shape="pill"
        variant="danger"
        icon={<XIcon />}
        onClick={handleDelete}
      >
        삭제하기
      </Button>
    </div>
  );
};

export default DetailActionButtons;
