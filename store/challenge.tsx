import create from "zustand";
import produce from "immer";
import { DifficultyType, difficultyTypes } from "../src/contexts/challenge";

const initialState = {
  difficulty: {
    type: "EASY",
    time: 1 * 60,
    increaseTime: 5,
  },
  totalTime: 0,
};
interface StateProps {
  difficulty: {
    type: string;
    time: number;
    increaseTime: number;
  };
  totalTime: number;
}

interface ActionProps {
  difficultyChange: (difficulty: DifficultyType) => void;
  increaseTime: () => void;
  increaseTotalTime: () => void;
  decreaseTime: () => void;
  reset: () => void;
}

interface StoreProps {
  state: StateProps;
  actions: ActionProps;
}

export const useChallengeStore = create<StoreProps>((set) => {
  const setState = (fn: any) => set(produce(fn));

  return {
    state: {
      ...initialState,
    },
    actions: {
      difficultyChange(difficulty: DifficultyType) {
        setState(({ state }) => {
          const difficultySelectType = difficultyTypes[difficulty];

          state.difficulty.type = difficulty;
          state.difficulty.time = difficultySelectType.time;
          state.difficulty.increaseTime = difficultySelectType.increaseTime;
        });
      },

      increaseTime() {
        setState(({ state }) => {
          state.difficulty.time =
            state.difficulty.time + state.difficulty.increaseTime;
        });
      },

      increaseTotalTime() {
        setState(({ state }) => {
          state.totalTime++;
        });
      },

      decreaseTime() {
        setState(({ state }) => {
          if (state.difficulty.time > 0) state.difficulty.time--;
        });
      },

      reset() {
        setState((store) => {
          store.state = initialState;
        });
      },
    },
  };
});
