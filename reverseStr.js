function reverseString (str){
    var reverse = "";
    for (var i = 0; i < str.length; i++){
       var char = str[i];
       reverse = char + reverse ;
    }
    return reverse;
}

var statement = "hello Alien bhai brother.";
var forAlien = reverseString(statement);
// console.log(forAlien);
var foodVlog =reverseString("ki khawa jai ... khida lagse");
// console.log(foodVlog);

// Quiz Question

var sentence = "i am hardworking . i am serious. i am sure i will do it";
var reverse = sentence.split('').reverse().join("");
console.log(reverse);