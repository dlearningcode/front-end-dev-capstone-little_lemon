import "../css/Reservations.css";
import ReservationForm from "../components/ReservationForm";

export default function Reservations({ availableTimes, fetchTimes, submitForm }) {
  return (
    <>
      <div aria-labelledby="reserve-table" className="reservations wrapper">
        <h1 id="reserve-table">Reserve Your Table</h1>
        <p>
          We can't wait to have you over! Please fill out the form below to
          reserve your table.
        </p>
        <ReservationForm
          availableTimes={availableTimes}
          fetchTimes={fetchTimes}
          submitForm={submitForm}
        />
      </div>
    </>
  );
}
