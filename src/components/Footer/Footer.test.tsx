import { fireEvent, render, screen } from "../../tests/test-utils";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("should render Footer component", () => {
    render(<Footer />);

    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("should redirect to Github Page when click in link", () => {
    render(<Footer />);

    const link = screen.getByTestId("github-url");
    fireEvent.click(link);

    expect(link).toHaveAttribute("href", "https://github.com/falaigor");
  });
});
