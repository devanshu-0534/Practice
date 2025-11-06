// const currentDate = new Date();

// console.log(currentDate.getDate());
// console.log(currentDate.getMonth()+1);
// console.log(currentDate.getFullYear());

// console.log("Current Date: ",currentDate);


// currentDate.setFullYear(2022);
// console.log("After setFullYear: ", currentDate);

// console.log("time in miliseconds since 2022: ",currentDate.getTime());


function calculateSum (n){
     let a = 0;
     for(let i=0;i<=n;i++){
        a = a + i
     }
     return a;
}

const beforeDate = new Date();
const beforTimeInMs = beforeDate.getTime();
console.log(beforTimeInMs)
calculateSum(1000000);
const afterDate = new Date();
const afterDateInMs = afterDate.getTime();
console.log(afterDateInMs)

console.log(afterDateInMs - beforTimeInMs);