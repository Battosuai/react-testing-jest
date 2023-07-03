import { screen, render } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  it("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  it("renders list item correctly", () => {
    render(<Skills skills={skills} />);
    const listItemElement = screen.getAllByRole("listitem");
    expect(listItemElement).toHaveLength(skills.length);
  });

  it("renders login button correctly", () => {
    render(<Skills skills={skills} />);
    const buttonElement = screen.getByRole("button", { name: "Login" });
    expect(buttonElement).toBeInTheDocument();
  });

  it("start learning button not in the document", () => {
    render(<Skills skills={skills} />);
    const buttonElement = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(buttonElement).not.toBeInTheDocument();
  });

  it("Start learning eventually appears", async () => {
    render(<Skills skills={skills} />);
    const buttonElement = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      { timeout: 2000 }
    );
    expect(buttonElement).toBeInTheDocument();
  });
});
