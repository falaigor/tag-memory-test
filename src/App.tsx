import { Button } from "./components/Button";
import { Countdown } from "./components/Contdown";
import { Input } from "./components/Input";

export function App() {
  return (
    <div className="w-screen flex items-center justify-center">
      <div className="max-w-3xl w-full flex flex-col">
        <div>
          <h1 className="pt-4 pb-2 text-5xl font-extrabold font-montserrat text-zinc-900">
            Tag memory test
          </h1>
          <h2 className="pb-2 text-xl">How many HTML tags can you remember?</h2>
        </div>

        <div className="flex p-4 my-4 rounded-2xl justify-between bg-zinc-100 border-2 border-zinc-900 drop-shadow-stroke items-center">
          <p className="text-3xl font-montserrat">Time Left</p>

          <Countdown />
        </div>

        <div className="flex flex-row w-full gap-2">
          <Input />
          <Button />
        </div>

        <div className="flex p-4 mt-4 rounded-t-2xl justify-between bg-zinc-100 border-2 border-zinc-900 items-center">
          <p className="text-2xl font-montserrat">Time Left</p>
        </div>
        <div className="flex flex-col p-4 rounded-b-2xl justify-between bg-zinc-100 border-t-0 border-b-2 border-x-2 border-zinc-900">
          <li className="list-decimal text-lg">Time Left</li>
          <li className="list-decimal text-lg">Time Left</li>
          <li className="list-decimal text-lg">Time Left</li>
          <li className="list-decimal text-lg">Time Left</li>
          <li className="list-decimal text-lg">Time Left</li>
        </div>
      </div>
    </div>
  );
}
