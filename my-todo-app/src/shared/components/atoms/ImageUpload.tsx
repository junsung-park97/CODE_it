"use client";

import { useRef } from "react";
import Button from "@/shared/components/atoms/Button";
import PlusGrayIcon from "@/shared/icon/PlusGrayIcon";
import EditIcon from "@/shared/icon/EditIcon";

interface ImageUploaderProps {
  imageUrl?: string;
  onUpload: (file: File) => void;
}

/**
 * 이미지 업로드 컴포넌트입니다.
 * 이미지가 없으면 업로드 버튼을, 이미지가 있으면 미리보기와 수정 버튼을 표시합니다.
 * 파일 선택 시 파일명 영어 여부와 5MB 이하 크기를 검증합니다.
 * @param imageUrl - 업로드된 이미지 URL (없으면 빈 상태 표시)
 * @param onUpload - 파일을 인자로 받아 이미지를 업로드하는 함수
 */
const ImageUploader = ({ imageUrl, onUpload }: ImageUploaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 파일명 영어 여부 검증
    if (!/^[a-zA-Z0-9._-]+$/.test(file.name)) {
      alert("이미지 파일 이름은 영어로만 이루어져야 합니다.");
      return;
    }

    // 파일 크기 검증 (5MB 이하)
    if (file.size > 5 * 1024 * 1024) {
      alert("파일 크기는 5MB 이하여야 합니다.");
      return;
    }

    onUpload(file);
  };

  return (
    <div className="relative flex-1 min-h-[240px] rounded-xl border-2 border-dashed border-slate-300 bg-slate-100 flex items-center justify-center">
      {/* 숨겨진 파일 input */}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {imageUrl ? (
        <>
          <img
            src={imageUrl}
            alt="첨부 이미지"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute bottom-3 right-3">
            <Button
              shape="circle-lg"
              variant="dark"
              icon={<EditIcon />}
              onClick={() => inputRef.current?.click()}
            />
          </div>
        </>
      ) : (
        <>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="32" fill="#E2E8F0" />
            <path d="M20 44L30 30L37 39L42 33L50 44H20Z" fill="#CBD5E1" />
            <circle cx="26" cy="26" r="4" fill="#CBD5E1" />
          </svg>
          <div className="absolute bottom-3 right-3">
            <Button
              shape="circle-lg"
              variant="primary"
              icon={<PlusGrayIcon />}
              onClick={() => inputRef.current?.click()}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ImageUploader;
