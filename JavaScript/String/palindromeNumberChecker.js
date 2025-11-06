const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  //Write your code here and print the required output
  n = parseInt(n); 
  let reverse = 0;
  let temp = n;
  while(temp != 0){
    reverse = (reverse*10)+(temp%10);
    temp = Math.floor(temp/10);
  }
  
  if (reverse === n) {
    console.log("true");
  }else {
    console.log("false");
  }
  readline.close();
});