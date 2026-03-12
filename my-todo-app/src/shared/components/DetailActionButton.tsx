// src/shared/components/atoms/DetailActionButtons.tsx
"use client";
import Button from "@/shared/components/atoms/Button";
import CheckIcon from "@/shared/components/icon/Check";
import XIcon from "@/shared/components/icon/XIcon";

interface DetailActionButtonsProps {
  onUpdate: () => void;
  onDelete: () => void;
}

const DetailActionButtons = ({
  onUpdate,
  onDelete,
}: DetailActionButtonsProps) => {
  return (
    <div className="flex justify-end gap-3">
      <Button
        shape="pill"
        variant="success"
        icon={<CheckIcon />}
        onClick={onUpdate}
      >
        수정 완료
      </Button>
      <Button shape="pill" variant="danger" icon={<XIcon />} onClick={onDelete}>
        삭제하기
      </Button>
    </div>
  );
};

export default DetailActionButtons;
