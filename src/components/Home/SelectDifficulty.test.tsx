import { vi } from "vitest";
import { useChallengeStore } from "../../../store/challenge";
import { render, fireEvent, screen, renderHook } from "../../tests/test-utils";
import { SelectDifficulty } from "./SelectDifficulty";

describe("SelectDifficulty", () => {
  let result;

  beforeEach(() => {
    result = renderHook(() => useChallengeStore()).result;
  });

  it("should render SelectDifficulty component", () => {
    render(<SelectDifficulty />);

    expect(screen.getByTestId("select-difficulty")).toBeInTheDocument();
  });

  it("should call difficultyChange() when button is clicked", async () => {
    const spy = vi.spyOn(result.current.actions, "difficultyChange");
    render(<SelectDifficulty />);

    const [easy] = screen.getAllByRole("button");

    await fireEvent.click(easy);

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
