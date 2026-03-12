// src/shared/components/atoms/ImageUploader.tsx
"use client";
import Button from "@/shared/components/atoms/Button";
import PlusGrayIcon from "@/shared/components/icon/PlusGrayIcon";
import EditIcon from "@/shared/components/icon/EditIcon";

interface ImageUploaderProps {
  imageUrl?: string;
}

const ImageUploader = ({ imageUrl }: ImageUploaderProps) => {
  return (
    <div className="relative flex-1 min-h-[240px] rounded-xl border-2 border-dashed border-slate-300 bg-slate-100 flex items-center justify-center">
      {imageUrl ? (
        <>
          <img
            src={imageUrl}
            alt="첨부 이미지"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute bottom-3 right-3">
            <Button shape="circle-lg" variant="dark" icon={<EditIcon />} />
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
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ImageUploader;
