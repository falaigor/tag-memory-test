import { useCallback, useEffect, useRef, useState } from "react";
import { useChallenge } from "../contexts/challenge";

import { List } from "../components/Home/List";
import { Input } from "../components/Home/Input";
import { Button } from "../components/Home/Button";
import { Modal as OldaModal } from "../components/Home/Modal";
import { Modal } from "../components/Modal";
import { Countdown } from "../components/Home/Countdown";
import { ViewPage } from "../components/ViewPage/ViewPage";
import { SelectDifficulty } from "../components/Home/SelectDifficulty";

export function Home() {
  const { value, setValue, countRecallTag, startChallenge, finishChallenge } =
    useChallenge();

  const modalRef = useRef(null);
  const handleClickOpenModal = useCallback(() => modalRef.current.onOpen(), []);

  function handleKeyPress(event) {
    if (event.keyCode === 13) {
      startChallenge();
    }
  }

  useEffect(() => {
    if (finishChallenge) handleClickOpenModal();
  }, [finishChallenge]);

  return (
    <ViewPage>
      <Modal ref={modalRef} />

      <div
        data-testid="home-page"
        className="flex items-center justify-center mobile:p-4"
      >
        <div className="max-w-3xl w-full flex flex-col">
          <div>
            <h1 className="pt-4 pb-2 text-5xl font-extrabold font-montserrat text-zinc-900">
              HTML Tag memory test
            </h1>
            <h2 className="text-xl">How many HTML tags can you remember?</h2>
            <h3 className="pb-2">{countRecallTag} to recall…</h3>
          </div>

          <SelectDifficulty />

          <div className="flex p-4 my-4 rounded-2xl justify-between bg-zinc-100 border-2 border-zinc-900 drop-shadow-stroke items-center">
            <p className="text-3xl font-montserrat">Time Left</p>

            <Countdown />
          </div>

          <div className="flex flex-row w-full gap-2">
            <Input
              value={value}
              onChange={(event) => setValue(event.target.value)}
              onKeyPress={handleKeyPress}
            />

            <Button onClick={() => startChallenge()} />
          </div>

          <List />
        </div>
      </div>
    </ViewPage>
  );
}
