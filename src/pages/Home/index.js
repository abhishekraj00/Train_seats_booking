import React from "react";
import "./home.css";

function Home() {
  return (
    <>
      <div className="home_page">
        <h1>Online Train Tickets</h1>
        <h3>Booking App 🚊</h3>
        <br />
      </div>

      <label>
        Enter Username <input type={"text"} />
      </label>
      <label>
        Enter Number of Seats Required <input type={"number"}/>
      </label>

      <div className="booking">
        <br />
        <br />
        <button>Book Tickets Now</button>
        <br />
        <br />
        <h4>Total Seats Avilable</h4>
        <h1>80</h1>
      </div>
    </>
  );
}

export default Home;
