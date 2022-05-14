import { render, screen } from "@testing-library/react";
import { Modal } from "./Modal";

describe("Modal", () => {
  beforeEach(() => {
    window.IntersectionObserver = jest.fn();
  });

  const props = {
    isOpen: true,
    totalTime: 0,
    totalGuessted: 0,
    restart: jest.fn(),
    closeModal: jest.fn(),
  };

  it("should render Modal component", () => {
    render(<Modal {...props} />);

    expect(screen.getByTestId("modal")).toBeInTheDocument();
  });
});
