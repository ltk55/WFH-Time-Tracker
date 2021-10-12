import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import { AttDataContextProvider } from "../../context/AttDataContext";
import "@testing-library/jest-dom";
import App from "../../App";
import userEvent from "@testing-library/user-event";

it("full app rendering/navigating", () => {
  const history = createMemoryHistory();
  render(
    <AttDataContextProvider>
      <Router history={history}>
        <App />
      </Router>
    </AttDataContextProvider>
  );

  //Check if if route to Home page
  expect(screen.getByText(/Work Time Tracker/i)).toBeInTheDocument();

  //Check that the content changed Setting page
  const leftClick = { button: 0 };
  userEvent.click(screen.getByTestId("setting-logo"), leftClick);
  expect(screen.getByText(/Year/i)).toBeInTheDocument();
});
