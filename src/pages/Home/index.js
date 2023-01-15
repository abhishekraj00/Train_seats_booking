import React, { useEffect, useState } from "react";
import { availableSeats, changeSeatStatus } from "../../util/commonFunctions";
import Booking from "../Booking";
import "./home.css";
import seatsArr from "../../util/seats";

function Home() {
  //state of no. of seats wanted
  const [seatsWanted, setSeatsWanted] = useState("");

  //collection of states for updating error messages
  const [error, setError] = useState(false);
  const [error1, setError1] = useState(false);

  //all seats Staus(booked/unbooked) collection state
  const [seatStatus, setStatus] = useState(seatsArr);

  // function which will be call on booking button click
  const handeleBooking = () => {
    if (!seatsWanted) {
      // if users try to book seat before giving input in the input box
      setError1("⚠️Select Seat First");
    } else {
      //if input is valid booking will get proceeds

      // set error to deafult if it get updated
      setError1(false);

      //booking function invocation and updateing the seats state
      setStatus([...changeSeatStatus(seatStatus, seatsWanted)]);
      setSeatsWanted("");
    }
  };

  useEffect(() => {
    //user can't booked seats more then 7 at one time
    if (seatsWanted > 7) {
      setError(" ⚠️can't Booked more than 7 seats at one time");
    } else {
      setError(false);
    }

    //error showing bellow button get reset if user againg fill data in input box
    if (seatsWanted) {
      setError1(false);
    }

    //if seats avilable is less than of desired value
    if (availableSeats(seatStatus) < seatsWanted) {
      setError(" ⚠️oops Not Enough Seats Avilabe");
    }

    //dependacy arrays seats no input and seats status get change
  }, [seatsWanted, seatStatus]);

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
        {/* elements are responsible for showing error message in ui*/}
        {error && <p className="error_mess">{error}</p>}

        <div className="booking">
          <br />
          <br />
          <button onClick={handeleBooking}>Book Tickets</button>
          <br />
          <br />
          <h4>Total Seats Available</h4>
          {/* elements are responsible for showing error message in ui*/}
          {error1 && <p className="error1_mess">{error1}</p>}

          {/* calling avialable function for getting avilable seats*/}
          <h1>{availableSeats(seatStatus)}</h1>
        </div>
      </div>
      <div>
        {/* passing seats data to get map in the booking components*/}
        <Booking seatStatus={seatStatus} />
      </div>
    </div>
  );
}

export default Home;
