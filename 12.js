function findLargest(numbers){

    let largest = numbers[0];


     for(let i = 0; i < numbers.length; i++){
    if (numbers[i]>largest){
     largest= numbers[i];
    }
}
console.log(largest);
}
findLargest([3,17,8,22,5]);

function findSmallest(numbers){
    let smallest = numbers[0];

    for(let i = 0;i >numbers.length;i++){
    if(numbers[i]< smallest){
        smallest = numbers[i];
    }
}
    console.log(smallest);

}
findSmallest([3,17,8,22,5]);