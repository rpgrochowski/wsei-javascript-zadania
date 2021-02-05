//Zadanie 1
var sayWord = () =>
{
  console.log("Udało się");
}

sayWord();

//zadanie 2
function ConsolParam (any)
{
  console.log(any)
}

ConsolParam(2)
ConsolParam("kot")

//zadanie 3
var myTable = [1,2,4,6];

returnTable = (table) =>
{
  return table;
}

console.log(returnTable(myTable));

//zadanie 4
function myString(paramStr)
{
  var counter = 0;
  let myInterval = setInterval(() =>
  {
    counter++;
    if(counter == 5 + 1) //5 powtórzeń stringa
      {
        console.log("Koniec");
        clearInterval(myInterval)
      }
    else
      {
        console.log(paramStr);
      }
   
    
  },3000)
  
}

myString("Uwaga Niebezpieczeństwo!");
