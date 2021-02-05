//Zadanie 1

function Person(name, lastname, age, country, city) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.country = country;
    this.city = city;

    this.showDetails = function () {
        console.log(`Person: ${this.name} ${this.lastname} age: ${this.age} country: ${this.country}, ${this.city}`);
    }

    this.addOneYear = function () {
        ++this.age;
    }
}

const person = new Person('Jan', 'Dzban', 25, 'Poland', 'Warsaw');
const person2 = new Person('Grzegorz', 'Orzech', 16, 'Poland', 'Warsaw');

person.showDetails();
person.addOneYear();
person.showDetails();

person.addOneYear();
person.addOneYear();
person.addOneYear();

person.showDetails();

person2.showDetails();
person2.addOneYear();
person2.showDetails();

person2.addOneYear();
person2.addOneYear();
person2.addOneYear();

person2.showDetails();


//Zadanie 2

function Person(name, lastname, age, country, city) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.country = country;
    this.city = city;

    this.showDetails = function () {
        console.log(`Person: ${this.name} ${this.lastname} age: ${this.age} country: ${this.country}, ${this.city}`);
    }

    this.addOneYear = function () {
        ++this.age;
    }
}

const person1 = new Person('Jan', 'Dzban', 25, 'Poland', 'Warsaw');
const person2 = new Person('Grzegorz', 'Orzech', 16, 'Poland', 'Warsaw');


Person.prototype.favoriteFood = [];
Person.prototype.showFavoriteFood = function () {
    console.log("Foods:" + this.favoriteFood);
};

Person.prototype.addFavoriteFood = function (item) {
    this.favoriteFood.push(item);
};

person1.addFavoriteFood("jabłko");
person2.addFavoriteFood("jeżyk");
person1.showFavoriteFood();



//zadanie 3
function Calculator(a,b){
    this.a=a;
    this.b=b;
    
    this.sum=function(){
        return (this.a+this.b);
    }
    this.odj=function(){
        return (this.a-this.b);
    }
    this.mnozenie=function(){
        return (this.a*this.b);
    }
    this.dzielenie=function(){
        if(b==0){
            console.log("Nie mozna przez 0");
        } 
        else {
            return (this.a/this.b);
        }
        
    }
    
}


const calc1=new Calculator(4,5);
const calc2=new Calculator(4,0);
console.log(calc1.sum());
console.log(calc2.dzielenie());

//zadanie 4
function ladder(){
    this.number = 0;
    
    this.up = function() {
        this.number++;
        this.showLevel();
    }
    
    this.down = function() {
        if(this.number > 0){
            this.number--;
        }
        else{
            console.log("Jesteś na ziemi.");
        }    
        this.showLevel();
    }
    
    this.showLevel = function() {
        console.log(this.number);
    }
}

var ladder = new ladder();


ladder.up();
ladder.up();
ladder.down();
ladder.down();
ladder.down();
