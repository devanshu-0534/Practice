const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  readline.question('', arr => {
    arr = arr.split(' ').map(Number);
    printRatios(arr);
    readline.close();
  });
});

function printRatios(arr) {
  // write code here
  let pos=0, neg=0,zero=0;
  let n = arr.length;
  for(let i = 0; i < arr.length; i++){
    if(arr[i]>0){
      pos++
    }
      else if(arr[i]<0){
      neg++
    }
      else
    {
      zero++
    }
  }
  console.log((pos/n).toFixed(6));
  console.log((neg/n).toFixed(6));
  console.log((zero/n).toFixed(6));
}