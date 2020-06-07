//Chapter 14-16
//Task 1
var studentName = [];

//Task 3
var stringArray = ['mustafa', 'ali', 'Pakistan', 'Karachi']

//Task 4
var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//Task 5
var booleanArray = [true, false, false, true]

//Task 6
var mixedArray = ['myname ', 'pakisan', 'mustafa', 1, 5, 0, 8, 9, true, false]

//Task 7
var educationArray = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD']
for (var i = 0; i < educationArray.length; i++) {
    document.write(i + "  " + educationArray[i] + "<br>")
}

//Task 8
var studentName = ['hamza', 'salman', 'arsalan']
var studentScore = [320, 230, 480];

var percentagestudent1 = studentScore[0] * 100 / 500;
var percentagestudent2 = studentScore[1] * 100 / 500;
var percentagestudent3 = studentScore[2] * 100 / 500;
var percentagestudents = [percentagestudent1, percentagestudent2, percentagestudent3]

for (let index = 0; index < studentName.length; index++) {
    document.write(`Score of ${studentName[index]} is ${studentScore[index]}.
Percentage : ${percentagestudents[index]} %<br>`)
}

//Task 9 
var colorName = ['red', 'green', 'blue', 'white', 'orange'];
for (let index = 0; index < colorName.length; index++) {
    document.write(colorName[index] + "<br>")
}

var userColor = prompt("Enter your Favorite Color");

if (userColor != '' && userColor != undefined) {
    // colorName.splice(0, 0, userColor)
    colorName.unshift(userColor)
    document.write(colorName + "</br>");

}

var userColor2 = prompt("Enter your Second Favorite Color");

if (userColor2 != '' && userColor2 != undefined) {
    // colorName.splice(0, 0, userColor)
    colorName.push(userColor2)
    document.write(colorName + "</br>");

}

colorName.unshift("pink")
colorName.unshift("skyblue")
document.write("<h3>New Updated Array: " + colorName + "</h3><br />")

colorName.shift()
document.write("<h3> First item removed and now New Updated Array: " + colorName + "</h3><br />")

colorName.pop()
document.write("<h3> Last item removed and now New Updated Array: " + colorName + "</h3><br />")

var userColorName = prompt("Enter your color name")
var userColorposition = parseInt(prompt("Enter which index you want to add color name"))
colorName.splice(userColorposition, 0, userColorName)
document.write("<h3>" + colorName + "</h3>")

var userdeleteColor = prompt("Enter which index you want to delete color ")
var userColorposition = parseInt(prompt("Enter how many colors you want to delete"))
colorName.splice(userdeleteColor, userColorposition)
document.write("<h3>" + colorName + "</h3><br>")


//Task 10
var sortArray = [120, 350, 220, 450, 100, 650, 300];
document.write("Score of Students " + sortArray + "<br />")
document.write(" Ordered Score of Students  " + sortArray.sort())

//Task 11
var cities = ['karachi', 'lahore', 'quetta', 'islamabad', 'Multan', 'peshawar']
var selectedcities = cities.slice(2, 5);
document.write("<br>Cities List  " + cities + "<br />")
document.write("Cities List " + selectedcities + "<br />")

//Task 12
var arr = ['This', 'is', 'my', 'cat'];
var stringArray = arr.join(" ")
document.write(arr)
document.write(stringArray)

//Task 13
var fifoarray = [];
fifoarray.push('keyboard')
fifoarray.push('mouse')
fifoarray.push('printer')
fifoarray.push('monitor')
document.write("<h3>DEVICES: <br /> " + fifoarray + " </h3>")

var out1 = fifoarray.shift()
var out2 = fifoarray.shift()
var out3 = fifoarray.shift()
var out4 = fifoarray.shift()
document.write("<h3>Out: <br /> " + out1 + " </h3>")
document.write("<h3>Out: <br /> " + out2 + " </h3>")
document.write("<h3>Out: <br /> " + out3 + " </h3>")
document.write("<h3>Out: <br /> " + out4 + " </h3>")

//Task 14
var lifoArray = [];
lifoArray.unshift('monitor')
lifoArray.unshift('printer')
lifoArray.unshift('mouse')
lifoArray.unshift('keyboard')

document.write("<h3>DEVICES: <br /> " + lifoArray + " </h3>")

var out1 = lifoArray.pop()
var out2 = lifoArray.pop()
var out3 = lifoArray.pop()
var out4 = lifoArray.pop()
document.write("<h3>Out: <br /> " + out1 + " </h3>")
document.write("<h3>Out: <br /> " + out2 + " </h3>")
document.write("<h3>Out: <br /> " + out3 + " </h3>")
document.write("<h3>Out: <br /> " + out4 + " </h3>")

//Task 15
var mobilesCompanies = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier']
document.write(`<select><option>${mobilesCompanies[0]}</option><option>${mobilesCompanies[1]}</option><option>${mobilesCompanies[2]}</option><option>${mobilesCompanies[3]}</option><option>${mobilesCompanies[4]}</option><option>${mobilesCompanies[5]}</option></select>`)