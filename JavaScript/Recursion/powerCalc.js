function power(x, y) {
 // Write your code here
  if (y === 0) return 1;

  let half = power(x, Math.floor(y / 2));

  if (y % 2 === 0) {
    return half * half;
  } else {
    return x * half * half;
  }
}
console.log(power(2,3));