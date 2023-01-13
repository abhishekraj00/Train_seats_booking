import { useState } from "react";
import Booking from "./pages/Booking";
import seats from "./util/seats";
import Home from "./pages/Home";


function App() {
  const [seat_no,setSeat_no] = useState([...seats])
  return (
    <>
      <div className="main_container">
        {/* <Home /> */}
        <Booking seat_no={seat_no}/>
      </div>
    </>
  );
}

export default App;
