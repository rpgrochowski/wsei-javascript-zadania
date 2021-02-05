//zadanie 1
const divs = document.querySelectorAll('.more-divs');

function listOfDivs(paramArr) {
    let newArray = [];
    
    for (let i = 0; i < paramArr.length; i++) {
        newArray.push(paramArr[i].tagName);
    }
    return newArray;
}

console.log(listOfDivs(divs));

//zadanie 2
function task2(param){
    //1 Kod html wewnętrzny
    console.log(param.innerHTML);
    //2 kod html zewnętrzy
    console.log(param.outerHTML);
    //3 listę klass elementu w postaci stringu
    console.log(param.className);
    //4 listę klass elementu w postaci tablicy
    console.log([...param.classList]);
    //5 obiekt dataset
    console.log(param.dataset);

}

task2(document.querySelector(".short-list"))


//zadanie 3
const numbersDataset = document.getElementById('datasetCheck');
const thirdTask = takeNumbers => {
    const firstNumber = parseInt(takeNumbers.dataset.numberone)
    const secondNumber = parseInt(takeNumbers.dataset.numbertwo)
    const thirdNumber = parseInt(takeNumbers.dataset.numberThree)
    let adding = firstNumber + secondNumber + thirdNumber
    let substraction = firstNumber - secondNumber - thirdNumber;
    return [adding, substraction];
}
console.log(thirdTask(numbersDataset));


//zadanie 4
document.getElementById("spanText").innerText =  "dowolny";


//zadanie 5

document.getElementById("spanText").className =  "newClassName";


//zadanie 6??
var element = document.getElementById("classes");
var list = element.classList;

var concat = [];
for (let i = 0; i< list.length; i++)
    {
        concat.push(list[i]);
        console.log(list[i]);
    }
console.log(concat.join('+'));

element.className = '';
console.log("Usunięto wszystkie klasy")


//zadanie 7
const list = document.querySelectorAll('#longList > li')

function addAttributes(elements) {

    elements.forEach( element => {
        if(!element.getAttribute("data-text")){
            element.dataset.text = "text";
        }
    })

}
const result = addAttributes(list);


//zadanie 9
function addClass(param){
    param = parseInt(param);
    const numbers = document.querySelector("#numbers");
    if(param %2===0){
        numbers.className = "even";
    }
    else{
        numbers.className = "odd";
    }
    
}
var randomNum = Math.floor(Math.random() * 11);
addClass(randomNum)

//zadanie 10

let longList = document.getElementById("longList");

function ElementToArray(element)
{
    let tempArray = [];

    letliElements = element.querySelectorAll("li");

    letliElements.forEach(item => {
        tempArray.push(item.innerText);
    });

    return tempArray;
}

console.log(ElementToArray(longList));



//zadanie 11
let longList = document.getElementById("longList").children;

function ChangeChildren(element)
{
    Array.from(element).forEach(item => {
        let numb = Math.floor((Math.random() * 11));
        if(!item.hasAttribute("data-old"))
        {
            item.setAttribute("data-old",item.innerText);
        }
        item.innerText = numb;
    });
}

ChangeChildren(longList);

