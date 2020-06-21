// Task 1

function formatAMPM() {
    var date = new Date();
    var hours = date.getHours();
    var days = date.getDay();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = date + ' ' + hours + ':' + minutes + ' ' + ampm;
    return strTime;
}
var time= formatAMPM();
alert(time);

// Task 2
function Fullname(){
var first_name = prompt("Enter your  first name :","Imran");
var Second_name = prompt("Enter your  second name :","Khan");

  alert(first_name + " " + Second_name);
}
Fullname();

// Task 3

function Sum(x,y){
  alert(x + y);
}
var sum = Sum(2,3);

// Task 4
function Sum(x,y,z){
    var operation = prompt(" + - / x");
    if (operation == '+')
    alert("sum = " + (num1 + num2 + num3));
    else if (operation == '-')
    alert("sum =" + (num1-num2-num3));
    else if (operation == '/')
    alert("sum = " + (num1/num2/num3));
    else if (operation == 'x')
    alert("sum = "+ (num1*num2*num3));
    else
    alert("Invalid input");
}
    var x = prompt("Enter first number: ");
    num1 = parseInt(x);
    var y = prompt("Enter second number: ");
    num2 = parseInt(y);
    var z = prompt("Enter second number: ");
    num3 = parseInt(z);
var sum = Sum(x,y,z);

// Task 5
function Square(x){
    var y = x*x;
    alert(y);
}
Square(5);

// Task 6
function Factorial(x){
    var ans=1;

    for (var i = 2; i <= x; i++)
        ans = ans * i;
    return ans;


}
var fact = Factorial(5);
alert(fact);

// Task 7

function Count(x,y){
    for (var i = x; i <= y; i++)
           alert(i);
}
Count(2,9);

// Task 8

function Hypotenous(){
     var a = prompt("Base: ");
     num1 = parseInt(a);
     var b = prompt("Perpendicular: ");
     num2 = parseInt(b);
     Squares(num1,num2);
     var hyp = x + y;
     alert(hyp);
    function Squares(num1,num2){
        x = num1*num1;
        y = num2*num2;
        var z = x+y;
        return z;
    }
}
Hypotenous();

// Task 9

function Area(x,y){
    var c = x+y;
    alert(c);
}
var a = 5;
Area(a,5);

// Task 10

function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;

      }
    }
    return true;

   }
var a = palindrome("Civic");
alert(a);

// Task 11

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
 }
 alert(titleCase("web and hybrid mob dev course"));

// Task 12

function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    }
  }
  return result;
}
alert(find_longest_word('Web Development Tutorial'));

// Task 13

function char_count(str, letter)
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++)
 {
    if (str.charAt(position) == letter)
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('Hello World', 'o'));

// task#14
function circle(radius)
{
    this.radius = 13;
  // area
    this.area = function ()
    {
        return Math.PI * this.radius * this.radius;     //pi*r^2
    };
    // circumference
    this.circumference = function ()
    {
        return 2*Math.PI*this.radius;     // 2*pi*r
    };
  }
    var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('circumference =', c.circumference().toFixed(2));
