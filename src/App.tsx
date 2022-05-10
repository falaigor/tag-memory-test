import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";

export function App() {
  return (
    <div className="w-screen flex items-center justify-center">
      <div className="max-w-3xl w-full flex flex-col">
        <div>
          <h1 className="text-5xl font-extrabold">Tag memory test</h1>
          <h2>How many HTML tags can you remember?</h2>
        </div>

        <div className="flex flex-row w-full gap-2">
          <Input />
          <Button />
        </div>
      </div>
    </div>
  );
}
