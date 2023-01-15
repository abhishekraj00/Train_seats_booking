// logic to cheack number of available Seats
export const availableSeats = (arr) => {
  let c = 0;
  arr.forEach((item) =>
    item.forEach((item) => {
      if (!item.booked) {
        c++;
      }
    })
  );

  return c;
};

// logic to cheack number of booked Seats
export const bookedSeats = (arr) => {
  let c = 0;
  arr.forEach((item) =>
    item.forEach((item) => {
      if (item.booked) {
        c++;
      }
    })
  );

  return c;
};

// function to booked seat as per desired
export const changeSeatStatus = (arr = [[9]], noOfSeats) => {
  let a = availableSeats(arr);
  if (noOfSeats > a) {
    alert("Not Enough seats Avilable");
    return;
  }

  // logic for getting exact seat to be booked
  for (let i = 0; i < arr.length; i++) {
    //itrate on arrays to get seats avilabe;
    let avilableSeats = arr[i].filter((item) => item.booked === false).length;

    if (avilableSeats === +noOfSeats) {
      for (let j = 0; j < arr[i].length && noOfSeats > 0; j++) {
        if (!arr[i][j].booked) {
          noOfSeats--;
          arr[i][j].booked = true;
        }
      }
    }
  }

  //logic for getting seats booked if seats avilable more than desired seats
  for (let i = 0; i < arr.length; i++) {
    let avilableSeats = arr[i].filter((item) => item.booked === false).length;

    if (avilableSeats > +noOfSeats) {
      for (let j = 0; j < arr[i].length && noOfSeats > 0; j++) {
        if (!arr[i][j].booked) {
          noOfSeats--;
          arr[i][j].booked = true;
        }
      }
    }
  }
  return arr;
};


