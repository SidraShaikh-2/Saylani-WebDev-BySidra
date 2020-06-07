// chapter 17-20
// 1. Declare and initialize an empty multidimensional array. (Array of arrays)
var arr = new Array(3);
for (var i = 0; i < arr.length; ++i) {
  arr[i] = new Array(3);
}

console.log(arr);


// 2. Declare and initialize a multidimensional array representing the  matrix:

var num1 =[0,1,2,3];
var num2 =[1,0,1,2];
var num3 =[2,1,0,1];

var num = [num1,num2,num3];
console.log(num);

// 3. Write a program to print numeric counting from 1 to 10.
var x;
for (x = 1;x <= 10; x++){
  console.log(x)
}


// 4.  Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
 var number=prompt("Enter a number to show its multipliclation table","Your number")
 var number1=prompt("Enter length of multiplication table")
 for (var i = 1; i <=number1; i++){
  console.log("number" + "x" + i + "=" + number*i + " ")
}


// 5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

var fruits=["apple","banana","mango","orange","strawberry"];
for (var i = 0; i <= 0; i++){
  console.log(fruits)
}

// 6th task
// counting
for (var i = 1; i <=15; i++) {
console.log(i)
}

// reverse counting

for (var i = 10; i >= 1; i--) {
 console.log(i)
}

// even counting
for (var i = 0; i <=20; i=i+2) {
  console.log(i)
}

// odd counting
for (var i = 1; i < 20; i=i+2) {
  console.log(i)
}


// var items=["cake","apple pie","cookie","chips","patties"];
// var useritem =prompt("Enter your item")

// var largestNumber = [24,53,78,91,12];
// for(var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
//   if(arr[arrayIndex] > largestNumber[arrayIndex]) {
//
//          largestNumber[arrayIndex] = arr[arrayIndex];
//          return largestNumber
// }


// 10
var sum = 0;
function multiplesOf5(number) {


  for(var i = 1; i < number; i++){
    // if((i % 3 === 0 )
    (i % 5 === 0)
      sum = sum + i;

  }
  return sum;
}

multiplesOf5(100);
