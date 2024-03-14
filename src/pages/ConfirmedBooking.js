import "../css/ConfirmedBooking.css";
import { Link } from "react-router-dom";

export default function ConfirmedBooking({ reservationInfo }) {
  let confirmedOccasion = "";

  switch (reservationInfo.occasion) {
    case "birthday":
      confirmedOccasion = "Birthday";
      break;
    case "anniversary":
      confirmedOccasion = "Anniversary";
      break;
    case "engagement":
      confirmedOccasion = "Engagement";
      break;
    case "other":
      confirmedOccasion = "Other Celebration";
      break;
    default:
      confirmedOccasion = "A Good Meal and a Good Time";
  }

  return (
    <div className="confirmed-booking text-wrapper">
      <h1>Reservation Confirmed</h1>
      <p>
        Thank you for choosing Little Lemon! Your reservation is confirmed. We
        can't wait to see you!
      </p>
      <div className="res-details">
        <h4>Reservation Details:</h4>
        <p>
          <span>Date: {reservationInfo.reservationDate}</span>
          <br />
          <span>Time: {reservationInfo.reservationTime}</span>
          <br />
          <span>Guests: {reservationInfo.guestCount}</span>
          <br />
          <span>Occasion: {confirmedOccasion}</span>
        </p>
        <button
          onClick={() => window.print()}
          className="button button-primary-1"
        >
          Print Reservation
        </button>
        <div className="new-reservation">
          <Link to="/reservations" className="">
            Schedule another reservation
          </Link>
        </div>
      </div>
    </div>
  );
}
