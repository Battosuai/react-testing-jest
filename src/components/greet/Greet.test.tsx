import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

//Describe for grouping test. It also has skip and only. Describe block can be nested. Also can add multiple describe in single file
describe("Greet", () => {
  //   test("render", () => {
  //     render(<Greet />);
  //     const textElement = screen.getByText(/hello world/i);
  //     expect(textElement).toBeInTheDocument();
  //   });

  //Skip a test
  //   test.skip("render skip", () => {
  //     render(<Greet />);
  //     const textElement = screen.getByText(/hello world/i);
  //     expect(textElement).toBeInTheDocument();
  //   });

  //o nly test this test
  // test.only("Greet render only", () => {
  //   render(<Greet />);
  //   const textElement = screen.getByText(/hello /i);
  //   expect(textElement).toBeInTheDocument();
  // });

  //it is alternative to test. for skip xit, for only fit
  it("render it", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello world/i);
    expect(textElement).toBeInTheDocument();
  });

  it("render with name", () => {
    render(<Greet name="Big Damage" />);
    const textElement = screen.getByText(/hello big damage/i);
    expect(textElement).toBeInTheDocument();
  });

  xit("render xit", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello world/i);
    expect(textElement).toBeInTheDocument();
  });

  //   fit("render fit", () => {
  //     render(<Greet />);
  //     const textElement = screen.getByText(/hello world/i);
  //     expect(textElement).toBeInTheDocument();
  //   });
});
