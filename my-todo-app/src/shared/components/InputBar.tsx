import Button from "@/shared/components/atoms/Button";
import PlusIcon from "@/shared/components/icon/PlusIcon";

const InputBar = () => {
  return (
    <div className="flex gap-4">
      <input
        className="flex-1 border-2 border-slate-900 rounded-medium shadow-pill px-6"
        placeholder="할 일을 추가해주세요."
      ></input>
      {/* 데스크탑, 태블릿 해상도 */}
      <Button
        shape="pill"
        variant="primary"
        icon={<PlusIcon />}
        className="hidden md:flex"
      >
        추가하기
      </Button>
      {/* 모바일 해상도 */}
      <Button
        shape="circle"
        variant="primary"
        icon={<PlusIcon />}
        className="md:hidden"
      />
    </div>
  );
};
export default InputBar;
