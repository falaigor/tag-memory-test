import { render, screen } from "@testing-library/react";
import { App } from "../App";

describe("App", () => {
  it("should render App page", () => {
    render(<App />);

    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });
});
