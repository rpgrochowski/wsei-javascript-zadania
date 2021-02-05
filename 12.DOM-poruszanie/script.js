//zadanie 1
const buz = document.querySelector("#buz");
const baz = document.querySelector("#baz");
const foo = document.querySelector("#foo");

// Rodzica elementu id="buz"
console.log(buz.parentElement);
// Brata elementu id="baz"
console.log(baz.previousElementSibling);
//Dzieci elementu id="foo"
console.log(foo.children);
//rodzica elementu id"foo"
console.log(foo.parentNode);
//pierwsze dziecko elementu id="foo"
console.log(foo.firstElementChild);
//środkowe dziecko elementu id="foo"
console.log(foo.children[Math.floor(foo.children.length / 2)]);


//zadanie 2
function foo(element) {
  
    var element1 = document.getElementById(element);
    element1.addEventListener('click', function(){
        var txt = this.children[0].children[0].children[0].children[1].children[0].children[0].innerText;
        console.log(txt);
    })
}

foo("ex2");


//zadanie 3
function foo(){
    const root = document.getElementById('ex3');
    const buttons = root.querySelectorAll('button');
    
    buttons.forEach(key => {
        console.log(key)
        
        key.addEventListener('click', e => {
            if(key.nextElementSibling.style.display === 'none'){
                key.nextElementSibling.style.display='block';
            }else {
                key.nextElementSibling.style.display='none';
            }
            
        })
    })
    
    
}

foo()

//zadanie 4
const ex3Divs = document.querySelectorAll('#ex3 button');

ex3Divs.forEach((div) => {
    div.addEventListener('click', (event) => {
        const parentElement = event.target.parentElement;
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        parentElement.style.backgroundColor = randomColor;
    })
})


//zadanie 5
var elements = document.querySelectorAll("div#ex5 div");

var listElements = document.querySelectorAll("div#ex5 li");

var ulElement = document.querySelector("div#ex5 ul");

for(var i = 0; i < elements.length; i++){
    elements[i].addEventListener('mouseover', function(){
        var color = this.style.backgroundColor;
      
//Tylko pierwszy element listy 
        //listElements[0].style.backgroundColor = color;
      
//tylko ostatni element listy
        //listElements[listElements.length - 1].style.backgroundColor = color;
        
//Parzyste elementy listy
        /* for(var j = 0; j < listElements.length; j++) {
            if(j % 2 !== 0) {
                listElements[j].style.backgroundColor = color;
            }
        } */
      
//Wszystkie elementy listy
      /*  for(var j = 0; j < listElements.length; j++) {
            listElements[j].style.backgroundColor = color;
        } */

//Żaden z elementów - tylko cała lista
        //ulElement.style.backgroundColor = color;
    })
}


//Zadanie 6

let first;
let second;
let third;
    var ex6 = document.getElementById("ex6");
	
    first = ex6.children[0].children[0].children[0];
    console.log(first);
	
    second = ex6.children[0].parentElement.children[0].children[0].nextSibling.parentElement;
    console.log(second);
	
    third = ex6.parentElement.children[0].parentElement.children[1].children[0].children[0].children[0];
    console.log(third);	
