function printXY(x, y) {
 //Write your code here
 if (x > y) return;

 process.stdout.write(x + (x === y ? "" : " "));

  printXY(x + 1, y);
}
printXY(8,3);