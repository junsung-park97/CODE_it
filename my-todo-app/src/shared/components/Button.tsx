import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVar = "default" | "primary" | "danger" | "success";
type ButtonShape = "pill" | "circle";

interface ButtonPorps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVar;
  shape?: ButtonShape;
  icon?: React.ReactNode;
  chilren?: React.ReactNode;
}
const variantStyle: Record<ButtonVar, string> = {
  default: "bg-slate-100 text-slate-900 border-2 border-slate-900",
  primary: "bg-primary text-white",
  danger: "bg-rose text-white",
  success: "bg-lime text-slate-900",
};
const Button = ({
  variant = "default",
  shape = "pill",
  icon,
  children,
  className = "",
  ...props
}: ButtonPorps) => {
  const base =
    "flex items-center justify-center font-bold cursor-pointer transition-opacity hover:opacity-80 active:opacity-60";
  const shapeStyle =
    shape === "circle"
      ? "w-[2.5em] h-[2.5em] rounded-full"
      : "h-[3.5em] px-6 rounded-full gap-1";

  return (
    <button
      className={`${base} ${shapeStyle} ${variantStyle[variant]} ${className}`}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
