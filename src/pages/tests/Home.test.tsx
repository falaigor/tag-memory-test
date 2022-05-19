import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Home } from "../Home";

const handleClick = jest.fn();

describe("Home", () => {
  it("should render Home page", () => {
    render(<Home />);

    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });

  it("should add an item to the list if there is an array of tags and there is no array of guessed tags", async () => {
    const tag = "html";

    render(<Home />);

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

    render(<Home />);

    const button = screen.getByTestId("button");
    const input = screen.getByTestId("input");

    await userEvent.type(input, tag);
    await fireEvent.click(button);

    expect(handleClick).toBeCalledTimes(0);
  });

  it("should add several items to the list if there is an array of tags and there is not an array of guessed tags", async () => {
    const tags = ["html", "base", "main"];

    render(<Home />);

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

    render(<Home />);

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
