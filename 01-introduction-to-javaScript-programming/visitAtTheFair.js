const entries = ['11 7', '-11 6', '11 -2'];

entries.forEach((entry) => {
  sum(entry);
});

function sum(entry) {
  let line = entry.split(" ");
  let a = parseInt(line[0]);
  let b = parseInt(line[1]);
  let total = a + b;
  console.log("Entry = "+ line +" / X = " + total); 
}