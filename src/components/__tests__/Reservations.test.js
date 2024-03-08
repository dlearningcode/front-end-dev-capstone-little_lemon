import React from "react";
import { render, screen } from "@testing-library/react";
import Reservations from "../Reservations";
// write a unit test that confirms the presence of the "Reserve Your Table" heading in the Reservations component.
// Make sure the test doesn't go beyond the scope of the Reservations component.

// Mock ReservationForm component
jest.mock("../ReservationForm", () => () => <div>Mock ReservationForm</div>);

test("renders Reserve Your Table heading", () => {
  const mockAvailableTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
  const mockDispatch = jest.fn();
  render(
    <Reservations availableTimes={mockAvailableTimes} dispatch={mockDispatch} />
  );
  const headingElement = screen.getByText("Reserve Your Table");
  expect(headingElement).toBeInTheDocument();
});
