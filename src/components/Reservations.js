import "../css/Reservations.css";
import ReservationForm from "./ReservationForm";

export default function Reservations({ availableTimes, dispatch }) {
  return (
    <div aria-labelledby="reserve-table" className="reservations wrapper">
      <h1 id="reserve-table">Reserve Your Table</h1>
      <p>
        We can't wait to have you over! Please fill out the form below to
        reserve your table.
      </p>
      <ReservationForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}
