import Main from "../../pages/Main";
import { render, waitFor, act } from "@testing-library/react";
import { fetchAPI } from "../../scripts/masterapi";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("../../scripts/masterapi", () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
}));

describe("Main component", () => {
  test("should initialize with today's date on mount", async () => {
    fetchAPI.mockResolvedValue(["17:00", "20:00", "21:00"]);
    render(
      <Router>
        <Main />
      </Router>
    );

    await waitFor(() =>
      expect(fetchAPI).toHaveBeenCalledWith(
        new Date().toISOString().split("T")[0]
      )
    );
  });

  test("should update times when date changes", async () => {
    const initialTimes = ["17:00", "20:00", "21:00"];
    const newTimes = ["18:00", "19:00", "20:00"];
    fetchAPI.mockResolvedValueOnce(initialTimes).mockResolvedValueOnce(newTimes);
    render(
      <Router>
        <Main />
      </Router>
    );

    // Simulate a date change
    const newDate = "2024-03-31";
    await act(async () => {
      await fetchAPI(newDate);
    });

    expect(fetchAPI).toHaveBeenCalledTimes(2);
    expect(fetchAPI).toHaveBeenCalledWith(newDate);
  });
});
