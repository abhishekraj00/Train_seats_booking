export const seats = [
  [
    { seat_no: 1, booked: false },
    { seat_no: 2, booked: false },
    { seat_no: 3, booked: false },
    { seat_no: 4, booked: false },
    { seat_no: 5, booked: false },
    { seat_no: 6, booked: false },
    { seat_no: 7, booked: false },
  ],
  [
    { seat_no: 8, booked: false },
    { seat_no: 9, booked: false },
    { seat_no: 10, booked: false },
    { seat_no: 11, booked: false },
    { seat_no: 12, booked: false },
    { seat_no: 13, booked: false },
    { seat_no: 14, booked: false },
  ],
  [
    { seat_no: 15, booked: false },
    { seat_no: 16, booked: false },
    { seat_no: 17, booked: false },
    { seat_no: 18, booked: false },
    { seat_no: 19, booked: false },
    { seat_no: 20, booked: false },
    { seat_no: 21, booked: false },
  ],
  [
    { seat_no: 22, booked: false },
    { seat_no: 23, booked: false },
    { seat_no: 24, booked: false },
    { seat_no: 25, booked: false },
    { seat_no: 26, booked: false },
    { seat_no: 27, booked: false },
    { seat_no: 28, booked: false },
  ],
  [
    { seat_no: 29, booked: false },
    { seat_no: 30, booked: false },
    { seat_no: 31, booked: false },
    { seat_no: 32, booked: false },
    { seat_no: 33, booked: false },
    { seat_no: 34, booked: false },
    { seat_no: 35, booked: false },
  ],
  [
    { seat_no: 36, booked: false },
    { seat_no: 37, booked: false },
    { seat_no: 38, booked: false },
    { seat_no: 39, booked: false },
    { seat_no: 40, booked: false },
    { seat_no: 41, booked: false },
    { seat_no: 42, booked: false },
  ],
  [
    { seat_no: 43, booked: false },
    { seat_no: 44, booked: false },
    { seat_no: 45, booked: false },
    { seat_no: 46, booked: false },
    { seat_no: 47, booked: false },
    { seat_no: 48, booked: false },
    { seat_no: 49, booked: false },
  ],
  [
    { seat_no: 50, booked: false },
    { seat_no: 51, booked: false },
    { seat_no: 52, booked: false },
    { seat_no: 53, booked: false },
    { seat_no: 54, booked: false },
    { seat_no: 55, booked: false },
    { seat_no: 56, booked: false },
  ],
  [
    { seat_no: 57, booked: false },
    { seat_no: 58, booked: false },
    { seat_no: 59, booked: false },
    { seat_no: 60, booked: false },
    { seat_no: 61, booked: false },
    { seat_no: 62, booked: false },
    { seat_no: 63, booked: false },
  ],
  [
    { seat_no: 64, booked: false },
    { seat_no: 65, booked: false },
    { seat_no: 66, booked: false },
    { seat_no: 67, booked: false },
    { seat_no: 68, booked: false },
    { seat_no: 69, booked: false },
    { seat_no: 70, booked: false },
  ],
  [
    { seat_no: 71, booked: false },
    { seat_no: 72, booked: false },
    { seat_no: 73, booked: false },
    { seat_no: 74, booked: false },
    { seat_no: 75, booked: false },
    { seat_no: 76, booked: false },
    { seat_no: 77, booked: false },
  ],
  [
    { seat_no: 78, booked: false },
    { seat_no: 79, booked: false },
    { seat_no: 80, booked: false },
  ],
];


function generateFun(totalseat, row) {
  let fullRow = Math.floor(totalseat / row);
  let lastRowSeats = totalseat % row;
  let arr = [];
  let number = 1;

  for (let i = 1; i <= fullRow; i++) {
    let rowArr = [];
    for (let j = 1; j <= row; j++) {
      rowArr.push({ seat_no: number, booked: false });
      number++;
    }
    arr.push(rowArr);
  }
  if (lastRowSeats) {
    let rowArr = [];
    while (lastRowSeats-- > 0) {
      rowArr.push({ seat_no: number, booked: false });
      number++;
    }
    arr.push(rowArr);
  }
  console.log(arr);
  return arr;
}

const seatsArr = generateFun(80, 7);

export default seatsArr;
