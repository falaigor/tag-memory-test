import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";

export function App() {
  return (
    <div className="w-screen flex items-center justify-center">
      <div className="max-w-3xl w-full flex flex-col">
        <div>
          <h1 className="pt-4 pb-2 text-5xl font-extrabold font-montserrat text-zinc-900">
            Tag memory test
          </h1>
          <h2 className="pb-4 text-lg">How many HTML tags can you remember?</h2>
        </div>

        <div className="flex flex-row w-full gap-2">
          <Input />
          <Button />
        </div>
      </div>
    </div>
  );
}
