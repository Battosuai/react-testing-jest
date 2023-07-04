import { render, screen } from "@testing-library/react";
import MuiMode from "./MuiMode";
import { AppProvider } from "../../providers/AppProvider";

describe("MuiMode", () => {
  it("renders correctly", () => {
    render(<MuiMode />, {
      wrapper: AppProvider,
    });
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
