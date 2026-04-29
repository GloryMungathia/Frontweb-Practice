function findCheck(arr, target){ 
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
    console.log("Found it!");
     return;
  }
    }
    console.log("Not found.");
}

const items = ["apple", "banana", "cherry"];
findCheck(items, "banana");
