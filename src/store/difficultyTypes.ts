export const difficultyTypes = {
  EASY: {
    counter: false,
    time: 0,
    increaseTime: 0,
  },
  HARD: {
    counter: true,
    time: 1 * 60,
    increaseTime: 5,
  },
  EXPERT: {
    counter: true,
    time: 1 * 30,
    increaseTime: 3,
  },
};

export type DifficultyType = keyof typeof difficultyTypes;
