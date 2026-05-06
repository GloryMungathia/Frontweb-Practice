
function countVowels(text){
let vow="aeiouAEIOU";
let count=0;
for(let i of text){
if(vow.includes(i)){
count++

}
}
console.log(count);
}

countVowels("javascript");














































































// function countVowels(text) {

//     let vowels = "aeiou";

//     let count = 0;

//     for (let i = 0; i < text.length; i++) {

//         let letter = text[i].toLowerCase();

//         if (vowels.includes(letter)) {
//             count++; 
//         }
//     }

// console.log(countVowels(vowels));
// console.log(vowels);     
// }
// countVowels("Hello");
// countVowels("javascript");