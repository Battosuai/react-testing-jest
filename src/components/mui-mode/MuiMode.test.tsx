import { render, screen } from "../../test-util";
import MuiMode from "./MuiMode";

describe("MuiMode", () => {
  it("renders correctly", () => {
    render(<MuiMode />, {
      //   wrapper: AppProvider,
    });
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
