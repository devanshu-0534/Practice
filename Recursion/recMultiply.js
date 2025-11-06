function multiplyRecursively(n, m) {
  //Write code here and print output
    if (m === 0) {
    console.log(0);
    return;
  }
    function helper(a, b) {
    if (b === 0) return 0;
    if (b > 0) return a + helper(a, b - 1);
    return -helper(a, -b); 
  }
 console.log(helper(5, 6));
}
multiplyRecursively(12,5);
