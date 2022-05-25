import { List } from "../components/Home/List";
import { Input } from "../components/Home/Input";
import { Button } from "../components/Home/Button";
import { Countdown } from "../components/Home/Countdown";
import { Modal } from "../components/Home/Modal";

import { tags } from "../utils/tags";
import { ViewPage } from "../components/ViewPage/ViewPage";
import { Footer } from "../components/Footer/Footer";
import { useChallenge } from "../contexts/challenge";
import { useEffect, useState } from "react";

export function Home() {
  const { value, setValue, guesstedTags, startChallenge, finishChallenge } =
    useChallenge();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleKeyPress(event) {
    if (event.keyCode === 13) {
      startChallenge();
    }
  }

  function countRecallTag() {
    return tags.length - guesstedTags.length;
  }

  useEffect(() => {
    if (finishChallenge) setIsModalOpen(true);
  }, [finishChallenge]);

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <ViewPage>
      <Modal isOpen={isModalOpen} closeModal={closeModal} />

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
            <h3 className="pb-2">{countRecallTag()} to recall…</h3>
          </div>

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
      <Footer />
    </ViewPage>
  );
}
