import { render, screen } from "@testing-library/react";
import { Modal } from "./Modal";

describe("Modal", () => {
  beforeEach(() => {
    const mock = function () {
      return {
        observe: jest.fn(),
        disconnect: jest.fn(),
      };
    };

    window.IntersectionObserver = mock;
  });

  const props = {
    isOpen: true,
    totalTime: 123,
    totalGuessted: 35,
    restart: jest.fn(),
    closeModal: jest.fn(),
  };

  it("should render Modal component", () => {
    render(<Modal {...props} />);

    expect(screen.getByTestId("modal")).toBeInTheDocument();
  });

  it("should show the result", () => {
    render(<Modal {...props} />);

    expect(
      screen.queryByText("You guessed 35 tags in 123 seconds!")
    ).toBeInTheDocument();
  });
});
