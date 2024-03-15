import "../css/Reservations.css";
import ReservationForm from "../components/ReservationForm";

export default function Reservations({
  availableTimes,
  fetchTimes,
  submitForm,
  today,
}) {
  return (
    <>
      <section aria-labelledby="reserve-table-page">
        <div className="reservations text-wrapper">
          <h1 id="reserve-table-page">Reserve Your Table</h1>
          <p>
            We can't wait to have you over! Please fill out the form below to
            reserve your table.
          </p>
        </div>
        <ReservationForm
          availableTimes={availableTimes}
          fetchTimes={fetchTimes}
          submitForm={submitForm}
          today={today}
        />
      </section>
    </>
  );
}
