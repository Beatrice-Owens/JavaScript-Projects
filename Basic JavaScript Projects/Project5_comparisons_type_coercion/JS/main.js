//typeof operand
document.write(typeof 9);

//coercion
document.write("15" + 5);

//infinity
document.write(5E310);

//negative Infinity
document.write(-7E310)

//NaN test
function not_Number() {
    document.getElementById("Test").innerHTML = 0/0;
}

//NaN True
function nan_Yes() {
    document.getElementById("Test2").innerHTML = isNaN("Random String");
}

//NaN False
function nan_No() {
    document.getElementById("Test3").innerHTML = isNaN(93);
}

//Boolean True
document.write(3 < 6);

//Boolean False
document.write(3 > 6);

//console.log method
console.log(3 * 3);

//Boolean console
console.log(3>9);

//double = boolean
document.write(3 == 3);

document.write(6 == 9); 

//triple = boolean exercises
var a = 5,
    b = 5,
    c = "ten",
    d = 6,
    e = "six";
document.write(a === b);

document.write(a === c);

document.write(d === e);

document.write(a === d);

//AND/OR Operator Assignment
document.write(6 > 3 && 9 > 6);

document.write(6 > 9 && 9 > 3);

document.write(6 > 9 || 9 > 3);

document.write(6 > 9 || 3 > 9);

//NOT Operator
function not_Function() {
    document.getElementById("Not1").innerHTML = !(3 > 9);
    document.getElementById("Not2").innerHTML = !(3 < 9);
}