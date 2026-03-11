import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVar = "default" | "primary" | "danger" | "success" | "gray" | "dark";
type ButtonShape = "pill" | "circle" | "circle-lg";

interface ButtonPorps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVar;
  shape?: ButtonShape;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

//부모로부터 받은 variant별 색상별 스타일 정의
const variantStyle: Record<ButtonVar, string> = {
  default:
    "bg-slate-100 text-slate-900 border-2 border-slate-900 shadow-button",
  primary: "bg-primary text-white  border-2 border-slate-900",
  danger: "bg-rose text-white  border-2 border-slate-900",
  success: "bg-lime text-slate-900  border-2 border-slate-900",
  gray: "bg-slate-200",
  dark: "bg-slate-800/50 border-2 border-slate-800 text-white",
};

// 부모로 부터 shape을 받아 모양별 스타일 정의
const shapeStyle: Record<ButtonShape, string> = {
  pill: "w-[10.2em] h-[3.2em] rounded-medium gap-1 shadow-pill",
  circle: "w-[3.5em] h-[3.4em] rounded-medium shadow-circle",
  "circle-lg": "w-[4em] h-[4em] rounded-full",
};

const Button = ({
  variant = "default",
  shape = "pill",
  icon,
  children,
  className = "",
  ...props
}: ButtonPorps) => {
  // 베이스 스타일
  const base =
    "flex items-center justify-center font-bold cursor-pointer transition-opacity hover:opacity-80 active:opacity-60";

  return (
    <button
      className={`${base} ${shapeStyle[shape]} ${variantStyle[variant]} ${className}`}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
