import create from "zustand";
import produce from "immer";
import { DifficultyType, difficultyTypes } from "../contexts/challenge";

const initialState = {
  difficulty: {
    type: "EASY",
    time: 1 * 60,
    increaseTime: 5,
  },
  totalTime: 0,
};

export const useChallengeStore = create((set) => {
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
