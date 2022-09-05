import { ReactNode } from "react";
import { Footer } from "../Footer/Footer";

interface ViewPageProps {
  children: ReactNode;
}

export function ViewPage({ children }: ViewPageProps) {
  const userLang = localStorage.getItem("@tagMemoryTest:lang");

  function selectLang(lang: string) {
    localStorage.setItem("@tagMemoryTest:lang", lang);
  }

  return (
    <main
      data-testid="view-page"
      className="flex w-full overflow-x-hidden overflow-y-hidden"
    >
      <div className="w-screen justify-center items-center">
        <div
          data-testid="home-page"
          className="flex items-center justify-center mobile:p-4"
        >
          <div className="max-w-3xl w-full flex ">
            <a
              href="/"
              type="button"
              data-testid="button-translate"
              onClick={() => selectLang("pt-BR")}
              className={`${
                userLang === "pt-BR"
                  ? "bg-yellow-500 hover:bg-yellow-600 text-zinc-900 outline-2 border-4 drop-shadow-stroke"
                  : "bg-zinc-200 text-zinc-900 border-0"
              } flex p-2 border-zinc-900 rounded-2xl text-sm font-bold justify-center items-center transition-all`}
            >
              <span className="mx-2 font-montserrat">PT</span>
            </a>

            <a
              href="/"
              type="button"
              data-testid="button-translate"
              onClick={() => selectLang("en-US")}
              className={`${
                userLang === "en-US"
                  ? "bg-yellow-500 hover:bg-yellow-600 text-zinc-900 outline-2 border-4 drop-shadow-stroke"
                  : "bg-zinc-200 text-zinc-900 border-0"
              } flex p-2 border-zinc-900 rounded-2xl text-sm font-bold justify-center items-center transition-all`}
            >
              <span className="mx-2 font-montserrat">EN</span>
            </a>
          </div>
        </div>

        {children}
        <Footer />
      </div>
    </main>
  );
}
