
function getArraySum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [44, 65, 78, 12];
var result = getArraySum(numbers);
// console.log("total of  the numbers :", result);
var total = getArraySum([43, 56, 12, 42, 86]);
// console.log("total of  the numbers :", total);

// Quiz

function add(a, b){
    return a+b;
}
add(568, 254)
console.log(add);