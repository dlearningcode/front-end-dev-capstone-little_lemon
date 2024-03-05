import "../css/Reservations.css";
import ReservationForm from "./ReservationForm";

export default function Reservations({ availableTimes, setAvailableTimes}) {
  return (
    <div className="reservations wrapper">
      <h1>Reservations</h1>
      <p>
        We are currently not accepting reservations. Please check back later.
      </p>
      <ReservationForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
    </div>
  );
}
