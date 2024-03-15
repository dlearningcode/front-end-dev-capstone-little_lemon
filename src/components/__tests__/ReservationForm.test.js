import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReservationForm from "../ReservationForm";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useReducer: () => [jest.fn(), mockDispatch],
}));

let fetchTimes;
let submitForm;
let mockDispatch;
beforeEach(() => {
  fetchTimes = jest.fn();
  submitForm = jest.fn();
  mockDispatch = jest.fn();
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

  const dateInput = screen.getByLabelText(
    "Enter or select the date of your reservation"
  );
  fireEvent.change(dateInput, { target: { value: "2024-03-31" } });

  expect(fetchTimes).toHaveBeenCalledWith("2024-03-31");
});

test("submitForm is called with the form data when the form is submitted", async () => {
  const availableTimes = ["17:00", "18:00", "21:00"];
  const fetchTimes = jest.fn();
  const submitForm = jest.fn();
  const today = "2024-03-13";

  render(
    <ReservationForm
      availableTimes={availableTimes}
      fetchTimes={fetchTimes}
      submitForm={submitForm}
      today={today}
    />
  );

  fireEvent.change(
    screen.getByLabelText(/Enter or select the date of your reservation/),
    {
      target: { value: "2025-01-01" },
    }
  );
  fireEvent.change(
    screen.getByLabelText(/Choose an available time on that date/),
    {
      target: { value: "18:00" },
    }
  );
  fireEvent.change(screen.getByLabelText(/Enter or select number of guests/), {
    target: { value: "2" },
  });
  fireEvent.change(
    screen.getByLabelText(/Choose the occasion for reservation/),
    {
      target: { value: "birthday" },
    }
  );

  fireEvent.click(screen.getByText(/Make Your Reservation/));

  await waitFor(() =>
    expect(submitForm).toHaveBeenCalledWith({
      reservationDate: "2025-01-01",
      reservationTime: "18:00",
      guestCount: "2",
      occasion: "birthday",
    })
  );
});

test("form will not submit formData with no fields filled", () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const fetchTimes = jest.fn();
  const submitForm = jest.fn();
  const today = "2024-03-13";

  render(
    <ReservationForm
      availableTimes={availableTimes}
      fetchTimes={fetchTimes}
      submitForm={submitForm}
      today={today}
    />
  );

  const submitButton = screen.getByRole("button", {
    name: "Make Your Reservation",
  });

  userEvent.click(submitButton);

  expect(submitForm).not.toHaveBeenCalled();
});

test("displays error messages for invalid input", async () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const fetchTimes = jest.fn();
  const submitForm = jest.fn();
  const today = "2024-03-13";

  // Mock window.alert
  const mockAlert = jest.spyOn(window, "alert").mockImplementation(() => {});

  render(
    <ReservationForm
      availableTimes={availableTimes}
      fetchTimes={fetchTimes}
      submitForm={submitForm}
      today={today}
    />
  );

  const reservationDateInput = screen.getByLabelText(
    /Enter or select the date of your reservation/i
  );
  const reservationTimeSelect = screen.getByLabelText(
    "Choose an available time on that date"
  );
  const guestCountInput = screen.getByLabelText(
    "Enter or select number of guests"
  );
  const occasionSelect = screen.getByLabelText(
    "Choose the occasion for reservation"
  );

  // Set reservationDateInput to a past date
  fireEvent.change(reservationDateInput, { target: { value: "2020-01-01" } });

  // Set guestCountInput to a number between 11 and 50
  fireEvent.change(guestCountInput, { target: { value: "15" } });

  fireEvent.blur(reservationDateInput);
  fireEvent.blur(reservationTimeSelect);
  fireEvent.blur(guestCountInput);
  fireEvent.blur(occasionSelect);

  await screen.findByText(/Please choose a date today or in the future/i);
  await screen.findByText("Please choose an available time");
  // await screen.findByText("Please enter the number of guests");
  await screen.findByText("Please choose an occasion");

  // Check if window.alert has been called with the correct argument
  expect(mockAlert).toHaveBeenCalledWith(
    "Please call us at (217) 555-1234 to schedule an event for 11 to 50 guests"
  );
});

test("does not display error messages for valid input", async () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const fetchTimes = jest.fn();
  const submitForm = jest.fn();
  const today = "2024-03-13";

  render(
    <ReservationForm
      availableTimes={availableTimes}
      fetchTimes={fetchTimes}
      submitForm={submitForm}
      today={today}
    />
  );

  const reservationDateInput = screen.getByLabelText(
    "Enter or select the date of your reservation"
  );
  const reservationTimeSelect = screen.getByLabelText(
    "Choose an available time on that date"
  );
  const guestCountInput = screen.getByLabelText(
    "Enter or select number of guests"
  );
  const occasionSelect = screen.getByLabelText(
    "Choose the occasion for reservation"
  );

  fireEvent.change(reservationDateInput, { target: { value: today } });
  fireEvent.change(reservationTimeSelect, { target: { value: "18:00" } });
  fireEvent.change(guestCountInput, { target: { value: "5" } });
  fireEvent.change(occasionSelect, { target: { value: "birthday" } });

  fireEvent.blur(reservationDateInput);
  fireEvent.blur(reservationTimeSelect);
  fireEvent.blur(guestCountInput);
  fireEvent.blur(occasionSelect);

  await waitFor(() =>
    expect(
      screen.queryByText("Please choose a date today or in the future")
    ).not.toBeInTheDocument()
  );
  await waitFor(() =>
    expect(
      screen.queryByText("Please choose an available time")
    ).not.toBeInTheDocument()
  );
  await waitFor(() =>
    expect(
      screen.queryByText("Please enter the number of guests")
    ).not.toBeInTheDocument()
  );
  await waitFor(() =>
    expect(
      screen.queryByText("Please choose an occasion")
    ).not.toBeInTheDocument()
  );
});
