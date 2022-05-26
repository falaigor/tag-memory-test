import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { AuthContext } from "./auth";

describe("Auth Context", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const providerProps = {
    value: {
      user: null,
      isUserLogger: false,
      signInGithubUrl: "http://url.com",
      signOut: jest.fn(),
    },
  };

  const renderUserAuth = (ui, providerProps, { ...renderOptions }) => {
    return render(
      <AuthContext.Provider {...providerProps}>
        <BrowserRouter>{ui}</BrowserRouter>
      </AuthContext.Provider>,
      renderOptions
    );
  };

  it("should render component with AuthContext", () => {
    renderUserAuth(<Home />, providerProps, {});

    expect(screen.getByTestId("home-page")).toBeInTheDocument();
    expect(screen.getByTestId("login-link")).toBeInTheDocument();
  });

  it("should save the logged in user in state", () => {
    const providerPropsWithUserLogged = {
      value: {
        ...providerProps.value,
        user: {
          id: "umaIdBemLegal",
          name: "Igor Santos",
          email: "falaigors@gmail.com",
          avatar_url: "http://image.com",
        },
        isUserLogger: true,
      },
    };
    renderUserAuth(<Home />, providerPropsWithUserLogged, {});

    expect(screen.getByTestId("home-page")).toBeInTheDocument();
    expect(screen.getByTestId("logout-link")).toBeInTheDocument();
  });
});
