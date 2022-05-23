import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Login } from "../Login";

describe("Login", () => {
  const renderLogin = () =>
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

  it("should render Login Page", () => {
    renderLogin();

    expect(screen.getByTestId("login-page")).toBeInTheDocument();
  });

  it("should call the function that performs the login on github", () => {
    renderLogin();

    const button = screen.getByTestId("button-github");

    fireEvent.click(button);

    expect(window.location.pathname).toEqual("/ranking");
  });

  it("should call the function that performs the login on google", () => {
    renderLogin();

    const button = screen.getByTestId("button-google");

    fireEvent.click(button);

    expect(window.location.pathname).toEqual("/ranking");
  });
});
