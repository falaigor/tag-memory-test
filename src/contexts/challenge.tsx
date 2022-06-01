import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { useChallengeStore } from "../store/challenge";
import { tags } from "../utils/tags";

interface ChallengeContextData {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  time: number;
  totalTime: number;
  guessedTags: string[] | null;
  totalGuessed: number;
  countRecallTag: number;
  startCountdown: boolean;
  finishChallenge: boolean;
  startChallenge: () => void;
}

export const ChallengeContext = createContext({} as ChallengeContextData);

interface ChallengeProviderProps {
  children: ReactNode;
}

export const difficultyTypes = {
  EASY: {
    title: "Easy",
    time: 1 * 60,
    increaseTime: 5,
    description:
      "No nivel easy, voce tem 1 minuto inicial e mais 5s por acerto",
  },
  HARD: {
    title: "Hard",
    time: 1 * 30,
    increaseTime: 3,
    description:
      "No nivel easy, voce tem 30 segundos iniciais e mais 3s por acerto",
  },
  EXPERT: {
    title: "Expert",
    time: 1 * 10,
    increaseTime: 5,
    description:
      "No nivel expert, voce tem 10 segundos iniciais e mais 1s por acerto",
  },
};

export type DifficultyType = keyof typeof difficultyTypes;

export function ChallengeProvider({ children }: ChallengeProviderProps) {
  const { difficulty, totalTime } = useChallengeStore((store) => store.state);
  const { increaseTime, increaseTotalTime, decreaseTime } = useChallengeStore(
    (store) => store.actions
  );

  const [value, setValue] = useState("");
  const [guessedTags, setGuessedTags] = useState([]);
  const [startCountdown, setStartCountdown] = useState(false);
  const [finishChallenge, setFinishChallenge] = useState(false);

  const cleanInput = () => setValue("");

  const countRecallTag = tags.length - guessedTags.length;
  const totalGuessed = guessedTags.length;

  function existsInTags(value: string) {
    return tags.includes(value.toLowerCase());
  }

  function existsInGuessedTags(value: string) {
    return guessedTags.includes(value.toLowerCase());
  }

  function addedGuessedTags(value: string) {
    if (
      existsInTags(value) &&
      !existsInGuessedTags(value) &&
      difficulty.time > 0
    ) {
      setGuessedTags([...guessedTags, value.toLowerCase()]);
      increaseTime();
      cleanInput();
    }
  }

  function startChallenge() {
    setStartCountdown(true);
    addedGuessedTags(value);
  }

  function guessedAllTags() {
    if (countRecallTag === 0) {
      setStartCountdown(false);
      setFinishChallenge(true);
    }
  }

  useEffect(() => {
    if (startCountdown === true && difficulty.time > 0) {
      setTimeout(() => {
        decreaseTime();
        increaseTotalTime();
      }, 1000);
    }
  }, [difficulty, startCountdown]);

  useEffect(() => {
    if (tags.length === guessedTags.length || difficulty.time === 0) {
      setStartCountdown(false);
      setFinishChallenge(true);
    }

    guessedAllTags();
  }, [difficulty.time, startCountdown]);

  return (
    <ChallengeContext.Provider
      value={{
        time: difficulty.time,
        value,
        setValue,
        totalTime,
        guessedTags,
        totalGuessed,
        countRecallTag,
        startCountdown,
        startChallenge,
        finishChallenge,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
}

export const useChallenge = () => useContext(ChallengeContext);
