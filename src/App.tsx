import { useState, useEffect, useRef } from "react";
import { List } from "./components/List";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Countdown } from "./components/Countdown";
import { Modal } from "./components/Modal";

import { tags } from "./tags";

export function App() {
  let timer = useRef(1 * 60);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countdown, setCountdown] = useState(timer.current);
  const [totalTime, setTotalTime] = useState(0);
  const [value, setValue] = useState("");
  const [guesstedTags, setGuesstedTags] = useState([]);
  const [startCountdown, setStartCountdown] = useState(false);

  const increaseCountdownTimer = () => (timer.current = timer.current + 5);
  const cleanInput = () => setValue("");

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

  function countRecallTag() {
    return tags.length - guesstedTags.length;
  }

  function stopCountdownGuesstedAllTags() {
    if (tags.length - guesstedTags.length === 0) setStartCountdown(false);
  }

  useEffect(() => {
    if (startCountdown === true && countdown > 0) {
      setTimeout(() => {
        setCountdown((timer.current = timer.current - 1));
        setTotalTime(totalTime + 1);
      }, 1000);
    } else if (tags.length === guesstedTags.length || countdown === 0) {
      setStartCountdown(false);
      setIsModalOpen(true);
    }

    stopCountdownGuesstedAllTags();
  }, [countdown, startCountdown]);

  function restart() {
    window.location.reload();
  }

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        restart={restart}
        totalTime={totalTime}
        totalGuessted={guesstedTags.length}
      />

      <div className="w-screen flex items-center justify-center mobile:p-4">
        <div className="max-w-3xl w-full flex flex-col">
          <div>
            <h1 className="pt-4 pb-2 text-5xl font-extrabold font-montserrat text-zinc-900">
              HTML Tag memory test
            </h1>
            <h2 className="text-xl">How many HTML tags can you remember?</h2>
            <h3 className="pb-2">{countRecallTag()} to recall…</h3>
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

      <div className="relative p-4">
        <footer className="w-screen flex items-center justify-center absolute bottom-0">
          <h2 className="text-sm p-2">
            HTML Tags Memory Test by{" "}
            <a
              className="underline underline-offset-2"
              target="_blank"
              href="https://github.com/falaigor"
            >
              @falaigors
            </a>
          </h2>
        </footer>
      </div>
    </>
  );
}
