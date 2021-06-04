//Ternary Operator practice
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//Voter Rights
function vote_Function() {
    var Age, can_Vote;
    Height = document.getElementById("Age").value;
    can_Vote = (Age < 18) ? "You are not old enough to vote":"You can vote!";
    document.getElementById("vote").innerHTML = can_Vote;
}

//"this" and "new" keywords
function Vehicle (Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
var Jessica = new Vehicle("Toyota", "Tacoma", 1996, "Tan"); //new "new" keyword
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

//New new variable
function newFunction() {
    document.getElementById("New_and_This").innerHTML = 
    "Jessica drives a " + Jessica.Vehicle_Color + "-colored " + Jessica.Vehicle_Model +
    " manufactured in " + Jessica.Vehicle_Year + ".";
}

//Nested Function Assignment
function add_Function() {
    document.getElementById("Nested_Function").innerHTML = Add();
    function Add() {
        var origin = 3;
        function Add_one() {origin += 3;}
        Add_one();
        return origin;
    }
}