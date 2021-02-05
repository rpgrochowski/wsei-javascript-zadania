//Zadanie 1
var myTable = [1,2,3,4,5];

console.log(myTable);

//Zadanie 2
var myTable = [1,"2 test", "3 słowo", 4, 5, "6 znaczenie", 7];


//1. pierwszy i drugi
console.log(myTable[0]);
console.log(myTable[1]);


//2. ostatni
console.log(myTable[myTable.length-1]);


//3. wszystkie
console.log(myTable);


//4. co drugi"
for (i = 1; i < myTable.length; i ++)
  {
    console.log(myTable[i]);
    i += 1;
  }


//5. wszystkie stringi
for (i = 0; i < myTable.length; i ++)
  {
    if(typeof(myTable[i]) == 'string')
      {
            console.log(myTable[i]);
      }
  }


//6. wszystkie number
for (i = 0; i < myTable.length; i ++)
  {
    if(typeof(myTable[i]) == 'number')
      {
            console.log(myTable[i]);
      }
  }


//zadanie 3.

// 1 suma wszystkich
console.log(arr.reduce((a, b) => a + b));
// 2 różnicę wszystkich
console.log(arr.reduce((a, b) => a - b));
// 3 średnią wszystkich elementów
console.log(arr.reduce((a, b) => a + b / arr.length));
// 4 elementy parzyste
arr.filter((v, i) => v % 2 === 0).forEach(v => {
    console.log(v);
});
const arr = [13, 51, 3, -2, 5, 6, 8];

// 5 nieparzyste
arr.filter((v, i) => v % 2 !== 0).forEach(v => {
    console.log(v);
});
// 6 największa
let biggest = 0;
arr.forEach(v => {
    if (v > biggest) {
        biggest = v;
    }
});
console.log(biggest);
// 7 najmniejsza
let smallest = 0;
arr.forEach(v => {
    if (v < smallest) {
        smallest = v;
    }
});
console.log(smallest);
// 8 tablica wypisana od tyłu
const arrLength = arr.length - 1;
arr.forEach((v, i) => {
    console.log(arr[arrLength - i]);
});

//zadanie 4
function myTable(paramTable){
let result = 0;
  
  for(i = 0; i<paramTable.length; i++){
       
    result = result + paramTable[i];
    }
  console.log(result)
};

myTable([1,2,3,4]);

//zadanie 5
function myTable(paramTable){
let variable = 0;
  
  for(i = 0; i<paramTable.length; i++){
       
    variable = variable + paramTable[i];
    }
  
  for (i=0; i <paramTable.length; i++)
  {
      console.log(paramTable[i]*variable/paramTable.length)
    }
};

myTable([1,2,3,4]);

//zadanie 6

myTable([1,3,2,4,6]);

function myTable(paramTable){
let variable = 0;
var even = 0;
  
  for(i = 0; i<paramTable.length; i++)
  {
    if( paramTable[i] % 2 == 0)   
     { 
      variable = variable + paramTable[i];
      even += 1;
     }
    }
  console.log(variable/even)
};



//Zadanie 7.
var myTable = [3,1,0,5,11,4]

const SortTable = (myTable) => {
  for (let i = 0; i < myTable.length; i++) {
    for (let j = 0; j < myTable.length - i - 1; j++) {
      if (myTable[j] > myTable[j + 1]) {
        const newTable = myTable[j + 1];
        myTable[j + 1] = myTable[j];
        myTable[j] = newTable;
      }
    }
  }
console.log(myTable);
  
};

SortTable(myTable);


//Zadanie 8
var SumTable = [];
var outputArr = [];
 
var addArrays = function(arr1, arr2) {
  for(i = 0; i < arr1.length; i++)
  {
    for(j = 0; j < arr2.length; j++)
    {
      SumTable = arr1[i] + arr2[i];
    }
    outputArr.push(SumTable);
  }
  return outputArr;
}

console.log(addArrays([3,2,3,4,5],[1,2,3,4,8]));

//zadanie 9
function RemoveFromArray(array,elementOfArray)
{
    let tempArray = [];
    array.forEach(element => {
        if(element != elementOfArray)
            tempArray.push(element);
    });

    return tempArray;
}

console.log(RemoveFromArray([1,2,3,4,5,6],6));

//Zadanie 10.
function reserveSing(paramTable)
{
  return  paramTable.map (element => {
    return element * (-1);
  })
}
console.log(reserveSing([1,-2,3,4,6,-6]));
