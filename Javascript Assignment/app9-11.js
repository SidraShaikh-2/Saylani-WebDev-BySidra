// Assignment 9-11
// 1-Write a program to take “city” name as input from user. 
// If user enters “Karachi”, welcome the user like this:
//  “Welcome to city of lights” 
var city = prompt("Enter city name:");
if (city == "Karachi"){
    alert("welcome to the City of Lights!")
}
else{
    alert()
}



// 2-Write a program to take “gender” as input from user.
//  If the user is male, give the message:  Good Morning Sir.
//  If the user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter Your Gender:")
if (gender == "male"){
    alert("Good Morning Sir.")

}
else if (gender == "female"){
    alert("Good Morning Ma’am.")
}
else{
    alert()
}


// 3- Write a program to take input color
//  of road traffic signal from the user &
//   show the message according to this table: 

var colour = prompt("Color of Road Traffic Signal:")
if (colour == "red"){
    alert("Must Stop.")

}
else if (colour == "yellow"){
    alert("Ready to move")
}
else if(colour == "green"){
    alert("Move now ")
}
else{
    alert()
}



// 4-Write a program to take input remaining fuel in car (in litres)
//  from user. If the current fuel is less than 0.25litres,
//   show the message “Please refill the fuel in your car” 
 
var litres = prompt("Remaining fuel in car(in litres):")
if (litres < 0.25){
    alert("Please refill the fuel in your car")

}
else{
    alert()
}



// 5-Run this script, & check whether alert message would be displayed
//  or not. Record the outputs. 

// (a)
var a = 4;
 if (++a === 5){
      alert("given condition for variable a is true");
 }
//  output = given condition for variable a is true

// (b)
var b = 82;
 if (b++ === 83){
    alert("given condition for variable b is true");
 } 
//  output =  none

// (c)
var c = 12;
 if (c++ === 13){
      alert("condition 1 is true");
     } 
if (c === 13){
     alert("condition 2 is true");
     } 
if (++c < 14){
     alert("condition 3 is true"); 
    } 
if(c === 14){ 
    alert("condition 4 is true"); 
} 
// output = condition 2 is true
// output = condition 4 is true

// (d)
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
    alert("The cost equals"); 
} 
 
// output = The cost equals

// (e)
if (true){ 
    alert("True");
} 
if (false){ 
    alert("False");
} 
// output = True 

// (f)
if("car" < "cat"){ 
    alert("car is smaller than cat"); 
} 
// output = none 


// 6-Write a program to take input the marks obtained in three subjects
//  & total marks. Compute & show the resulting percentage on your page.
//  Take percentage & compute grade as per following table:

var maths = +prompt("Enter Maths marks:");
var english = +prompt("Enter English marks:");
var science = +prompt("Enter Science marks:");
var total = 300;
var MarksObtained = (maths + english + science);
var percent = (MarksObtained/total)*(100)
if (percent>=80 && percent <=100 ){
    alert("Total Marks:" + total + "\n Marks Obtained:" + MarksObtained + "\n Percentage:" + percent + "\n Grade : A-one"+ "\n Remarks : Excellent")
}
else if (percent>=70 && percent <=80 ){
    alert("Total Marks:" + total + "\n Marks Obtained:" + MarksObtained + "\n Percentage:" + percent + "\n Grade : A"+ "\n Remarks : Good"   );
}
else if (percent>=60 && percent <=70 ){
    alert("Total Marks:" + total + "\n Marks Obtained:" + MarksObtained + "\n Percentage:" + percent + "\n Grade : B"+ "\n Remarks : You need to Improve"   );
}
else if (percent<=60){
    alert("Total Marks:" + total + "\n Marks Obtained:" + MarksObtained + "\n Percentage:" + percent + "\n Grade : C"+ "\n Remarks : Fail"   );
}
else{
    alert()
}


// 7-Store a secret number (ranging from 1 to 10) in a variable.
//  Prompt user to guess the secret number. a. If user guesses the same number, show “Bingo! Correct answer”.
//  b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”. 

var secret= Math.ceil(Math.random() * 10);

var guess = +prompt("Guess the Number:");
var guess = parseInt()
 
if (guess == secret) {
   alert('Congratulations!\nThe number was ' + secret)
}
else{
    alert("Try again!")
}
 

// 8-Write a program to check whether the given number is divisible by 3.
//  Show the message to the user if the number is divisible by 3. 

var num = +prompt("Enter Number to check if divisible by 3:");
if (num%3==0){
    alert("The number" + num + "is divisible by 3")
}
else{
    alert("The number" + num + "is not divisible by 3")
}


// 9-Write a program that checks whether the given input is an even number or an odd number. 

var num = +prompt("Enter any number:")
if (num%2==0){
    alert("You have entered an Even Number")
}
else{
    alert("You have entered an Odd Number")
}


// 10-Write a program that takes temperature as input and shows a message based on following criteria
//  a. T > 40 then “It is too hot outside.”
//  b. T > 30 then “The Weather today is Normal.” 
//  c. T > 20 then “Today’s Weather is cool.” 
//  d. T > 10 then “OMG! Today’s weather is so Cool.” 

var T = +prompt("Enter Today's Temperature");
if (T > 40){
    alert("It is too hot outside.")
}
else if(T >30 && T <=40){
    alert("The Weather today is Normal.")
    
}
else if(T >20 && T <=30){
    alert("The Weather today is cool.")
    
}
else if(T >10 && T <=20){
    alert("OMG! Today’s weather is so Cool.")
    
}
else{
    alert("Shit! I am freezing bro.")
}

// 11-Write a program to create a calculator for +,-,*, / & % using if statements.
// Take the following input: 
// a. First number
// b. Second number 
// c. Operation (+, -, *, /, %)
//  Compute & show the calculated result to user. 

var a= +prompt("Enter First Value:");
var b = +prompt("Enter Second Value:");
var c = prompt("Choose any of the operators : + , - , / , x , %")
if ( c == "+"){
    alert("The answer is =" + (a + b));
} 
else if( c == "-"){
    alert("The answer is =" + (a - b));
    
}
else if( c == "x"){
    alert("The answer is =" + (a * b));
    
}
else if( c == "/"){
    alert("The answer is =" + (a / b));
    
}
else if( c == "%"){
    alert("The answer is =" + (a % b));
    
}
else{
    alert("Invalid Operator. Please try again.")
}










