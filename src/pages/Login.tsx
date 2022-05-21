import { useNavigate } from "react-router-dom";
import { GithubLogo } from "phosphor-react";
import { Button } from "../components/Button/Button";

export function Login() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/ranking");
  }

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
          <Button label="Github" onClick={handleClick} icon={<GithubLogo />} />
        </div>
      </div>
    </div>
  );
}
