const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  readline.question('', arr => {
    arr = arr.split(' ').map(Number);
    let ans = ArrayProblem6(n, arr);
    console.log(ans);
    readline.close();
  });
});

function ArrayProblem6(n, arr) {
  // Write code here
  let prevIndex = -1;
  let minDistance = Infinity;

  for (let i = 0; i < n; i++) {
    if (arr[i] > 0 && arr[i] % 2 === 0) { 
      if (prevIndex !== -1) {
        minDistance = Math.min(minDistance, i - prevIndex);
      }
      prevIndex = i;
    }
  }

  return minDistance === Infinity ? -1 : minDistance;
}
  
