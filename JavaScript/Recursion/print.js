const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  solve(parseInt(n));
  readline.close();
});

function solve(n) {
  // Your code here 
  if (n <= 0) {
    return;
  }
  console.log("ACCIOJOB");
  solve(n-1);
}
console.log("Enter Number: ")