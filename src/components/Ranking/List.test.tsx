import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { RankingList } from "./List";

describe("List", () => {
  const data = {
    id: "UserId",
    guessedTags: 123,
    time: 34,
    user: {
      id: "UserId",
      name: "Igor Santos",
      avatar_url: "http://avatarurl.com/",
    },
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render Loading", async () => {
    render(
      <BrowserRouter>
        <RankingList />
      </BrowserRouter>
    );

    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });
});
