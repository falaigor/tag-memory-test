import { useChallengeStore } from "../../../store/challenge";
import { SelectDifficulty } from "./SelectDifficulty";
import userEvent from "@testing-library/user-event";
import { setAutoFreeze } from "immer";

import {
  render,
  screen,
  renderHook,
  cleanup,
  fireEvent,
} from "@testing-library/react";

setAutoFreeze(false);

describe("SelectDifficulty", () => {
  let result;

  beforeEach(() => {
    result = renderHook(() => useChallengeStore()).result;
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it("should render SelectDifficulty component", () => {
    render(<SelectDifficulty />);

    expect(screen.getByTestId("select-difficulty")).toBeInTheDocument();
  });

  it("should call difficultyChange() and change difficulty for EASY when button is clicked", async () => {
    const spy = jest.spyOn(result.current.actions, "difficultyChange");

    render(<SelectDifficulty />);

    const [easy] = screen.getAllByRole("button");

    await userEvent.click(easy);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("EASY");
  });

  it("should call difficultyChange() and change difficulty for HARD when button is clicked", async () => {
    const spy = jest.spyOn(result.current.actions, "difficultyChange");

    render(<SelectDifficulty />);

    const [, hard] = screen.getAllByRole("button");

    await userEvent.click(hard);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("HARD");
  });

  it("should call difficultyChange() and change difficulty for EXPERT when button is clicked", async () => {
    const spy = jest.spyOn(result.current.actions, "difficultyChange");

    render(<SelectDifficulty />);

    const [, , expert] = screen.getAllByRole("button");

    await userEvent.click(expert);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("EXPERT");
  });

  it("should open Difficulty information when click in Tooltip", async () => {
    render(<SelectDifficulty />);

    const [tooltip] = screen.getAllByTestId("tooltip");
    await fireEvent.click(tooltip);

    const [description] = screen.getAllByTestId("description");
    expect(description).toBeInTheDocument();
  });
});
