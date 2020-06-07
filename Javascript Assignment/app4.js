// chapter 4


// 1. Declare 3 variables in one statement. 
var a,b,c;


// 2. Declare 5 legal & 5 illegal variable names. 

// legal
var name;
var yourAge;
var userResponseTime;
var birth_date;
var name2;

// illegal
var n ame;
var 1name;
var ?age;
var var;
var if;


// 3. Display this in your browser
//  a)  A heading stating “Rules for naming JS variables” 
//  b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable 
//  c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
//  d) Variable names are case _________ e) Variable names should not be JS _________   
var heading = "Rules for naming JS variables"
document.write(heading.bold());

document.write(`<br><br><br>Variable names can only contain , numbers, $ and _. For example $my_1stVariable`);
document.write(`<br>Variables must begin with a letter, $ or _. For example $name, _name or name`);
document.write(`<br>Variable names are case sensitive`);
document.write(`<br>Variable names should not be JS keywirds`);