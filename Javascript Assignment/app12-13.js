// chapter12-13

// TASK 1   
var strings = 'this iS a TeSt 523 Now!';
var i=0;
var character='';
while (i <= strings.length){
    character = strings.charAt(i);
    if (!isNaN(character * 1)){
        alert('character is numeric');
    }else{
        if (character == character.toUpperCase()) {
            alert ('upper case true');
        }
        if (character == character.toLowerCase()){
            alert ('lower case true');
        }
    }
    i++;
}

// TASK 2

var c= prompt("enter 1st digit");
var d= prompt("enter 2nd digit digit");

function largest(a, b) {
	if(a > b)
		return a;
	else if(a === b)
		return 0;
	else
		return b;
}

console.log(largest(c,d));

// Task 3
var c= prompt("enter number");


function test(a) {
	if(a > 0)
		alert ("+ve");
	else if(a == 0)
		alert("0");
	else
		alert("-ve");
}

console.log(test(c));

//Task 4
function isVowel(argument){

	var text;
	var argument = argument.toLowerCase();

    var vowels = (['a', 'e', 'i', 'o', 'u']);

    for (var i = 0; i <= vowels.length; i++){
        if (argument != vowels[i]) {
            continue;
        }
        return true;
    }
    return false;
}

// See if "A" is a vowel
var char = prompt("Enter a letter");

if (isVowel(char)) {
	console.log(char + " is a vowel");
} else {
	console.log(char + " is not a vowel");
}


//Task 5
var saved = "Cool-Bingo"
function checkPassword(saved) { 
    var password1 = prompt("enter password"); 

    // If password not entered 
    if (password1 == '') 
        alert ("Please enter Password"); 
          
          
    // If Not same return False.     
    else if (password1 != saved) { 
        alert ("\nPassword did not match: Please try again...");
    } 

    // If same return True. 
    else{ 
        alert("Password Match") 
    } 
}
console.log(checkPassword(saved));

//Task 6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
alert(greeting)} 
else{
greeting = "Good evening";
alert(greeting) }

// Task 7
var dt = new Date();
var hours = dt.getHours() ; // gives the value in 24 hours format
alert(hours);
var AmOrPm = hours >= 12 ? 'pm' : 'am';
hours = (hours % 12) || 12;
var minutes = dt.getMinutes() ;
var finalTime = "Time  - " + hours + ":" + minutes + " " + AmOrPm; 
alert(finalTime);// final time 
