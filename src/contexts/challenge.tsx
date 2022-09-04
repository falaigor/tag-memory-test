import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { useChallengeStore } from "../../store/challenge";
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
    counter: false,
    time: 0,
    increaseTime: 0,
    description:
      "At this level you start with a 1 minute countdown. Every hit you get 5 seconds in the count.",
  },
  HARD: {
    title: "Hard",
    counter: true,
    time: 1 * 60,
    increaseTime: 5,
    description:
      "At this level you start with a 30 second countdown. Every hit you get 3 seconds in the count.",
  },
  EXPERT: {
    title: "Expert",
    counter: true,
    time: 1 * 30,
    increaseTime: 3,
    description:
      "At this level you start with a 15 second countdown. Every hit you get 2 seconds in the count.",
  },
};

export type DifficultyType = keyof typeof difficultyTypes;

export function ChallengeProvider({ children }: ChallengeProviderProps) {
  const { difficulty, totalTime } = useChallengeStore((store) => store.state);
  const { increaseTime, increaseTotalTime, decreaseTime } = useChallengeStore(
    (store) => store.actions
  );

  const [value, setValue] = useState("");
  const [countdown, setCountdown] = useState(difficulty.time);
  const [guessedTags, setGuessedTags] = useState([]);
  const [startCountdown, setStartCountdown] = useState(false);
  const [finishChallenge, setFinishChallenge] = useState(false);

  const cleanInput = () => setValue("");

  const countRecallTag = tags.length === guessedTags.length;
  const totalGuessed = guessedTags.length;

  function existsInTags(value: string) {
    return tags.includes(value.toLowerCase());
  }

  function existsInGuessedTags(value: string) {
    return guessedTags.includes(value.toLowerCase());
  }

  function addedGuessedTags(value: string) {
    if (existsInTags(value) && !existsInGuessedTags(value)) {
      if (difficulty.time > 0 || difficulty.counter === false) {
        setGuessedTags([...guessedTags, value.toLowerCase()]);
        increaseTime();
        cleanInput();
      }
    }
  }

  function startChallenge() {
    setStartCountdown(true);
    addedGuessedTags(value);
  }

  useEffect(() => {
    setCountdown(difficulty.time);
  }, [difficulty.type]);

  useEffect(() => {
    if (
      (startCountdown === true && difficulty.time > 0) ||
      (startCountdown === true && difficulty.counter === false)
    ) {
      setTimeout(() => {
        decreaseTime();
        increaseTotalTime();
        setCountdown(difficulty.time - 1);
      }, 1000);
    }

    console.log(totalTime);
  }, [countdown, startCountdown, totalTime]);

  useEffect(() => {
    if (
      countRecallTag ||
      (difficulty.time === 0 && difficulty.counter === true)
    ) {
      setStartCountdown(false);
      setFinishChallenge(true);
    }
  }, [guessedTags, difficulty.time, startCountdown]);

  return (
    <ChallengeContext.Provider
      value={{
        time: difficulty.time,
        value,
        setValue,
        totalTime,
        guessedTags,
        totalGuessed,
        countRecallTag: tags.length - guessedTags.length,
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
