// Assignment chp 26-30

// 1- Write a program that takes a positive integer from user & display the following in your browser.
//  a. number 
//  b. round off value of the number 
//  c. floor value of the number 
//  d. ceil value of the number  
 var num = +prompt("Enter Positive Integer:")
var round = Math.round(num)
var ceil = Math.ceil(num)
var floor = Math.floor(num)
alert("number:" + num + "\n round of value:" + round + "\n floor value:" + floor + "\n ceil value:" + ceil)           

// 2-Write a program that takes a negative floating point number from user & display the following in your browser.
//  a. number 
//  b. round off value of the number 
//  c. floor value of the number 
//  d. ceil value of the number 
var num = +prompt("Enter Negative Floating Number:")
var round = Math.round(num)
var ceil = Math.ceil(num)
var floor = Math.floor(num)
alert("number:" + num + "\n round of value:" + round + "\n floor value:" + floor + "\n ceil value:" + ceil) 
 
// 3-Write a program that displays the absolute value of a number. 
var num = +prompt("Enter Number:")
var absolute = Math.abs(num)
alert("The absolute value of" + num + "is" + absolute)

// 4-Write a program that simulates a dice using random() method of JS Math class.
//  Display the value of dice in your browser.: 
Math.floor( Math.random() * 6 ) 
var diceRoll = Math.floor( Math.random() * 6 ) +1;
alert('Random Dice Value ' + diceRoll);


// 5-Write a program that simulates a coin toss using random()
//  method of JS Math class. Display the value of coin in your
//   browser 
var headuser =  prompt("Enter Heads Username")
var tailuser = prompt("Enter Tails Username")
var toss = Math.random()*2
var floor = Math.floor(toss)
if (floor === 0){
    alert(toss + "\n random coin value:"+headsuser)
}
else{
    alert(toss + "\n random coin value:"+tailuser)
}



// 6-Write a program that shows 
// a random number between 1 and 100 in your browser. 
var num = Math.random()*100
alert("Random number between 1 and 100 = " + num)



// 7-Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs 
// c. 50.2kgs 
// d. 50.2kilograms 
var wt = +prompt("Enter You Weight In Kgs:")
alert("The weight of user is" + wt +"kgs")

