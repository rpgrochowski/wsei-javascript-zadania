//zadanie 1
let links = document.getElementsByClassName('list');

console.log(list);

//zadanie 2
function tagElements(tag) {
    const elements = document.getElementsByTagName(tag);
    for (let i = 0; i<elements.length; i++) {
        console.log(elements[i]);
    }
}

tagElements('ul');

//zadanie 3
const listElement = document.getElementById('list');

console.log(listElement);

//zadanie 4
function elements(element) {
    console.log(element);
}

// wszystkie li
elements(document.querySelectorAll("li"));
//wszystkie ul
elements(document.querySelectorAll("ul"));
//wszystkie span
elements(document.querySelectorAll("span"));
//wszystkie span w elemencie div z klasą list
elements(document.querySelectorAll("div.list span"));
//wszystkie spam w elemencie div które mają span
elements(document.querySelectorAll("div#spans span"));
