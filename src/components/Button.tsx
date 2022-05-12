import { CaretRight } from "phosphor-react";

interface ButtonProps {
  onClick: () => void;
}

export const Button = ({ onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="max-w-[150px] w-full flex p-4 border-2 border-zinc-900 drop-shadow-stroke rounded-2xl text-lg font-bold justify-center items-center bg-blue-800 text-zinc-100 hover:bg-blue-600 transition-all"
    >
      Guess <CaretRight weight="bold" />
    </button>
  );
};
