import { useState } from "react";
import { List } from "./components/List";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Countdown } from "./components/Countdown";

import { tags } from "./tags";
import { CaretRight } from "phosphor-react";

export function App() {
  const [guesstedTags, setGuesstedTags] = useState([]);
  const [value, setValue] = useState("");
  const [start, setStart] = useState(false);

  function checkGuesstedTags(value) {
    tags.filter((tag) => {
      if (tag === value) {
        setGuesstedTags([...guesstedTags, value]);
        setValue("");
      }
    });
  }

  function handleClick() {
    setStart(true);
    checkGuesstedTags(value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleClick();
    }
  }

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

          <Countdown startCountdown={start} />
        </div>

        <div className="flex flex-row w-full gap-2">
          <input
            type="text"
            placeholder="Here is example text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={handleKeyDown}
            className="p-4 w-full rounded-2xl border-2 border-zinc-900 drop-shadow-stroke"
          />
          <button
            type="button"
            onClick={() => handleClick()}
            className="max-w-[150px] w-full flex p-4 border-2 border-zinc-900 drop-shadow-stroke rounded-2xl text-lg font-bold justify-center items-center bg-blue-800 text-zinc-100 hover:bg-blue-600 transition-all"
          >
            Guess <CaretRight weight="bold" />
          </button>
        </div>

        <List guesstedTags={guesstedTags} />
      </div>
    </div>
  );
}
