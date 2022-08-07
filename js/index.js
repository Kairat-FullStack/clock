const save = function(arr, a=3){
    if(a == 0) return arr;
    for(let i = 0; i < a; i++){
        let summ = arr.pop()
        arr.unshift(summ) 
    }
    console.log(arr ,a);
}
save([123, 23, 5, 6])
save([123, 23, 5, 6], 0)
save([123, 23, 5, 6], 5)
save([123, 23, 5, 6], 2022)

// console.log();
