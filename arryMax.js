var marks = [45, 81, 63, 98, 56, 35, 23];
var max = marks [0];
for(var i = 0; i < marks.length; i++){
    var element = marks [i];
    if(element > max){
        max = element;
    }

}
// console.log("Highest balue is :", max);

var numbers= [12,45, 65, 21, 6, 68];
var smallest = numbers[0];
for(var i = 0; i < numbers.length; i++){
    var num = numbers[i];
    if(num < smallest){
        smallest = num;
    }
}
console.log(smallest);