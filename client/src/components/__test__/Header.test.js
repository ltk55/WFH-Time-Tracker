import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "../Header";

describe("component render", () => {
  it("render header", async () => {
    render(<Header />);

    const item = screen.getByTestId("header-logo");
    expect(item).toBeInTheDocument();
  });

  it("render setting", async () => {
    render(<Header />);

    const item = screen.getByTestId("setting-logo");
    expect(item).toBeInTheDocument();
  });
});
