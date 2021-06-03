//adding stuff
function add_Function() {
    var add = 3 + 3;
    document.getElementById("Math").innerHTML = "3 + 3 = " + add;
}

//subtracting stuff
function subtract_Function() {
    var subtract = 9 - 6;
    document.getElementById("MathTwo").innerHTML = "9 - 6 = " + subtract;
}

//multiplying stuff
function multiply_Function() {
    var multiply = 3 * 3;
    document.getElementById("MathThree").innerHTML = "3 * 3 = " + multiply;
}

//dividing stuff
function divide_Function() {
    var division = 9 / 3;
    document.getElementById("MathFour").innerHTML = "9 / 3 = " + division;
}

//multiple math operators
function maths_Function() {
    var simple_math = (3 + 6) / 3 * 1 - 3;
    document.getElementById("MathFive").innerHTML = "(3 + 6) / (3 * 1) - 3 = " + simple_math;
}

//modulus operator
function modulus_Operator() {
    var left_over = 10 % 3;
    document.getElementById("MathSix").innerHTML = "10 / 3 leaves a remainder of " + left_over;
}

//opposite stuff
function negation_Operator() {
    var x = 3*3
    document.getElementById("negate").innerHTML = -x;
}

//1up 
function increment_Operator() {
    var y = 3;
    y++;
    document.getElementById("increment").innerHTML = y;
}

//decrementalizationathon
function decrement_Operator() {
    var z = 9;
    z--;
    document.getElementById("decrement").innerHTML = z;
}

//rngesus
window.alert(Math.random() * 1000)

//"Math" method
function to_Power() {
    var a = 3;
    var b = 3;
    document.getElementById("power").innerHTML = Math.pow(a,b);
}
