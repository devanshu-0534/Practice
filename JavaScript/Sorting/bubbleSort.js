function bubble_Sort(N,arr){
    for(let i=0;i<N-1;i++){
        let swapped  = false;
        for(let j=0;j<N-i-1;j++){
            if(arr[j]<arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
}

console.log(bubble_Sort(10, [29,10,14,37,14,12,32,4,5,10]).join(',')); 