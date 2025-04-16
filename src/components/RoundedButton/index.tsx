import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function RoundedButton({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`shrink-0 rounded-xl bg-[#eebbc3] px-4 py-2 text-black hover:bg-[#e89ca5] disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
