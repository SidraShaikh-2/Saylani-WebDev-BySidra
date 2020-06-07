// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.  
var x = +prompt("Enter number: ");
var y = +prompt("Enter another number: ");
 z = x+y;
document.write("Sum of "+x+ " and "+y+ " is "+z );

// 2. Repeat task1 for subtraction, multiplication, division & modulus.
var x = +prompt("Enter number: ");
var y = +prompt("Enter another number: ");
 z = x-y;
document.write("Subtraction of "+x+ " and "+y+ " is "+z );

z = x*y;
document.write("<br>"+"Multiplication of "+x+ " and "+y+ " is "+z );

z = x/y;
document.write("<br>"+"Division of "+x+ " and "+y+ " is "+z );

z = x%y;
document.write("<br>"+"Modulus of "+x+ " and "+y+ " is "+z );


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable. 
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”. 
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”. 
// g. Add 7 to the variable. h. Show the value of variable in your browser like “Value 
// after addition is: 13”. 
// i. Decrement the variable.
//  j. Show the value of variable in your browser like “Value after decrement is: 12”. 
//  k. Show the remainder after dividing the variable’s value by 3. 
//   l. Output : “The remainder is : 0”. 

var a;
document.write("Value after variable declaration is: "+a);
a = 5;
document.write("<br>"+"Initial value: "+a);
++a;
document.write("<br>"+"Value after increment is: "+a);
a = a+7;
document.write("<br>"+"Value after addition is: "+a);
--a;
document.write("<br>"+"Value after decrement is: "+a);
a=a%3;
document.write("<br>"+"The remainder is : "+a);


// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
var x = 600;
var y = x*5;
document.write("Total cost to buy 5 tickets to a movie is "+y+"PKR");


// 5. Write a script to display multiplication table of any number in your browser.
document.write("Table of 4"+"<br>")
for (var i=1; i<11; i++){
    document.write("4"+" x "+i+" =  " +4*i+"<br>");
}



// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a.  Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”. 

var c=25;
fahrenheit=(c*9/5)+32;
document.write(c+"°C is "+fahrenheit+"°F"+"<br>" )
var f= 70;
celsius=(f-32)*5/9;
document.write(f+"°F is "+celsius+"°C" );


// 7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables 
// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges 
// Compute the total cost & show the receipt in your browser. 
var a = 650;
var b = 100;
var q1=3;
var q2=7;
var c=100;
total = a*q1+b*q2+c;
document.write("Shopping Cart".bold()+"<br><br>");
document.write("Price of item 1 is "+a+"<br>");
document.write("Quantity of item 1 "+q1+"<br>");
document.write("Price of item 2 is "+b+"<br>");
document.write("Quantity of item 2 "+q2+"<br>");

document.write("<br>"+"Total cost of your order is "+total);


// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser 
var totalMarks=980;
var marks=804;
percentage = (marks/totalMarks)*100;
document.write("Marks Sheet".bold()+"<br><br><br>");
document.write("Total marks: "+totalMarks+"<br>");
document.write("Marks obtained: "+marks+"<br>");
document.write("Percentage: "+percentage+"<br>");


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 
var x=10;
var y=25;
total= x*104.80 + y*28;
document.write("Currency in PKR".bold()+"<br><br><br>");
document.write("Total Currency in PKR: "+total );


// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 
// Perform all calculations in a single expression 
var a =+prompt("Enter any number: ");
a=((a+5)*10)/2;
document.write(a);


// 11. The Age Calculator: Forgot how old someone is? Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored values. 
// Output them to the screen like so: “They are either NN or NN years old”. 
var currentYear=2020;
var birthYear=+prompt("Enter your birth year" );
age=currentYear-birthYear;
document.write("Age Calculator".bold()+"<br><br><br>");
document.write("Current Year: "+currentYear+"<br>");
document.write("Birth Year: "+birthYear+"<br>");
document.write("Your Age: "+age+"<br>");


// 12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable
// b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The  area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 
var r=20;
circumference=2*3.142*r;
area=3.142*(r*r);
document.write("The Geometrizer".bold()+"<br><br><br>");
document.write("Radius of a circle: "+r+"<br>");
document.write("The circumference is: "+circumference+"<br>");
document.write("The area is:" +area+"<br>");


// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. 
// a. Store your favorite snack into a variable 
// b. Store your current age into a variable. 
// c. Store a maximum age into a variable. 
// d. Store an estimated amount per day (as a number). 
// e. Calculate how many would you eat total for the rest of your life. 
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”. 

var snack= "chocolate chip";
var currentAge=15;
var maxAge=65;
var snackDay=3;
totalEat=(maxAge-currentAge)*3;
document.write("The Lifetime Supply Calculator".bold()+"<br><br><br>");
document.write("Favourite Snack: "+snack+"<br>");
document.write("Current age: "+currentAge+"<br>");
document.write("Estimated Maximum Age: "+maxAge+"<br>");
document.write("Amount of snacks per day: "+snackDay+"<br>");

document.write("You will need "+totalEat+" to last you until the ripe old age of "+maxAge);












