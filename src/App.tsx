import { Medal, SignIn, SignOut, Timer } from "phosphor-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Tooltip } from "./components/Tooltip";
import { useAuth } from "./contexts/auth";
import { AppRoute } from "./routes/routes";

import { AuthProvider } from "./contexts/auth";
import { ChallengeProvider } from "./contexts/challenge";

export default function App() {
  const { isUserLogger, signOut } = useAuth();
  const { pathname } = useLocation();

  return (
    <AuthProvider>
      <ChallengeProvider>
        <main
          data-testid="view-page"
          className="flex w-full overflow-x-hidden overflow-y-hidden"
        >
          <aside className="w-screen sm:w-16 sm:h-screen bottom-0 sm:left-0 z-40 fixed flex items-center shadow-lg shadow-zinc-400 bg-zinc-100">
            <nav>
              <ul className="w-screen sm:w-16 flex sm:flex-col justify-center item-center">
                <Tooltip tooltipMessage="Home">
                  <Link
                    data-testid="home-link"
                    to={AppRoute.Home}
                    reloadDocument
                  >
                    <li
                      className={`${pathname === AppRoute.Home &&
                        "active-nav"} flex w-16 justify-center relative items-center text-3xl p-2 h-16`}
                    >
                      <Timer weight="bold" />
                    </li>
                  </Link>
                </Tooltip>

                <Tooltip tooltipMessage="Ranking">
                  <Link
                    data-testid="ranking-link"
                    to={AppRoute.Ranking}
                    reloadDocument
                  >
                    <li
                      className={`${pathname === AppRoute.Ranking &&
                        "active-nav"} flex w-16 justify-center relative items-center text-3xl p-2 h-16`}
                    >
                      <Medal weight="bold" />
                    </li>
                  </Link>
                </Tooltip>

                {isUserLogger ? (
                  <Tooltip tooltipMessage="Logout">
                    <Link
                      data-testid="logout-link"
                      to=""
                      onClick={() => signOut}
                      reloadDocument
                    >
                      <li className="flex w-16 justify-center relative items-center text-3xl p-2 h-16">
                        <SignOut weight="bold" />
                      </li>
                    </Link>
                  </Tooltip>
                ) : (
                  <Tooltip tooltipMessage="Login">
                    <Link
                      data-testid="login-link"
                      to={AppRoute.Login}
                      reloadDocument
                    >
                      <li className="flex w-16 justify-center relative items-center text-3xl p-2 h-16">
                        <SignIn weight="bold" />
                      </li>
                    </Link>
                  </Tooltip>
                )}
              </ul>
            </nav>
          </aside>
          <div className="w-screen justify-center items-center">
            <Outlet />
            <Footer />
          </div>
        </main>
      </ChallengeProvider>
    </AuthProvider>
  );
}
