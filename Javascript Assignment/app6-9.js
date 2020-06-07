// chapter 6-9
//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser: 


var a = 10;
document.write("The value of a is "+a+"<br>");
var b = ++a;
document.write("The value of ++a is "+b+"<br>");
document.write("Now the value of a is "+a+"<br>");
var c= a++;
document.write("The value of a++ is "+c+"<br>");
document.write("Now the value of a is "+a+"<br>");
var d = --a;
document.write("The value of --a is "+d+"<br>");
document.write("Now the value of a is "+a+"<br>");
var e = a--;
document.write("The value of a-- is "+e+"<br>");
document.write("Now the value of a is "+a+"<br>");


//2. What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--; 



var a = 2;
var b = 1;  
  //    --a  1   
  //    --a - --b = 1 -  0 
  //    --a - --b + ++b = 1 - 0 +  1
  //    --a - --b + ++b + b-- =1 - 0 + 1 + 1

document.write("a is "+a+"<br>");
document.write("b is "+b+"<br>");
var result = --a - --b + ++b + b--;
document.write("result is "+result+"<br>");
//3. Write a program that takes input a name from user & greet the user. 
var f = prompt("Enter your name");
console.log("WElcome to the page",+" "+f);

//5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default. 


var g =+prompt("Enter any number"); 
var h = +prompt("Enter any number");

for (var h =1;h<=10;h++){
    document.write("5"+"x"+h+"="+5*h+"<br>")
}
var j= g * h;
console.log(+""+j);

// 6. Take a) Take three subjects name from user and store them in 3 different variables. b) Total marks for each subject is 100, store it in another variable. c) Take obtained marks for first subject from user and stored it in different variable. d) Take obtained marks for remaining 2 subjects from user and store them in variables. e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
var x =prompt("Enter subject1: ");
var y =prompt("Enter subject2: ");
var z =prompt("Enter subject3: ");
var total=100;
var obtained1=+prompt("Enter obtained mark in subject1: ");
var obtained2=+prompt("Enter obtained mark in subject2: ");
var obtained3=+prompt("Enter obtained mark in subject3: ");
var totalMarks=(obtained1+obtained2+obtained3);
var percentage=(totalMarks/300)*100;

var percentage1=(obtained1/100)*100;
var percentage2=(obtained2/100)*100;
var percentage3=(obtained3/100)*100;

document.write("Subject  TotalMarks  ObtainedMarks  Percentage".bold()+"<br>");
document.write("<br>"+x+ " " +"         100    "+ "  " + obtained1+"  "+ percentage1+"%");
document.write("<br>"+y+ "  " +"         100    "+ "  " + obtained2+"  "+ percentage2+"%");
document.write("<br>"+z+ "  " +"         100    "+ "  " + obtained3+"  "+ percentage3+"%");
document.write("<br>"+" "+ "  " +"  300    "+ "  " + totalMarks+"  "+percentage+"%");
