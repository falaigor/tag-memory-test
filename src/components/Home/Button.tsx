import { CaretRight } from "phosphor-react";
import { useI18n } from "react-simple-i18n";

interface ButtonProps {
  onClick: () => void;
}

export const Button = ({ onClick }: ButtonProps) => {
  const { t } = useI18n();

  return (
    <button
      data-testid="button"
      type="button"
      onClick={onClick}
      className="max-w-[150px] w-full flex p-4 drop-shadow-stroke rounded-2xl text-lg font-bold justify-center items-center bg-blue-600 text-zinc-100 hover:bg-blue-800 transition-all"
    >
      {t("home.form.button")} <CaretRight weight="bold" />
    </button>
  );
};
