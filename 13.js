// function reverseString(text){
//     let text = "hello";
//     for(let i = 0;i <text.length;i++){
//         if(text.length>i){

//         }
//     }
// }
function reverseString(text) {

    let reversed = "";
    for (let i = (text.length)- 1; i >= 0; i--) {

        reversed += text[i];
    }
    console.log(reversed);
}

reverseString("hello");
