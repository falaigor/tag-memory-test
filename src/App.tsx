import { useState, useEffect, useRef } from "react";
import { List } from "./components/List";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Countdown } from "./components/Countdown";

import { tags } from "./tags";
import { CaretRight } from "phosphor-react";

export function App() {
  let timer = useRef(1 * 10);

  const [countdown, setCountdown] = useState(timer.current);
  const [value, setValue] = useState("");
  const [guesstedTags, setGuesstedTags] = useState([]);
  const [startCountdown, setStartCountdown] = useState(false);

  const increaseCountdownTimer = () => (timer.current = timer.current + 5);
  const cleanInput = () => setValue("");

  useEffect(() => {
    if (startCountdown === true && countdown > 0) {
      setTimeout(() => {
        setCountdown((timer.current = timer.current - 1));
      }, 1000);
    }
  }, [countdown, startCountdown]);

  function existsInTags(value) {
    return tags.includes(value.toLowerCase());
  }

  function existsInGuesstedTags(value) {
    return guesstedTags.includes(value.toLowerCase());
  }

  function addedGuesstedTags(value) {
    if (existsInTags(value) && !existsInGuesstedTags(value) && countdown > 0) {
      setGuesstedTags([...guesstedTags, value.toLowerCase()]);
      increaseCountdownTimer();
      cleanInput();
    }
  }

  function handleClick() {
    setStartCountdown(true);
    addedGuesstedTags(value);
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

          <Countdown
            countdown={timer.current}
            startCountdown={startCountdown}
          />
        </div>

        <div className="flex flex-row w-full gap-2">
          <Input
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={handleKeyDown}
          />

          <Button onClick={() => handleClick()} />
        </div>

        <List guesstedTags={guesstedTags} />
      </div>
    </div>
  );
}
