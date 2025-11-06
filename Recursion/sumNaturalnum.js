function sumNaturalnum(n){
    if(n===1){
        return 1;
    }
    else{
        return n+sumNaturalnum(n-1);
    }
}
console.log(sumNaturalnum(5));