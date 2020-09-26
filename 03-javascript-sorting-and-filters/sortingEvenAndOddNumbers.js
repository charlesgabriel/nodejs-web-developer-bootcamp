// const N = gets();

// const numberList = [];

// for (let i = 0; i < N; i++) {
//   numberList.push(gets());
// }

const numberList = [10, 4, 32, 34, 543, 3456, 654, 567, 87, 6789, 98];

orderList(numberList);

function orderList(numberList) {
  numberList.join();
  let evenNumberList = getEvenNumbers(numberList);
  let oddNumberList = getOddNumbers(numberList);
  let orderedList = [];
  
  evenNumberList.sort(evenNumberOrder);
  oddNumberList.sort(oddNumberOrder);

  orderedList = evenNumberList.concat(oddNumberList);

  orderedList.forEach((number) => console.log(number));
}

function getEvenNumbers(numberList) {
  return numberList.filter((num) => num % 2 ===0);
}

function evenNumberOrder(a, b) {
  return a - b;
}

function getOddNumbers(numberList) {
  return numberList.filter((num) => num % 2 !==0);
}

function oddNumberOrder(a, b) {
  return b - a;
}