function animalCalculator(depth) {
    var animal = 0;
    if (depth <= 10) {
        animal = depth * 50;
    }
    else if (depth <= 20) {
        var firstPart = 10 * 50;
        var remaing = depth - 10;
        var secondPart = remaing * 100;
        animal = firstPart + secondPart;
    }
    else {
        var firstPart = 10 * 50;
        var secondPart = 10 * 100;
        var remaing = depth - 20;
        var thirdPart = remaing * 300;
        animal = firstPart + secondPart + thirdPart;
    }
    return animal;
}
var count = animalCalculator(32)
console.log(count);