const numbers = [['6'], ['10'], ['8'], ['20']];
numbers.forEach((num) => {
  let arrayFromEachNumber = createArrayFromNumber(parseInt(num));
  filterPairNumbers(arrayFromEachNumber);
});

const number = '13';
const arrayFromNumber = createArrayFromNumber(parseInt(number));
filterPairNumbers(arrayFromNumber);


function createArrayFromNumber(number) {
  let arrayFromNumber = Array.from({length: number + 1}, (v, k) => k)
    .filter((number) => number > 0);
  return arrayFromNumber;
}

function filterPairNumbers(numbers) {
  let showPair = numbers.filter(isPair);
  showPair.forEach(showPairNumbers);
  console.log("\n");
}

function showPairNumbers(value) {
  console.log(value);
}

function isPair(value) {
  return value % 2 == 0;
}