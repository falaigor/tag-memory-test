import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Timer, Medal, SignIn, SignOut } from "phosphor-react";

import { useAuth } from "../../contexts/auth";
import { Footer } from "../Footer/Footer";
import { Tooltip } from "../Tooltip";

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
      <aside className="w-12 md:w-16 h-screen relative md:fixed flex items-center shadow-lg shadow-zinc-400 bg-zinc-100">
        <nav>
          <ul>
            <Tooltip tooltipMessage="Home">
              <Link data-testid="home-link" to="/">
                <li
                  className={`${
                    pathname === "/" && "active-nav"
                  } flex w-12 md:w-16 justify-center relative items-center text-3xl p-2 h-16`}
                >
                  <Timer weight="bold" />
                </li>
              </Link>
            </Tooltip>

            <Tooltip tooltipMessage="Ranking">
              <Link data-testid="ranking-link" to="/ranking">
                <li
                  className={`${
                    pathname === "/ranking" && "active-nav"
                  } flex w-12 md:w-16 justify-center relative items-center text-3xl p-2 h-16`}
                >
                  <Medal weight="bold" />
                </li>
              </Link>
            </Tooltip>

            {isUserLogger ? (
              <Tooltip tooltipMessage="Logout">
                <Link data-testid="logout-link" to="" onClick={signOut}>
                  <li className="flex w-12 md:w-16 justify-center relative items-center text-3xl p-2 h-16">
                    <SignOut weight="bold" />
                  </li>
                </Link>
              </Tooltip>
            ) : (
              <Tooltip tooltipMessage="Login">
                <Link data-testid="login-link" to="/login">
                  <li className="flex w-12 md:w-16 justify-center relative items-center text-3xl p-2 h-16">
                    <SignIn weight="bold" />
                  </li>
                </Link>
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
