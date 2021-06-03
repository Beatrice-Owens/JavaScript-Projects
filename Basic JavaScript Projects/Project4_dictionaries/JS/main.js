//Dictionary creation 
function car_Dictionary() {
    var car = {
        make: "Ford",
        model: "Mustang", 
        year: 1969,
        color: "Red",
        engine: "V-8"
    };
    delete car.engine; //deleting the KVP car.engine
    document.getElementById("Dictionary").innerHTML = car.engine;
}
