let entries = ['3 9', '-30 10', '0 9'];
entries.forEach((entry) => {
  let line = entry.split(" ");
  let a = parseInt(line[0]);
  let b = parseInt(line[1]);
  let total = a * b;
  console.log("Entry = "+ line +" / X = " + total);
});