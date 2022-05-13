import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";

describe("Input", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const props = {
    value: "",
    onChange: jest.fn(),
    onKeyPress: jest.fn(),
  };

  const renderInput = () => {
    render(
      <Input
        value={props.value}
        onChange={props.onChange}
        onKeyPress={props.onKeyPress}
      />
    );
  };

  it("should render Input component", () => {
    renderInput();

    expect(screen.getByTestId("input")).toBeInTheDocument();
  });

  it("should call props.onChange() when input is filled", async () => {
    renderInput();

    const inputText = "some text here";
    const input = screen.getByTestId("input");

    await userEvent.type(input, inputText);

    expect(props.onChange).toHaveBeenCalledTimes(14);
  });

  it("should call props.onKeyPress() when enter is pressed", async () => {
    renderInput();

    const input = screen.getByTestId("input");

    await fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });

    expect(props.onKeyPress).toHaveBeenCalledTimes(1);
  });
});
