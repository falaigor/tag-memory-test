import { screen } from "@testing-library/react";
import { renderWithChallengeContext } from "../../tests/renderWithChallengeContext";

import { Home } from "../Home";
import { BrowserRouter } from "react-router-dom";

const handleClick = jest.fn();

describe("Home", () => {
  const providerProps = {
    value: {
      value: "",
      setValue: jest.fn(),
      time: 12,
      countdown: 10,
      totalTime: 0,
      guessedTags: [],
      startCountdown: false,
      finishChallenge: false,
      startChallenge: jest.fn(),
    },
  };

  it("should render Home page", () => {
    renderWithChallengeContext(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
      providerProps,
      {}
    );

    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });
});
