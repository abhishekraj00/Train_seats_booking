import React, { useEffect, useState } from "react";
import { availableSeats, changeSeatStatus } from "../../util/commonFunctions";
import Booking from "../Booking";
import "./home.css";
import seatsArr from '../../util/seats'

function Home() {
  const [seatsWanted, setSeatsWanted] = useState("");
  const [error, setError] = useState(false);
  const [error1, setError1] = useState(false);

  const [seatStatus, setStatus] = useState(seatsArr);

  const handeleBooking = () => {
    if (!seatsWanted) {
      setError1("⚠️Select Seat First");
    } else {
      setError1(false);
      setStatus([...changeSeatStatus(seatStatus, seatsWanted)]);
      setSeatsWanted('');
    }
    
  };

  useEffect(() => {
    if (seatsWanted > 7) {
      setError(" ⚠️can't Booked more than 7 seats at one time");
    } else {
      setError(false);
    }

    if (seatsWanted) {
      setError1(false);
    }

    if(availableSeats(seatStatus) < seatsWanted){
      setError(" ⚠️oops Not Enough Seats Avilabe");
    }
  }, [seatsWanted,seatStatus]);

  return (
    <div className="main_container_ticket">
      <div>
        <div className="home_page">
          <h1>Online Train Tickets</h1>
          <h3>Booking App 🚊</h3>
          <br />
          <h1>Welcome!</h1>
        </div>

        <input
          placeholder="Enter Number of Seats"
          type={"number"}
          value={seatsWanted}
          onChange={(e) => setSeatsWanted(e.target.value)}
        />
        {error && <p className="error_mess">{error}</p>}

        <div className="booking">
          <br />
          <br />
          <button onClick={handeleBooking}>Book Tickets Now</button>
          <br />
          <br />
          <h4>Total Seats Avilable</h4>
          {error1 && <p className="error1_mess">{error1}</p>}

          <h1>{availableSeats(seatStatus)}</h1>
        </div>
      </div>
      <div>
        <Booking seatStatus={seatStatus} />
      </div>
    </div>
  );
}

export default Home;
