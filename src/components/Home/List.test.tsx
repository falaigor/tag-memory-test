import { render, screen } from "@testing-library/react";
import { List } from "./List";

describe("List", () => {
  const guesstedTags = ["tag1", "tag2", "tag3", "tag4"];

  const renderList = () => render(<List guesstedTags={guesstedTags} />);

  it("should render List component", () => {
    renderList();

    expect(screen.getByTestId("list")).toBeInTheDocument();
  });

  it("should render the tag-item component 4 times", () => {
    renderList();

    expect(screen.getAllByTestId("tag-item")).toHaveLength(4);
  });
});
