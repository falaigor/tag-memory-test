import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { renderWithAuthContext } from "../../tests/renderWithAuthContext";
import { ViewPage } from "./ViewPage";
import { AppRoute } from "../../routes/routes";

describe("ViewPage", () => {
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

  const renderViewPage = () => {
    render(
      <BrowserRouter>
        <ViewPage>um component</ViewPage>
      </BrowserRouter>
    );
  };

  it("should render ViewPage component", () => {
    renderViewPage();

    expect(screen.getByTestId("view-page")).toBeInTheDocument();
  });

  it("should navigate to pages", async () => {
    renderViewPage();

    const homeLink = screen.getByTestId("home-link");
    fireEvent.click(homeLink);
    expect(homeLink).toHaveAttribute("href", AppRoute.Home);

    const rankingLink = screen.getByTestId("ranking-link");
    fireEvent.click(rankingLink);
    expect(rankingLink).toHaveAttribute("href", AppRoute.Ranking);

    const loginLink = screen.getByTestId("login-link");
    fireEvent.click(loginLink);
    expect(loginLink).toHaveAttribute("href", AppRoute.Login);
  });

  it("should show Dashboard icon", () => {
    renderWithAuthContext(
      <BrowserRouter>
        <ViewPage>um component</ViewPage>
      </BrowserRouter>,
      userLogged,
      {}
    );

    const dashboard = screen.getByTestId("dashboard-link");
    fireEvent.click(dashboard);
    expect(dashboard).toHaveAttribute("href", AppRoute.Dashboard);
  });

  it("should call signOut when click in button", () => {
    renderWithAuthContext(
      <BrowserRouter>
        <ViewPage>um component</ViewPage>
      </BrowserRouter>,
      userLogged,
      {}
    );

    const logoutLink = screen.getByTestId("logout-link");
    fireEvent.click(logoutLink);

    expect(userLogged.value.signOut).toHaveBeenCalledTimes(1);
  });
});
