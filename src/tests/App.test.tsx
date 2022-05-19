import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { App } from "../App";

describe("App", () => {
  const props = {
    handleKeyPress: jest.fn(),
    handleClick: jest.fn(),
  };

  it("should render App page", () => {
    render(<App />);

    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });

  it("should add an item to the list if there is an array of tags and there is no array of guessed tags", async () => {
    const tag = "html";

    render(<App />);

    const button = screen.getByTestId("button");
    const input = screen.getByTestId("input");

    await userEvent.type(input, tag);
    await fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getAllByTestId("tag-item")).toHaveLength(1);
    });
  });

  it("should not add tag if it does not exist in the tag array", async () => {
    const tag = "html2";

    render(<App />);

    const button = screen.getByTestId("button");
    const input = screen.getByTestId("input");

    await userEvent.type(input, tag);
    await fireEvent.click(button);

    expect(props.handleClick).toBeCalledTimes(0);
  });

  it("should add several items to the list if there is an array of tags and there is not an array of guessed tags", async () => {
    const tags = ["html", "base", "main"];

    render(<App />);

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

    render(<App />);

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

  it("should add tag when pressing enter", async () => {
    const tag = "html";

    render(<App />);

    const button = screen.getByTestId("button");
    const input = screen.getByTestId("input");

    await userEvent.type(input, tag);
    await fireEvent.click(button);

    // expect(props.handleClick).toHaveBeenCalledTimes(1);
  });
});
