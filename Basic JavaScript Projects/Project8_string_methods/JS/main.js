//concat method
function sentence() {
    var part_1 = "Et ";
    var part_2 = "tu ";
    var part_3 = "Brute.";
    var full_sentence = part_1.concat(part_2, part_3);
    document.getElementById("Conc").innerHTML = full_sentence;
}

//slice method
function slice_Method() {
    var Sentence = "Every worm has a weak spot.";
    var Section = Sentence.slice(6,10);
    document.getElementById("Sliced").innerHTML = Section;
}

//search method
function find_Method() {
    var str = "Every worm has a weak spot.";
    var x = str.search("spot");
    document.getElementById("found").innerHTML = x;
}

//toUpperCase method
function bigFunction() {
    var text = document.getElementById("Upper").innerHTML;
    document.getElementById("Upper").innerHTML = text.toUpperCase();
}

//toString method
function stringMethod() {
    var x = 99;
    document.getElementById("stringNow").innerHTML = x.toString();
}

//toPrecision method
function preciseMethod() {
    var y = 9.63963963;
    document.getElementById("Precise").innerHTML = y.toPrecision(3);
}

//toFixed method
function fixedFunction() {
    var nmbr = 9.99999;
    var z = nmbr.toFixed(1);
    document.getElementById("fixie").innerHTML = z;
}

//valueOf method
function valueFunction() {
    var str = "Carthago delenda est!";
    var a = str.valueOf();
    document.getElementById("values").innerHTML = a;
}