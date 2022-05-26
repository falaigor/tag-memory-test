import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { renderWithChallengeContext } from "../../tests/renderWithChallengeContext";
import userEvent from "@testing-library/user-event";

import { Home } from "../Home";

const handleClick = jest.fn();

describe("Home", () => {
  const providerProps = {
    value: {
      value: "",
      setValue: jest.fn(),
      time: 12,
      countdown: 10,
      totalTime: 0,
      guesstedTags: [],
      startCountdown: false,
      finishChallenge: false,
      startChallenge: jest.fn(),
    },
  };

  it("should render Home page", () => {
    renderWithChallengeContext(<Home />, providerProps, {});

    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });

  fit("should add an item to the list if there is an array of tags and there is no array of guessed tags", async () => {
    const tag = "html";

    renderWithChallengeContext(<Home />, providerProps, {});

    const button = screen.getByTestId("button");
    const input = screen.getByTestId("input");

    await userEvent.type(input, tag);
    await fireEvent.click(button);

    console.log(providerProps.value.guesstedTags);

    await waitFor(() => {
      expect(screen.getAllByTestId("tag-item")).toHaveLength(1);
    });
  });

  it("should not add tag if it does not exist in the tag array", async () => {
    const tag = "html2";

    renderWithChallengeContext(<Home />, providerProps, {});

    const button = screen.getByTestId("button");
    const input = screen.getByTestId("input");

    await userEvent.type(input, tag);
    await fireEvent.click(button);

    expect(handleClick).toBeCalledTimes(0);
  });

  it("should add several items to the list if there is an array of tags and there is not an array of guessed tags", async () => {
    const tags = ["html", "base", "main"];

    renderWithChallengeContext(<Home />, providerProps, {});

    const button = screen.getByTestId("button");
    const input = screen.getByTestId("input");

    for (const tag of tags) {
      await userEvent.type(input, tag);
      await fireEvent.click(button);
    }

    await waitFor(() => {
      expect(screen.getAllByTestId("tag-item")).toHaveLength(3);
    });
  });

  it("should not add tag that has already been guessed", async () => {
    const tags = ["html", "base"];
    const tag1 = "html";

    renderWithChallengeContext(<Home />, providerProps, {});

    const button = screen.getByTestId("button");
    const input = screen.getByTestId("input");

    for (const tag of tags) {
      await userEvent.type(input, tag);
      await fireEvent.click(button);
    }

    await waitFor(() => {
      expect(screen.getAllByTestId("tag-item")).toHaveLength(2);
    });

    await userEvent.type(input, tag1);
    await fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getAllByTestId("tag-item")).toHaveLength(2);
    });
  });
});
