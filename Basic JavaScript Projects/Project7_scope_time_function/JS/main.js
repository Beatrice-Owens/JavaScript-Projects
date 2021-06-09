//Global variable
var x = 3;
function Multiply_numbers_1() {
    document.write(3 * x + "<br>");
}
function Multiply_numbers_2() {
    document.write(9 * 3 + "<br>");
}
Multiply_numbers_1();
Multiply_numbers_2();

//Local Variable
function Multiply_numbers_3() {
    var y = 3;
    document.write(3 * y + "<br>");
}
function Multiply_numbers_4() {
    var y = 9;
    document.write(3 * y + "<br>");
}
Multiply_numbers_3();
Multiply_numbers_4(); 

//console.log troubleshooting incorrect local variable
function Add_numbers_1() {
    var z = 3;
    console.log(6 + z);
}
function Add_numbers_2() {
    console.log(3 + z);
}
Add_numbers_1();
Add_numbers_2();


//Date if statement
function get_Date() {
    if (new Date().getHours() > 12) {
        document.getElementById("hello").innerHTML = "Good afternoon!";
    }
} 

//create an if statement
function greater_Than() {    
    if (9 > 3) {
        document.getElementById("Greater").innerHTML = "The left number is greater than the right number.";
    }
}

//if and else function
function Drink_Function() {
    your_Age = document.getElementById("your_Age").value;
    if (your_Age >= 21) {
        drink = "Enjoy a drink.";
    }
    else {
        drink = "You're not quite old enough to drink.";
    }
    document.getElementById("how_Old").innerHTML = drink;
}

//elif function 
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time.";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply
}