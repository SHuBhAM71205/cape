
import React, { useState } from "react";
import { useEffect ,fetchAPI,submitAPI} from "react";
const BookingForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    if (date) {
      fetchAPI(date).then((times) => setAvailableTimes(times));
    }
  }, [date]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reservationDetails = { date, time, guests, occasion };
    const success = await submitAPI(reservationDetails);
    if (success) {
      alert("Reservation successfully submitted!");
    } else {
      alert("Failed to submit reservation. Please try again.");
    }
  };


  return (
<>
        <form onSubmit={handleSubmit} style={{ display: "flex",flexDirection:'column', justifyContent : 'center', maxWidth: "300px", gap: "20px" }}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} required />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
            <option value="">Select a time</option>
            {availableTimes.map((timeOption) => (
            <option key={timeOption} value={timeOption}>{timeOption}</option>
            ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input type="number" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} min="1" max="10" required />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
        </select>

        <button type="submit">Submit Reservation</button>
        </form>
        <table className="preview"table border="1">
            <tbody>
                <tr>
                    <td>Date</td>
                    <td>{date}</td>
                </tr>
                <tr>
                    <td>Time</td>
                    <td>{time}</td>
                </tr>
                <tr>
                    <td>Number of Guests</td>
                    <td>{guests}</td>
                </tr>
                <tr>
                    <td>Occasion</td>
                    <td>{occasion}</td>
                </tr>
            </tbody>
        </table>
    </>
  );
};

const BookingPage = () => {
  return (
    <div className="flex">
      <BookingForm />
        
    </div>
  );
};

export default BookingPage;
