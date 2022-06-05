import { vi } from "vitest";
import { render, screen, userEvent, fireEvent } from "../../tests/test-utils";
import { Input } from "./Input";

describe("Input", () => {
  const props = {
    value: "",
    onChange: vi.fn(),
    onKeyPress: vi.fn(),
  };

  it("should render Input component", () => {
    render(<Input {...props} />);

    expect(screen.getByTestId("input")).toBeInTheDocument();
  });

  it("should call props.onChange() when input is filled", async () => {
    render(<Input {...props} />);

    const inputText = "some text here";
    const input = screen.getByTestId("input");

    await userEvent.type(input, inputText);

    expect(props.onChange).toHaveBeenCalledTimes(14);
  });

  it("should call props.onKeyPress() when enter is pressed", async () => {
    render(<Input {...props} />);

    const input = screen.getByTestId("input");

    await fireEvent.keyDown(input, { charCode: 13 });

    expect(props.onKeyPress).toHaveBeenCalledTimes(1);
  });
});
