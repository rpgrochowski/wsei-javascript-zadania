//Zadanie 1

function Person(firstname, lastname, age, country, city, language) {
    this.firstname = firstname, 
    this.lastname = lastname, 
    this.age = age,
    this.country = country,
    this.city = city,
    this.language = language
  
  this.changeAge = function (NewAge)
  {
    this.age = NewAge;
  }
    
  this.changeCountry = function (NewCountry)
  {
    this.country = NewCountry;
  }
  
  
  
}

const user1 = new Person('Kamil', 'Kwiat', 20, 'Polska', 'Krakow', 'polski');
const user2 = new Person('Artur', 'Mensen', 34, 'Polska', 'Warszawa', 'polski');
const user3 = new Person('Alex', 'Schultz', 23, 'Niemcy', 'Berlin', 'niemiecki');
const user4 = new Person('Jan', 'Kowalski', 45, 'Polska', 'Bieslko', 'polski');
const user5 = new Person('Wit', 'Norma', 22, 'Ukraina', 'Lwów', 'polski');


console.log(user1)
console.log(user2)
console.log(user3)
console.log(user4)
console.log(user5)

user3.changeAge(55);
console.log(user3);
            
user5.changeCountry("Polska");
console.log(user5);


//Zadanie 2
function Calculator(){
    this.memory = [],
    this.sum = function(a, b) {
        this.memory.push('Dodawanie');
        console.log(a + b);
    },
    this.clearMemory = function() {
        this.memory = [];
    },
    this.showMemory = function() {
        console.log(this.memory);
    }
    this.sub = function(c,d) {
        this.memory.push('Odejmowanie');
        console.log(c -d);
    };
    this.mul = function(e,f) {
        this.memory.push('Mnożenie');
        console.log(e *f);
    };
        this.div = function(g,h) {
        this.memory.push('Dzielenie');
        console.log(g/h);
    };
    
}

const calculator1 = new Calculator();
const calculator2 = new Calculator();

calculator1.sum(2,2)
calculator1.sub(2,3)
calculator1.mul(3,3)
calculator1.div(12,3)
calculator1.showMemory()
calculator1.clearMemory()
calculator1.showMemory()

calculator2.sum(2,2)
calculator2.showMemory()


//zadanie 3
function Game(){
    
   this.lastNumber = 0;
   this.number = 0;
   this.generator = null;
    
    this.startGenerator = () => {
        this.generator = setInterval(() => {
            this.lastNumber = this.number;
            this.number = Math.floor((Math.random() * 10) + 1);
            
            console.log(this.number);
            this.checkWin();
        }, 1000)
    }
    
    this.checkWin = () => {
        if(this.lastNumber + 5 === this.number){
            console.log("Wygrałeś");
            clearInterval(this.generator);
        }
    }
}

let game1 = new Game();
game1.startGenerator();
