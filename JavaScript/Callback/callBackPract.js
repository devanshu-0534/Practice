function calculateArithmatic(a, b, arithmaticFinalFunction){
    const ans = arithmaticFinalFunction(a,b)
    return ans;
}

function sum(a,b){
    return a+b;
}

function minus(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

const value = calculateArithmatic(4, 6, multiply)
console.log(value); m 