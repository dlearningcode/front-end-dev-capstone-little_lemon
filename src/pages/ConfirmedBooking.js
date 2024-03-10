import "../css/ConfirmedBooking.css";

export default function ConfirmedBooking({ reservationInfo }) {
  return (
    <div className="confirmed-booking wrapper">
      <h1>Reservation Confirmed</h1>
      <p>
        Thank you for choosing Little Lemon! Your reservation is confirmed. We
        can't wait to see you!
      </p>
      <h4>Reservation Details:</h4>
      <p>
        <span>Date: {reservationInfo.reservationDate}</span>
        <br />
        <span>Time: {reservationInfo.reservationTime}</span>
        <br />
        <span>Guests: {reservationInfo.guestCount}</span>
        <br />
        <span>Occasion: {reservationInfo.occasion}</span>
      </p>
    </div>
  );
}
