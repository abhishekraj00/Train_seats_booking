import React from "react";
import "./booking.css";

function Booking({ seatStatus }) {
  return (
    <>
      <div className="Hint">
        <p className="hint_text">Avilable</p>
        <div className="Avilable"></div>
        <p className="hint_text">Booked</p>
        <div className="Booked"></div>
      </div>
      <div className="seats_container">
        {seatStatus.map((item) =>
          item.map((e, i) => (
            <input
              className="seats"
              type={"button"}
              key={i}
              value={`${e.seat_no}`}
              style={{
                backgroundColor: e.booked ? "#D8D9CF" : "#B3FFAE",

              }}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Booking;
