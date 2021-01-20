var speech = "i am a good person. i don't snoreat night.";

var count = 0;
for (var i = 0; i < speech.length; i++){
    var char = speech[i];
    if(char == " " && speech[i-1] !=" "){
        count++;
    }
}
count++;
// console.log(count);

// Quiz Question:
var sentence = "i am hardworking . i am serious. i am sure i will do it";
var count = 0;
for(var i = 0; i <sentence.length; i++){
    var letter = sentence[i];
    if(letter =='a'){
        count++;
    }
}
console.log(count);
