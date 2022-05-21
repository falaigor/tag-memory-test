import { ReactNode } from "react";

interface ButtonProps {
  label: string;
  icon?: ReactNode;
  color?: string;
  onClick: () => void;
}

export function Button({ label, icon, color = "zinc", onClick }: ButtonProps) {
  return (
    <button
      data-testid="button"
      type="button"
      onClick={onClick}
      className={`w-full font-montserrat flex p-4 my-2 border-2 border-zinc-900 drop-shadow-stroke rounded-2xl text-lg font-bold justify-center items-center bg-${color}-800 text-zinc-100 hover:bg-${color}-600 transition-all`}
    >
      {icon && (
        <div data-testid="button-icon" className="mr-1 text-3xl">
          {icon}
        </div>
      )}
      {label}
    </button>
  );
}
