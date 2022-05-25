import { useAuth } from "../contexts/auth";
import { GithubLogo, GoogleLogo } from "phosphor-react";

export function Login() {
  const { signInGithubUrl } = useAuth();

  return (
    <div
      data-testid="login-page"
      className="w-screen h-screen flex items-center justify-center mobile:p-4 "
    >
      <div className="max-w-xs w-full flex ">
        <div className="flex flex-col p-4 my-4 rounded-2xl justify-center bg-zinc-100 border-2 border-zinc-900 drop-shadow-stroke items-center">
          <h1 className="text-4xl font-montserrat">Login</h1>
          <p className="text-center my-4">
            You don’t think you should login first and behave like human not
            robot.
          </p>

          <a
            data-testid="button-github"
            type="button"
            href={signInGithubUrl}
            className="w-full font-montserrat flex p-4 my-2 border-2 border-zinc-900 drop-shadow-stroke rounded-2xl text-lg font-bold justify-center items-center bg-zinc-800 text-zinc-100 hover:bg-zinc-600 transition-all"
          >
            <div data-testid="button-icon" className="mr-1 text-3xl">
              <GithubLogo />
            </div>
            Github
          </a>

          <a
            data-testid="button-google"
            type="button"
            href={signInGithubUrl}
            className="w-full font-montserrat flex p-4 my-2 border-2 border-zinc-900 drop-shadow-stroke rounded-2xl text-lg font-bold justify-center items-center bg-red-800 text-zinc-100 hover:bg-red-600 transition-all"
          >
            <div data-testid="button-icon" className="mr-1 text-3xl">
              <GoogleLogo />
            </div>
            Google
          </a>
        </div>
      </div>
    </div>
  );
}
