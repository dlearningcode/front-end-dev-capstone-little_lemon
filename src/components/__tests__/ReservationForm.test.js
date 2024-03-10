import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ReservationForm from "../ReservationForm";

let fetchTimes;
let submitForm;
beforeEach(() => {
  fetchTimes = jest.fn();
  submitForm = jest.fn();
});

test("dispatches action with correct payload when reservationDate changes", () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(
    <ReservationForm availableTimes={availableTimes} fetchTimes={fetchTimes} submitForm={submitForm} />
  );

  const dateInput = screen.getByLabelText("Choose date for reservation");
  fireEvent.change(dateInput, { target: { value: "2024-03-31" } });

  expect(fetchTimes).toHaveBeenCalledWith("2024-03-31");
});

test("Make Your Reservation button functions with all fields entered", () => {
  // Mock console.log
  const consoleSpy = jest.spyOn(console, "log");
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(
    <ReservationForm availableTimes={availableTimes} fetchTimes={fetchTimes} submitForm={submitForm} />
  );

  const dateInput = screen.getByLabelText("Choose date for reservation");
  fireEvent.change(dateInput, { target: { value: "2024-03-31" } });

  const timeInput = screen.getByLabelText("Choose time for reservation");
  fireEvent.change(timeInput, { target: { value: "18:00" } });

  const guestInput = screen.getByLabelText("Enter or select number of guests");
  fireEvent.change(guestInput, { target: { value: "4" } });

  const occasionInput = screen.getByLabelText(
    "Choose the occasion for reservation"
  );
  fireEvent.change(occasionInput, { target: { value: "birthday" } });

  const submitButton = screen.getByText("Make Your Reservation");
  fireEvent.click(submitButton);

  expect(consoleSpy).toHaveBeenCalledWith({
    reservationDate: "2024-03-31",
    reservationTime: "18:00",
    guestCount: "4",
    occasion: "birthday",
  });
  expect(submitForm).toHaveBeenCalledWith({
    reservationDate: "2024-03-31",
    reservationTime: "18:00",
    guestCount: "4",
    occasion: "birthday",
  });

  // Restore console.log
  consoleSpy.mockRestore();
});

test("Make Your Reservation button disabled without all fields entered", () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(
    <ReservationForm availableTimes={availableTimes} fetchTimes={fetchTimes} />
  );

  const dateInput = screen.getByLabelText("Choose date for reservation");
  fireEvent.change(dateInput, { target: { value: "2024-03-31" } });

  const timeInput = screen.getByLabelText("Choose time for reservation");
  fireEvent.change(timeInput, { target: { value: "18:00" } });

  const guestInput = screen.getByLabelText("Enter or select number of guests");
  fireEvent.change(guestInput, { target: { value: "4" } });

  const submitButton = screen.getByRole("button", {
    name: "Make Your Reservation",
  });
  fireEvent.click(submitButton);

  expect(submitButton).toHaveAttribute("disabled");
});
