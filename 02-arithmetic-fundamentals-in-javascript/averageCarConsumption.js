const kmFuel = '500 35.0';
calcAverageCarConsumption(kmFuel);

const kmFuelArray = ['500 35.0', '2254 124.4', '4554 464.6'];
kmFuelArray.forEach((kmFuel) => {
  calcAverageCarConsumption(kmFuel);
});

function calcAverageCarConsumption (kmAndFuel) {
  let line = kmAndFuel.split(" ");
  let km = parseInt(line[0]);
  let fuel = parseInt(line[1]);
  let total = km / fuel;
  console.log(total.toFixed(3) +" km/l");
}
