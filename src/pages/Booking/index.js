import React from "react";
import "./booking.css";

function Booking({seat_no}) {
  return (
    <div className="seats_container">
      {seat_no.map((e,i) =>(
        <input className="seats" type={"button"} key={i} value={`${e.seat_no}🪑`} />
      )
      )}
    </div>
  );
}

export default Booking;
