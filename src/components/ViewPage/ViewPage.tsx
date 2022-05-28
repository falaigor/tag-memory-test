import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Timer, Medal, SignIn, SignOut } from "phosphor-react";

import { useAuth } from "../../contexts/auth";
import { Footer } from "../Footer/Footer";
import { Tooltip } from "../Tooltip";
import { AppRoute } from "../../routes/routes";

interface ViewPageProps {
  children: ReactNode;
}

export function ViewPage({ children }: ViewPageProps) {
  const { isUserLogger, signOut } = useAuth();
  const { pathname } = useLocation();

  return (
    <main
      data-testid="view-page"
      className="flex w-full overflow-x-hidden overflow-y-hidden"
    >
      <aside className="w-screen sm:w-16 sm:h-screen bottom-0 sm:left-0 z-40 fixed flex items-center shadow-lg shadow-zinc-400 bg-zinc-100">
        <nav>
          <ul className="w-screen sm:w-16 flex sm:flex-col justify-center item-center">
            <Tooltip tooltipMessage="Home">
              <a data-testid="home-link" href={AppRoute.Home}>
                <li
                  className={`${
                    pathname === AppRoute.Home && "active-nav"
                  } flex w-16 justify-center relative items-center text-3xl p-2 h-16`}
                >
                  <Timer weight="bold" />
                </li>
              </a>
            </Tooltip>

            <Tooltip tooltipMessage="Ranking">
              <a data-testid="ranking-link" href={AppRoute.Ranking}>
                <li
                  className={`${
                    pathname === AppRoute.Ranking && "active-nav"
                  } flex w-16 justify-center relative items-center text-3xl p-2 h-16`}
                >
                  <Medal weight="bold" />
                </li>
              </a>
            </Tooltip>

            {isUserLogger ? (
              <Tooltip tooltipMessage="Logout">
                <Link data-testid="logout-link" to="" onClick={signOut}>
                  <li className="flex w-16 justify-center relative items-center text-3xl p-2 h-16">
                    <SignOut weight="bold" />
                  </li>
                </Link>
              </Tooltip>
            ) : (
              <Tooltip tooltipMessage="Login">
                <a data-testid="login-link" href={AppRoute.Login}>
                  <li className="flex w-16 justify-center relative items-center text-3xl p-2 h-16">
                    <SignIn weight="bold" />
                  </li>
                </a>
              </Tooltip>
            )}
          </ul>
        </nav>
      </aside>
      <div className="w-screen justify-center items-center">
        {children}
        <Footer />
      </div>
    </main>
  );
}
