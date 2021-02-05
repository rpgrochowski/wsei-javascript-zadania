
//Zadanie 1
let root = document.getElementById("root");

let div = document.createElement("div");
div.innerText = "To jest nowy element";

root.appendChild(div);

//Zadanie 2

let root = document.getElementById("root");

let ol = document.createElement("ol");
let li = document.createElement("li");
li.innerText = "jabłko";
ol.appendChild(li);
li = document.createElement("li");
li.innerText = "banan";
ol.appendChild(li);
li = document.createElement("li");
li.innerText = "gruszka";
ol.appendChild(li);
li = document.createElement("li");
li.innerText = "śliwka";
ol.appendChild(li);
li = document.createElement("li");
li.innerText = "morela";
ol.appendChild(li);
li = document.createElement("li");
li.innerText = "arbuz";
ol.appendChild(li);
li = document.createElement("li");
li.innerText = "granat";
ol.appendChild(li);

root.appendChild(ol);

//Zadanie 3

let root = document.getElementById("root");

let ol = document.createElement("ol");
let li = document.createElement("li");
li.innerText = "jabłko";
ol.appendChild(li);
li = document.createElement("li");
li.innerText = "banan";
ol.appendChild(li);
li = document.createElement("li");
li.innerText = "gruszka";
ol.appendChild(li);
li = document.createElement("li");
li.innerText = "śliwka";
ol.appendChild(li);
li = document.createElement("li");
li.innerText = "morela";
ol.appendChild(li);
li = document.createElement("li");
li.innerText = "arbuz";
ol.appendChild(li);
li = document.createElement("li");
li.innerText = "granat";
ol.appendChild(li);

root.appendChild(ol);

let button = document.createElement("button");
button.innerText = "Usun co 2";
root.appendChild(button);

button.addEventListener("click", (e) => {
    let ol = document.querySelector("ol");
    let li = document.querySelectorAll("ol li");
    let counter = 1;
    for (let index = 0; index < li.length; index++) {
        const element = li[index];

        if(counter % 2 == 0)
            ol.removeChild(element);

        ++counter;
    }
});


//Zadanie 4

let root = document.getElementById("root");

let button = document.createElement("button");
button.innerText = "Usun mnie";
root.appendChild(button);

button.addEventListener("click", function() {
    this.parentElement.removeChild(this);
});


//Zadanie 5


let root = document.getElementById("root");
let numb = Math.floor((Math.random() * 1000) + 1);
for (let index = 1; index <= numb; index++) {

    let div = document.createElement("div");
    div.innerText = `to jest div numer ${index}`;

    root.appendChild(div);    
}


//Zadanie 6

let root = document.getElementById("root");
var obj = { div1: 'to jest div', span1: 'to jest span', div2: { div3: 'to jest div', }, span2: 'to jest span', };

let div1 = document.createElement("div");
div1.innerText = "to jest div";
root.appendChild(div1);

let span1 = document.createElement("span");
span1.innerText = "to jest span";
root.appendChild(span1);

let div2 = document.createElement("div");
let div3 = document.createElement("div");
div3.innerText = "to jest div";
div2.appendChild(div3);
root.appendChild(div2);

let span2 = document.createElement("span");
span2.innerText = "to jest span";
root.appendChild(span2);
 
 
//Zadanie 7

let root = document.getElementById("root");

let div = document.createElement("div");
let div2 = document.createElement("div");
let lista1 = document.createElement("ul");
let lista2 = document.createElement("ul");

for (let index = 0; index < 6; index++) {
    
    let list1Item = document.createElement("li");
    list1Item.innerText = index;

    lista1.appendChild(list1Item);
}

let list1Button = document.createElement("button");
list1Button.innerText = "Przenieś element";

div.appendChild(lista1);
div.appendChild(list1Button);

let list2Button = document.createElement("button");
list2Button.innerText = "Przenieś element";
list2Button.setAttribute("disabled","")
div2.appendChild(lista2);
div2.appendChild(list2Button);

root.appendChild(div);
root.appendChild(div2);


list1Button.addEventListener("click", function () {
    let liLast = lista1.lastChild;
    lista2.appendChild(liLast);

    if(list2Button.hasAttribute("disabled"))
        list2Button.removeAttribute("disabled");

    if(lista1.children.length === 0)
        this.setAttribute("disabled","");

});

//Zadanie 8

let root = document.getElementById("root");

let form = "<form><label>Element: </label><input type='text' id='element'><br><label>Tekst wyświetlany: </label><input type='text' id='text'><br><label>Liczba: </label><input type='number' min='1' value='1' id='number'><br><label>Kolor: </label><input type='color' id='color'><br><button id='create'>Utwórz</button></form>";
let div = "<div id='mainContext'></div>"
root.innerHTML = form + div;

let mainContext = document.getElementById("mainContext");

let button = document.getElementById("create");
button.addEventListener("click", (e) => {
    e.preventDefault();
    let element = document.getElementById("element").value;
    let text = document.getElementById("text").value;
    let number = document.getElementById("number").value;
    let color = document.getElementById("color").value;

    for (let index = 0; index < number; index++) {
        let obj = document.createElement(element);
        obj.innerText = text;
        obj.style.color = color;
        mainContext.appendChild(obj);
    }
})




//Zadanie 9

let root = document.getElementById("root");

let form = document.createElement("form");
let tableDiv = document.createElement("div");
let table = document.createElement("table");
tableDiv.appendChild(table);

root.appendChild(form);


let buttonWiecej = document.createElement("button");
buttonWiecej.innerText = "Więcej";

let buttonUtworz = document.createElement("button");
buttonUtworz.innerText = "Utwórz";

root.appendChild(buttonWiecej);
root.appendChild(buttonUtworz);

root.appendChild(tableDiv);
AddElements([{text: 'Imię: '},{text: 'Nazwisko: '},{number: 'Wiek: '},{number: 'Ilość dzieci: '}]);
function AddElements(array)
{
    array.forEach(element => {
        for (const [type, label] of Object.entries(element)) 
        {
            let div = document.createElement("div");
            div.setAttribute("class", "formData");

            let labeltemp = document.createElement("label");
            labeltemp.innerText = label;
            
            let input = document.createElement("input");
            input.setAttribute("type", type);
            
            div.appendChild(labeltemp);
            div.appendChild(input);
            form.appendChild(div);

        }  
    });
}

buttonWiecej.addEventListener("click", function() {
    AddElements([{text: 'Adres: '},{text: 'Ulica: '},{text: 'Kod pocztowy: '}]);
    this.setAttribute("disabled","")
});

buttonUtworz.addEventListener("click", function() {
    buttonWiecej.setAttribute("disabled","")
    let formElements = document.querySelectorAll(".formData");
    
    if(tableDiv.innerText === "")
    {
        let headersTr = document.createElement("tr");

        formElements.forEach(element => {
            let headersTh = document.createElement("th");
            headersTh.innerText = element.children[0].innerText;
            headersTr.appendChild(headersTh);
        });

        table.appendChild(headersTr);
    }

    
    let headersTr = document.createElement("tr");

    formElements.forEach(element => {
        let headersTd = document.createElement("td");
        headersTd.innerText = element.children[1].value;
        headersTr.appendChild(headersTd);
    });

    table.appendChild(headersTr);
});

//Zadanie 10

function ChangeFirstLetterToCapital()
{
    let strings = document.querySelectorAll("td");

    strings.forEach(element => {
        element.innerText = element.innerText.charAt(0).toUpperCase() + element.innerText.slice(1);
    });
}

//Zadanie 11

let root = document.getElementById("root");

function ConvertStringToDiv(string)
{
    var matches = string.match(/\d+/g);  
    let sum = 0;
    let mult = 1;
    matches.forEach(element => {
        sum += parseInt(element);
        mult *= element;
    });   
    
    console.log(sum);

    for (let index = 0; index < mult; index++) {
        let div = document.createElement("div");
        div.innerText = sum;
        root.appendChild(div);
    }
}

ConvertStringToDiv("3kj1kjkj")

//Zadanie 12
let root = document.getElementById("root");


function GetStringToME(string)
{
    this.MyObjectMyPresious = new Object();
    this.MyObjectMyPresious.MyString = string;
    this.MyObjectMyPresious.Check = function() {
        if(this.MyString.includes("Ala"))
        {
            this.MyString = this.MyString.replace("Ala","Ola");
        } else {
            let div = document.createElement("div");
            div.innerText = "Słowo Ala nie występuje w tekście.";
            root.appendChild(div);
        }
    }
}

GetStringToME("YOU SHALL NOT PASS Ala");
MyObjectMyPresious.Check();

//Zadanie 13
let root = document.getElementById("root");


let string = ["asd21", "sad23", "osa2"];
function GetNumberOfNumbersInArray(array)
{
    let tempArray = [];
    array.forEach(element => {
        var matches = element.match(/\d+/g);
        tempArray.push(matches.length);
    });
    return tempArray;
}
function SumNumbersInArray(array)
{
    let retValue = 0;
    array.forEach(element => {
        var matches = element.match(/\d+/g);
        matches.forEach(n => {
            retValue += parseInt(n);
        });
    });
    return retValue;
}

function AvgOfNumbersInArray(array)
{
    let retValue = 0;
    let l = 0;
    array.forEach(element => {
        var matches = element.match(/\d+/g);
        l += matches.length;
        matches.forEach(n => {
            retValue += parseInt(n);
        });
    });
    return retValue / l;
}

console.log(GetNumberOfNumbersInArray(string));
console.log(SumNumbersInArray(string));
console.log(AvgOfNumbersInArray(string));




//Zadanie 14


let root = document.getElementById("root");
function objt()
{
    this.name = "";
    this.surname = "";
    this.age = "";

    this.AsignNewValues = function(nameArg, surnameArg, ageArg)
    {
        this.name = nameArg;
        this.surname = surnameArg;
        this.age = ageArg;
        this.nameL = nameArg.length;
        this.surnameL = surnameArg.length;
        this.ageL = ageArg.length;

        if(nameArg.length > 5 || surnameArg.length > 5 || ageArg.length > 5)
        {
            let button = document.createElement("button");
            button.innerText = "Wyczyść";
            root.appendChild(button);

            button.addEventListener("click", (e) => {
                this.name = "";
                this.surname = "";
                this.age = "";
                delete this.nameL;
                delete this.surnameL;
                delete this.ageL;

                e.currentTarget.parentNode.removeChild(e.currentTarget);
            })
        }
    }

}

let o = new objt();
