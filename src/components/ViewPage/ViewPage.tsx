import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Timer, Medal, SignIn } from "phosphor-react";

interface ViewPageProps {
  children: ReactNode;
}

export function ViewPage({ children }: ViewPageProps) {
  const { pathname } = useLocation();

  return (
    <main data-testid="view-page" className="flex w-screen">
      <aside className="w-16 h-screen flex items-center bg-zinc-100 shadow-lg shadow-zinc-400">
        <nav>
          <ul>
            <Link to="/">
              <li
                className={`${
                  pathname === "/" && "active-nav"
                } flex w-16 justify-center relative items-center text-3xl p-2 h-16`}
              >
                <Timer weight="bold" />
              </li>
            </Link>

            <Link to="/ranking">
              <li
                className={`${
                  pathname === "/ranking" && "active-nav"
                } flex w-16 justify-center relative items-center text-3xl p-2 h-16`}
              >
                <Medal weight="bold" />
              </li>
            </Link>

            <Link to="/login">
              <li className="flex w-16 justify-center relative items-center text-3xl p-2 h-16">
                <SignIn weight="bold" />
              </li>
            </Link>
          </ul>
        </nav>
      </aside>
      <div className="w-screen justify-center items-center">{children}</div>
    </main>
  );
}
