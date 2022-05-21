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

  it("should redirecionar a pagina o clicar", () => {
    renderLogin();

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(window.location.pathname).toEqual("/ranking");
  });
});
