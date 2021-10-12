import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "../Header";
import React from "react";
import "@testing-library/jest-dom";

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
});
