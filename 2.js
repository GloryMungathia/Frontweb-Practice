function sumUpTo(max){
    let total = 0;
    for(let i=3; i<=max; i++){//i is for counterso the counter starts at the number that represents 1
        total +=i;
    }
    return total;
}
console.log(sumUpTo(10));