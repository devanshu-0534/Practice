// nums - array aahe aani index - starting index that is 0
function array11(nums, index) {           
  if(index === nums.length) return 0;

  
  let count = (nums[index] === 11? 1:0)

  return count + array11(nums, index + 1);
  
}

console.log(array11([1,3,11,11,2], 0));


// Code Using Size(n) Instead of index
function array12(arr, n) {
  // Base Case
  if (n === 0) return 0;

  // Recursive case
  let count = (arr[n - 1] === 11 ? 1 : 0);

  return count + array12(arr, n - 1);
}
console.log(array12([1, 3, 11, 11, 2], 5));