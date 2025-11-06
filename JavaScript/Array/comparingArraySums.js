const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
  if (input.length === 4) {   // ✅ run automatically after 4 lines
    rl.close();
  }
});

rl.on('close', () => {
  let n = parseInt(input[0]);
  let arrA = input[1].split(' ').map(Number);
  let m = parseInt(input[2]);
  let arrB = input[3].split(' ').map(Number);
  console.log(arrayProblem(arrA, arrB));
});

function arrayProblem(arrA, arrB){
    let arraySumA = 0;
    for(let i=0; i<arrA.length; i++){
        arraySumA += arrA[i];
    }

    let arraySumB = 0;
    for(let j=0; j<arrB.length; j++){
        arraySumB += arrB[j];
    }

    if(arraySumA > arraySumB){
        return "First array is larger";
    }else if(arraySumA === arraySumB){
       return "Both arrays are equal";
    }else{
        return "Second array is larger";
    }
}

