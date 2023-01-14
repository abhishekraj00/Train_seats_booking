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

export const changeSeatStatus = (arr = [[9]], noOfSeats) => {
  let b = bookedSeats(arr);
  let a = availableSeats(arr);
  if (noOfSeats > a) {
    alert("Not Enough seats Avilable");
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    let avilableSeats = arr[i].filter((item) => item.booked === false).length;
    console.log(avilableSeats);
    console.log(+noOfSeats);

    if (avilableSeats === +noOfSeats) {
      for (let j = 0; j < arr[i].length && noOfSeats > 0; j++) {
        if (!arr[i][j].booked) {
          noOfSeats--;
          arr[i][j].booked = true;
        }
      }
    }
  }

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

  console.log(b);
  console.log(a);
  console.log("------");
  return arr;
};


