//zadanie 1
let time = 0;
const interval = setInterval(() =>{
  time += 1;
    console.log(`Cześć po raz ${time}`);
  if(time >= 15)
    {
      clearInterval(interval);
    }
}, 1000);

//zadanie  2
let myArray = [1,2,3,4];
let myTimer = setTimeout(() =>{
    for(let i=0; i < myArray.lenght; i++)
    {
        console.log (myArray[i]);
    }
  
  let j = 0
  let myIntercal = setInterval(() =>
{                         
                               console.log (myArray[j]);
j++
if (j >= myArray[j]) 
{
  clearInterval(myInterval);
}
},3000  )                       
}, 2000 )
