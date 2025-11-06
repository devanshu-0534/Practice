const findMin = (arr, n) => {
    if (n === 1) return arr[0];
    return Math.min(arr[n - 1], findMin(arr, n - 1));
};
console.log(findMin([2,3,1], 3));

