//Zadanie 1
let car = {
    name: "BMW",
    age: 6
}

console.log(car.name);
console.log(car.age);

//zadanie 2
let car = {
    name: "BMW",
    age: 6,
    changeName: function(newName) {
        this.name = newName;
    }
}

car.changeName("polonez");
console.log(car.name);
console.log(car.age);

//zadanie 3

var newObject = {
    sum: 0,
    sumValues: function(array) {
        array.forEach(item => this.sum += item);
    }
}

newObject.sumValues([1, 5, 7]);
console.log(newObject.sum);

//zadanie 4
var car={
    name:"BMW",
    age: 12
}


for(let key in car){
    console.log(key + ":" + car[key]);
}


//zadanie 5
const car = {
	name: 'Fiat',
	age: 35,
	color: 'red'
};
const carCountryCity = {
	country: 'Poland',
	city: 'Krakow'
};
car.production = carCountryCity;

console.log(car.production.country, car.production.city);

//zadanie6
// dodanie do zadania 5

car.hello = () => {
    console.log("Hello");
}

car.hello();
