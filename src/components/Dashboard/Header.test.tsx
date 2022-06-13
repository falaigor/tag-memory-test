import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "../../routes/routes";
import { renderWithAuthContext } from "../../tests/renderWithAuthContext";
import { Header } from "./Header";

describe("Header", () => {
  const userLogged = {
    value: {
      signOut: jest.fn(),
      signInGithubUrl: "http://github.com/login",
      user: {
        id: "UserId",
        name: "Igor Santos",
        avatar_url: "http://avatarimg./com",
      },
      isUserLogger: true,
    },
  };

  it("should render Header component", () => {
    renderWithAuthContext(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      userLogged,
      {}
    );

    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("should call signOut when click in button", () => {
    renderWithAuthContext(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      userLogged,
      {}
    );

    const menuOpen = screen.getByTestId("menu-button");
    fireEvent.click(menuOpen);

    const logoutButton = screen.getByTestId("logout-button");
    fireEvent.click(logoutButton);

    expect(userLogged.value.signOut).toHaveBeenCalled();
    expect(window.location.pathname).toEqual(AppRoute.Home);
  });
});
