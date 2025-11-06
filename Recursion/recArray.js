function printArray(arr, n) {
  printArrayRecursive(arr, 0, n);
}

function printArrayRecursive(arr, i, n) {
  if (i === n) return;
  process.stdout.write(arr[i] + (i === n - 1 ? '' : ' '))
  printArrayRecursive(arr, i + 1, n);
}


function printReverseArray(arr, n) {
  printReverseArrayRecursive(arr, n - 1); 
}

function printReverseArrayRecursive(arr, i) {
  if (i < 0) return;

  process.stdout.write(arr[i] + (i === 0 ? '' : ' '));

  printReverseArrayRecursive(arr, i - 1);
}


printArray([1,2,3],3);
console.log(" ");
printReverseArray([1,2,3],3);


