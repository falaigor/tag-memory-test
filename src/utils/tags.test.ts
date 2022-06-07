import { tags } from "./tags";

describe("Tags", () => {
  it("should render array tags", () => {
    expect(tags).toMatchSnapshot();
  });
});
