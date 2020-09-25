const integerNumbers = [-5, 0, -3, -4, 12];

const numbersAnalysis = integerNumbers.reduce((total, number) => {
  return {
    totalPair: total.totalPair + isPair(number),
    totalOdd: total.totalOdd + isOdd(number),
    totalPositive: total.totalPositive + isPositive(number),
    totalNegative: total.totalNegative + isNegative(number)
  }
}, { totalPair: 0, totalOdd: 0, totalPositive: 0, totalNegative: 0 });

showResult(numbersAnalysis);

function showResult(numbers) {
  console.log(numbers.totalPair + " valor(es) par(es)");  
  console.log(numbers.totalOdd + " valor(es) ímpar(es)");  
  console.log(numbers.totalPositive + " valor(es) positivo(s)");  
  console.log(numbers.totalNegative + " valor(es) negativo(s)");  
}

function isPair (number) {
  if (number % 2 === 0) return 1;
  else return 0;
}

function isOdd (number) {
  if (number % 2 !== 0) return 1;
  else return 0;
}

function isPositive (number) {
  if (number > 0) return 1;
  else return 0;
}

function isNegative (number) {
  if (number < 0) return 1;
  else return 0;
}