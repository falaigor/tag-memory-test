import { ReactNode } from "react";

interface AlertsProps {
  alertTitle: string;
  type: "success" | "warning" | "error";
  children: ReactNode;
}

export function Alerts({ alertTitle, type, children }: AlertsProps) {
  function AlertType() {
    const AlertType = {
      success: (
        <div className="bg-green-500 inline-block rounded-lg p-1 mr-1"></div>
      ),
      warning: (
        <div className="bg-yellow-500 inline-block rounded-lg p-1 mr-1"></div>
      ),
      error: (
        <div className="bg-red-500 inline-block rounded-lg p-1 mr-1"></div>
      ),
    };

    return AlertType[type] || AlertType["success"];
  }

  return (
    <div data-testid="alert" className="mt-8">
      <div className="border-2 border-zinc-900 bg-zinc-100 py-1 px-4 flex flex-row rounded-lg items-center">
        {AlertType()}
        <b className="p-1 flex items-center">{alertTitle}</b>
        <div className="p-1">{children}</div>
      </div>
    </div>
  );
}
