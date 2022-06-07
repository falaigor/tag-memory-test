import { renderHook, act } from "../src/tests/test-utils";
import { useChallengeStore } from "./challenge";

describe("Challenge Store", () => {
  let result;
  let difficultyChange;
  let increaseTime;
  let increaseTotalTime;
  let decreaseTime;
  let reset;

  beforeEach(() => {
    result = renderHook(() => useChallengeStore()).result;
    difficultyChange = result.current.actions.difficultyChange;
    increaseTime = result.current.actions.increaseTime;
    increaseTotalTime = result.current.actions.increaseTotalTime;
    decreaseTime = result.current.actions.decreaseTime;
    reset = result.current.actions.reset;
  });

  afterEach(() => {
    act(() => result.current.actions.reset());
  });

  it("should return difficulty equals easy on initial state", async () => {
    expect(result.current.state.difficulty.type).toBe("EASY");
    expect(result.current.state.difficulty.time).toBe(1 * 60);
    expect(result.current.state.difficulty.increaseTime).toBe(5);
  });

  it("should return totalTime equals '0' on initial state", async () => {
    expect(result.current.state.totalTime).toBe(0);
  });

  it("should change the difficulty to HARD", () => {
    act(() => difficultyChange("HARD"));

    expect(result.current.state.difficulty.type).toBe("HARD");
    expect(result.current.state.difficulty.time).toBe(1 * 30);
    expect(result.current.state.difficulty.increaseTime).toBe(3);
  });

  it("should change the difficulty to EXPERT", () => {
    act(() => difficultyChange("EXPERT"));

    expect(result.current.state.difficulty.type).toBe("EXPERT");
    expect(result.current.state.difficulty.time).toBe(1 * 15);
    expect(result.current.state.difficulty.increaseTime).toBe(2);
  });

  it("should decrease time", () => {
    act(() => decreaseTime());

    expect(result.current.state.difficulty.time).toBe(1 * 59);
  });

  it("should increase time", () => {
    act(() => increaseTime());

    expect(result.current.state.difficulty.time).toBe(1 * 65);
  });

  it("should increase total time", () => {
    act(() => increaseTotalTime());

    expect(result.current.state.totalTime).toBe(1);
  });
});
