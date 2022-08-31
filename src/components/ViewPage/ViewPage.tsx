import { ReactNode } from "react";
import { Footer } from "../Footer/Footer";

interface ViewPageProps {
  children: ReactNode;
}

export function ViewPage({ children }: ViewPageProps) {
  return (
    <main
      data-testid="view-page"
      className="flex w-full overflow-x-hidden overflow-y-hidden"
    >
      <div className="w-screen justify-center items-center">
        {children}
        <Footer />
      </div>
    </main>
  );
}
