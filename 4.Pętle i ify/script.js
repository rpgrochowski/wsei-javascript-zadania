//zadanie 1
var numberOne = 10;
var numberTwo = 45;

if(numberOne > numberTwo)
  {console.log("pierwsza jest większa");}
else
  {console.log("druga jest większa");}
  
//zadanie 2
var numberOne = 37;
var numberTwo = 1024;
var numberThree = 512;

if (numberOne > numberTwo && numberOne > numberThree)
  {
    console.log("pierwsza jest największa");
  } else if (numberTwo > numberThree)
    {
      console.log("druga jest największa");
    } else
      {
        console.log("trzecia jest największa");
      }
	  
//zadanie 3
var text = "Lubię JavaScript";

for(var i = 1; i <= 10; i++)
  {
    console.log(text);
  }

//zadanie 4
var result = 0;

for(var i = 0; i < 11; i++)
  {
    result += i;
    console.log(result)
  }
  
//zadanie 5
var n = 5;

for(let i = 0; i <= n; i++)
  {
    console.log(`${i} - ${! i%2 ? 'parzysta': 'nieparzysta'}`);
  }
  
//zadanie 6

//pętla niezależna
for (var i = 0; i < 3; i++)
  {
    for(var j=0; j<4; j++)
      {
        console.log("i= " + i + ", j= " + j);
      }
  }
  
//zadanie 7
for(var i = 0; i < 101; i++)
  {
    if(i%3 === 0 && i%5 === 0 )
      {
        console.log("FizzBuzz");
      }
    else if (i%3 === 0)
      {
        console.log("Fizz")
      }
    else if(i%5 === 0)
      {
        console.log("Buzz")
      }
    else
      {
        console.log(i);
      }
  }

//zadanie 8a
var lines = 5;
var starLine = "*";

for(var i = 0; i < lines; i++)
{
console.log(starLine);
  starLine += "*";
}

//zadanie 8b
var linesNumber = 5;
var spacer = " ";
var stars = "*";

for(var i = 0; i < linesNumber; i++)
{
  var lines = "" ;
  for(var j = linesNumber -1 ; j > i; j--)
    {
      lines += spacer;
    }
  for (var a = 0; a <= i; a++)
    {
      lines += stars + spacer;
    }
  console.log(lines);
}

//zadanie 8c

var linesNumber = 5;
var spacer = " ";
var stars = "*";

var i = 0;
var a = 0;


for( i; i < linesNumber; i++)
{
  var lines = "" ;
  for(var j = linesNumber -1 ; j > i; j--)
    {
      lines += spacer;
    }
  for (a = 0; a <= j*2; a++)
    {
     
        lines += stars;
      }; 
  console.log(lines);
};

//zadanie 8d
var linesNumber = 5;
var spacer = " ";
var stars = "*";

var i = 0;
var j = 0;
var a = 0;
var lines = "" ;

for( i = 0 ; i < linesNumber; i++)
{
  lines = "";
  
  for (j = 0 ; j <= i; j++)
    {
      lines += stars;
    }
  
     for (var a = j; a < linesNumber; a++)
        {
          lines += a;
        }
  
  console.log(lines);
};

lines = "";
for(i = 0; i < linesNumber; i ++)
  {
    lines += "-";
  }
console.log(lines);

for( i = 0 ; i < linesNumber; i++)
{
  lines = "";
  
  for (j = 4 ; j >= i; j--)
    {
      lines += stars;
    }
    
     for ( a = 4 - j; a < linesNumber; a++)
        {
          lines += a;
        }
  
  console.log(lines);
};

//Zadanie 8e
var linesNumber = 5;
var spacer = " ";
var stars = "*";

var i = 0;
var j = 0;
var a = 0;
var lines = "";

for(i = 0; i < linesNumber; i++)
{
  lines = "" ;
  for(j = linesNumber -1 ; j > i; j--)
    {
      lines += spacer;
    }
  for (a = 0; a <= i; a++)
    {
      lines += stars + spacer;
    } 
   
  console.log(lines);
}

lines = "";

for (i = 0; i < linesNumber /2; i++)
  {
    lines = "    *";
    console.log(lines);
  }
