import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { renderWithChallengeContext } from "../../tests/renderWithChallengeContext";
import { List } from "./List";

describe("List", () => {
  const props = {
    value: {
      value: "",
      setValue: jest.fn(),
      time: 123,
      totalTime: 123,
      guessedTags: ["tag1", "tag2", "tag3"],
      totalGuessed: 3,
      countRecallTag: 0,
      startCountdown: false,
      finishChallenge: false,
      startChallenge: jest.fn(),
    },
  };

  it("should render List component", () => {
    renderWithChallengeContext(
      <BrowserRouter>
        <List />
      </BrowserRouter>,
      props,
      {}
    );

    expect(screen.getByTestId("list")).toBeInTheDocument();
  });
});
