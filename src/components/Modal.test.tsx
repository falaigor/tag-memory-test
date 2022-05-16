import { fireEvent, render, screen } from "@testing-library/react";
import { Modal } from "./Modal";

describe("Modal", () => {
  beforeEach(() => {
    const mock = function() {
      return {
        observe: jest.fn(),
        disconnect: jest.fn(),
      };
    };

    window.IntersectionObserver = mock;
  });

  afterEach(() => {
    jest.clearAllMocks();
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

  it("should show the result of a single tag", () => {
    const newProps = {
      totalGuessted: 1,
      isOpen: props.isOpen,
      totalTime: props.totalTime,
      restart: props.restart,
      closeModal: props.closeModal,
    };
    render(<Modal {...newProps} />);

    const resultOneTag = `
    <p
    class=" text-gray-500"
  >
    You guessed
    <span
      class="text-blue-800 font-bold"
    >
       1 tag
    </span>
    in
     
    <span
      class="text-blue-800 font-bold"
    >
      123
       seconds
    </span>
    !
  </p>
    `;

    expect(resultOneTag).toMatchSnapshot();
  });

  it("should show the result of a multiple tags", () => {
    render(<Modal {...props} />);

    const result = `
    <p
    class=" text-gray-500"
  >
    You guessed
    <span
      class="text-blue-800 font-bold"
    >
       35 tags 
    </span>
    in
     
    <span
      class="text-blue-800 font-bold"
    >
      123
       seconds
    </span>
    !
  </p>
    `;

    expect(result).toMatchSnapshot();
  });

  it("should call props.restart() when button get clicked", async () => {
    render(<Modal {...props} />);

    const button = screen.getByRole("button");

    await fireEvent.click(button);

    expect(props.restart).toHaveBeenCalledTimes(1);
  });

  it("should call props.closeModal() when button gets clicked", async () => {
    render(<Modal {...props} />);

    const button = screen.getByRole("button");

    await fireEvent.click(button);

    expect(props.closeModal).toHaveBeenCalledTimes(1);
  });
});
