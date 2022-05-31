import { Link } from "react-router-dom";

export function PageNotFound() {
  return (
    <div
      data-testid="login-page"
      className="w-screen h-screen flex items-center justify-center mobile:p-4 "
    >
      <div className="max-w-xs w-full flex flex-col items-center">
        <div className="flex flex-col p-4 my-4 rounded-2xl justify-center bg-zinc-100 border-2 border-zinc-900 drop-shadow-stroke items-center">
          <h1 className="text-9xl font-montserrat">404</h1>
          <p className="text-center my-4">Page not found.</p>
        </div>

        <Link to="" onClick={() => history.back()} className="underline">
          Go to back
        </Link>
      </div>
    </div>
  );
}
