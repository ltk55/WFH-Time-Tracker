import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "../Header";

let getByTestId;

beforeEach(() => {
  const component = render(<Header />);
  getByTestId = component.getByTestId;
});

describe("component render", () => {
  it("render header", () => {
    const el = getByTestId("header-logo");
    expect(el).toBeInTheDocument();
  });

  it("render setting", () => {
    const el = getByTestId("header-logo");
    expect(el).toBeInTheDocument();
  });

  // it("header link", async () => {
  //   const el = screen.getByTestId("header-logo");

  //   fireEvent.click(el);
  //   expect(el).toBeInTheDocument();
  // });
});
