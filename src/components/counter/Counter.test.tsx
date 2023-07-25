import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  it("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();
    const incrementButtonElement = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButtonElement).toBeInTheDocument();
  });

  it("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  it("renders count of 1 after clicking button once", async () => {
    user.setup();
    render(<Counter />);
    const incrementButtonElement = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementButtonElement);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  it("renders count of 1 after double clicking button", async () => {
    user.setup();
    render(<Counter />);
    const incrementButtonElement = screen.getByRole("button", {
      name: "Increment",
    });
    await user.dblClick(incrementButtonElement);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

  it("renders a count of 10 after clicking the set button", async () => {
    user.setup();
    render(<Counter />);
    const amountInputElement = screen.getByRole("spinbutton");
    await user.type(amountInputElement, "10");
    expect(amountInputElement).toHaveValue(10);
    const setButtonElement = screen.getByRole("button", {
      name: "Set",
    });
    await user.click(setButtonElement);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  it("element focus in right order", async () => {
    user.setup();
    render(<Counter />);
    const amountInputElement = screen.getByRole("spinbutton");
    const setButtonElement = screen.getByRole("button", {
      name: "Set",
    });
    const incrementButtonElement = screen.getByRole("button", {
      name: "Increment",
    });
    await user.tab();
    expect(incrementButtonElement).toHaveFocus();
    await user.tab();
    expect(amountInputElement).toHaveFocus();
    await user.tab();
    expect(setButtonElement).toHaveFocus();
  });
});
