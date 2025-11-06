let n;
function printNumbers(n) {
  // Base case
  if (n === 0) return ;
  
  // Recursive call
  printNumbers(n - 1);
  
  // Print after recursion (ascending order)
  process.stdout.write(n + " ");
}

function printtillN(N) {
  // Write your code here
  if (N === 0) return;          
  process.stdout.write(N + " "); 
  printtillN(N - 1); 
}


printNumbers(10);
console.log("Reverse");
printtillN(5);