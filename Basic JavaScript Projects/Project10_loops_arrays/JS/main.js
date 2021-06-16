//while loop
function Call_Loop() {
    var count = "";
    var x = 1;
    while (x < 11) {
        count += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = count;
}

//for loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y; 
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Array
function array_Function() {
    var animals = [];
    animals[0] = "cat";
    animals[1] = "dog";
    animals[2] = "bird";
    animals[3] = "fish"; 
    document.getElementById("Array").innerHTML = "This animal is a " + 
        animals[2] + ".";
}

//Constant
function constant_function() {
    const animal = {type:"cat", name:"Momo", age:"3"};
    animal.age = "4";
    animal.color = "orange";
    document.getElementById("Constant").innerHTML = animal.name + " is " + animal.color + ".";
}

//let function
function let_function() {
    let a = 9;
    document.getElementById("Lets").innerHTML = a;
}

//object creation
let animal = {
    type: "cat ", 
    name: "Momo ",
    age: "4 ", 
    color: "orange ", 
    description : function() {
        return this.name + "is a " + this.age + "year old " + this.color + this.type + ".";
    }
};
document.getElementById("animal_Object").innerHTML = animal.description();