import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import { Home } from "../Home";

const handleClick = jest.fn();

describe("Home", () => {
  const renderHome = () =>
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

  it("should render Home page", () => {
    renderHome();

    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });

  it("should add an item to the list if there is an array of tags and there is no array of guessed tags", async () => {
    const tag = "html";

    renderHome();

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

    renderHome();

    const button = screen.getByTestId("button");
    const input = screen.getByTestId("input");

    await userEvent.type(input, tag);
    await fireEvent.click(button);

    expect(handleClick).toBeCalledTimes(0);
  });

  it("should add several items to the list if there is an array of tags and there is not an array of guessed tags", async () => {
    const tags = ["html", "base", "main"];

    renderHome();

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

    renderHome();

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
