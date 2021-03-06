import { ReactNode } from "react";

export const Tooltip = ({
  tooltipMessage,
  onClick,
  children,
}: {
  tooltipMessage: string;
  onClick?: () => void;
  children: ReactNode;
}) => {
  return (
    <div
      data-testid="tooltip"
      className="relative flex flex-col items-center group"
      onClick={onClick}
    >
      {children}
      <div className="absolute -top-5 flex flex-col items-center hidden mb-6 group-hover:flex">
        <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-gray-600 shadow-lg rounded-md">
          {tooltipMessage}
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-600"></div>
      </div>
    </div>
  );
};
