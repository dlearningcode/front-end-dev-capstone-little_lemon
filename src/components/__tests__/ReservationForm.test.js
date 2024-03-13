import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReservationForm from "../ReservationForm";

let fetchTimes;
let submitForm;
beforeEach(() => {
  fetchTimes = jest.fn();
  submitForm = jest.fn();
});

test("confirm that initializeTimes is called with today's date and generates available times on mount", () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(
    <ReservationForm availableTimes={availableTimes} fetchTimes={fetchTimes} />
  );
});

test("dispatches action with correct payload when reservationDate changes", () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(
    <ReservationForm
      availableTimes={availableTimes}
      fetchTimes={fetchTimes}
      submitForm={submitForm}
    />
  );

  const dateInput = screen.getByLabelText("Choose date for reservation");
  fireEvent.change(dateInput, { target: { value: "2024-03-31" } });

  expect(fetchTimes).toHaveBeenCalledWith("2024-03-31");
});

test("Make Your Reservation button functions with all fields entered", () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(
    <ReservationForm
      availableTimes={availableTimes}
      fetchTimes={fetchTimes}
      submitForm={submitForm}
    />
  );

  const dateInput = screen.getByLabelText("Choose date for reservation");
  fireEvent.change(dateInput, { target: { value: "2024-12-31" } });

  const timeInput = screen.getByLabelText(
    "Choose an available time for reservation"
  );
  fireEvent.change(timeInput, { target: { value: "18:00" } });

  const guestInput = screen.getByLabelText("Enter or select number of guests");
  fireEvent.change(guestInput, { target: { value: "4" } });

  const occasionInput = screen.getByLabelText(
    "Choose the occasion for reservation"
  );
  fireEvent.change(occasionInput, { target: { value: "birthday" } });

  const submitButton = screen.getByText("Make Your Reservation");
  fireEvent.click(submitButton);
  expect(submitForm).toHaveBeenCalledWith({
    reservationDate: "2024-12-31",
    reservationTime: "18:00",
    guestCount: "4",
    occasion: "birthday",
  });
});

test("Make Your Reservation button disabled without all fields entered", () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(
    <ReservationForm availableTimes={availableTimes} fetchTimes={fetchTimes} />
  );

  const dateInput = screen.getByLabelText("Choose date for reservation");
  fireEvent.change(dateInput, { target: { value: "2024-03-31" } });

  const timeInput = screen.getByLabelText(
    "Choose an available time for reservation"
  );
  fireEvent.change(timeInput, { target: { value: "18:00" } });

  const guestInput = screen.getByLabelText("Enter or select number of guests");
  fireEvent.change(guestInput, { target: { value: "4" } });

  const submitButton = screen.getByRole("button", {
    name: "Make Your Reservation",
  });
  fireEvent.click(submitButton);

  expect(submitButton).toHaveAttribute("disabled");
});

test("form validates required fields", () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(
    <ReservationForm availableTimes={availableTimes} fetchTimes={fetchTimes} />
  );

  const submitButton = screen.getByRole("button", {
    name: "Make Your Reservation",
  });

  userEvent.click(submitButton);

  expect(
    screen.getByText("Please choose a date today or in the future")
  ).toBeInTheDocument();
  expect(
    screen.getByText("Please choose an available time")
  ).toBeInTheDocument();
  expect(
    screen.getByText("Please enter the number of guests")
  ).toBeInTheDocument();
  expect(screen.getByText("Please choose an occasion")).toBeInTheDocument();
});

test("form validates valid and invalid inputs", () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(
    <ReservationForm availableTimes={availableTimes} fetchTimes={fetchTimes} />
  );

  const dateInput = screen.getByLabelText("Choose date for reservation");
  const timeInput = screen.getByLabelText(
    "Choose an available time for reservation"
  );
  const guestInput = screen.getByLabelText("Enter or select number of guests");
  const occasionInput = screen.getByLabelText(
    "Choose the occasion for reservation"
  );

  // Test with invalid inputs
  userEvent.type(dateInput, "2020-01-01");
  userEvent.selectOptions(timeInput, [""]);
  userEvent.type(guestInput, "11");
  userEvent.selectOptions(occasionInput, [""]);

  expect(
    screen.getByText("Please choose a date today or in the future")
  ).toBeInTheDocument();
  expect(
    screen.getByText("Please choose an available time")
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      "Please call us at (217) 555-1234 to schedule an event for 11 to 50 guests"
    )
  ).toBeInTheDocument();
  expect(screen.getByText("Please choose an occasion")).toBeInTheDocument();

  // Test with valid inputs
  userEvent.clear(dateInput);
  userEvent.clear(guestInput);
  userEvent.type(dateInput, "2024-03-31");
  userEvent.selectOptions(timeInput, ["18:00"]);
  userEvent.type(guestInput, "4");
  userEvent.selectOptions(occasionInput, ["birthday"]);

  expect(
    screen.queryByText("Please choose a date today or in the future")
  ).not.toBeInTheDocument();
  expect(
    screen.queryByText("Please choose an available time")
  ).not.toBeInTheDocument();
  expect(
    screen.queryByText(
      "Please call us at (217) 555-1234 to schedule an event for 11 to 50 guests"
    )
  ).not.toBeInTheDocument();
  expect(
    screen.queryByText("Please choose an occasion")
  ).not.toBeInTheDocument();
});
