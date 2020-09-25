// const moneyValue = 576;
// calculationBankNotes(moneyValue);

const moneyValues = ['576','11257','503','89','1850'];
moneyValues.forEach((moneyValue) => {
  calculationBankNotes(parseInt(moneyValue));
});

function calculationBankNotes (moneyValue){
  if (moneyValue > 0 && moneyValue < 1000000) {
    let newMoney = moneyValue;
    let bankNotes = [100, 50, 20, 10, 5, 2, 1];
    let totalBankNotes = [];
    totalBankNotes = bankNotes.map((note) => {
      let count = 0;
      while (newMoney >= note) {
        newMoney = newMoney - note;
        count++;
      }
      return count;
    });

    showBankNotes(totalBankNotes);

    function showBankNotes(notes) {
      console.log(moneyValue);
      console.log(notes[0] + " nota(s) de R$ 100,00");
      console.log(notes[1] + " nota(s) de R$ 50,00");
      console.log(notes[2] + " nota(s) de R$ 20,00");
      console.log(notes[3] + " nota(s) de R$ 10,00");
      console.log(notes[4] + " nota(s) de R$ 5,00");
      console.log(notes[5] + " nota(s) de R$ 2,00");
      console.log(notes[6] + " nota(s) de R$ 1,00");
    }
  }
}