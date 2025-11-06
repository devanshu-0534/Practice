function isPalindrome(arr, n) {
  let res = isPalindromic(arr, 0, n - 1);
  if (res === 1)
    return true;
  return false;
}

function isPalindromic(arr, begin, end) {
    if (begin >= end) {
    return 1;
  }

  if (arr[begin] !== arr[end]) {
    return 0;
  }

  return isPalindromic(arr, begin + 1, end - 1);
}

console.log(isPalindrome([4,3,10,6], 4));
console.log(isPalindrome([1, 2, 3, 2, 1], 5));
console.log(isPalindrome([5, 5], 2)); 
console.log(isPalindrome([7], 1)); 