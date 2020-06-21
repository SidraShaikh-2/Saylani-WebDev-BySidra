//  Chapter 31 - 34


//Task 1
var date = new Date();
document.write(date);


//Task 2
var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
var monthIndex = (new Date()).getMonth();
var month = months[monthIndex];
document.write("Current month : "+month);


//Task 3
var day = date.getDay();
var daysCollection = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
document.write("Current Day Is : ");
for (var i = 0; i < daysCollection.length; i++) {
    if (day === i) {
         store = daysCollection[day];
        for (var j = 0; j < 3; j++) {
           document.write(store[j]);
        }
    }
}


//Task 4

var daysInWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

var date= new Date();
var dayIndex = date.getDay();
var day = daysInWeek[dayIndex];

if(day === "Sun" || day === "Sat"){
    alert("It's Fun day")
}
else{
    alert("Its not Fun day")
}

//Task 5
var d = date.getDate();
if(d<= 15){
    document.write("First Fifteen Days Of the Month");
}
else{
    document.write("Last Days Of the Month");
}


// Task 6
var time = new Date();
document.write("Current Date : " + time + "<br>");
document.write("Elapsed milliSecond Since January 1, 1970 : " + time.getTime() + "<br>");
document.write("Elapsed minuites Since January 1, 1970 : " + (time.getTime() / (1000 * 3600)));


//Task 7
var hour = new Date().getHours()
if(hour<=11){
    alert("It's AM");
}
else{
    alert("It's PM");
}


// Task 8
var LaterDate = new Date("December 31, 2020");
document.write("Later date: "+LaterDate);


//Task 9
var date1 = new Date("June 18, 2015");
var date = new Date();
var store = date - date1;
document.write((parseInt((store) / (1000 * 60 * 60 * 24))) + " days have passed since 1st Ramadan, 2015");


//Task 10
var date = new Date("2020");
var Curr= new Date();
var randomVariable = Curr - date;
document.write(parseInt((randomVariable)/(1000 * 60)) + " seconds had passed since the beginning of 2020");


//Task 11
var current = new Date();
document.write("Current Date : " + current + "<br>");
current.setHours(current.getHours() - 1);
document.write("1 hour ago, it was " + current);


//Task 12
var current = new Date();
document.write("Current Date : " + current + "<br>");
current.setFullYear(current.getFullYear() - 100);
document.write("100 years back, it was " + current);


//Task 13
var askUser = window.prompt("Enter Your Age","Iam 18 years old");
var dateObject = new Date();
var calculation = dateObject.getFullYear() - askUser;
document.write("Your Age Is : " + askUser + "<br>");
document.write("Your Birth Year Is : " + calculation);


//Task 14
var name = window.prompt("Enter Your Name ");
document.write("<h1> K-Electric Bill </h2> ");
var units = 410;
var charge = 16;
var late = 350
document.write("Customer Name : <b>" + name + "</b> <br>");
document.write("Month : <b>June</b> <br>");
document.write("Number Of Units : <b>" + units + "</b> <br>");
document.write("Charge per Unit : <b>" + charge + "</b> <br>");
var onDue = units * charge;
document.write("<br>Net Amount Payable (within Due Date) Is : <b>" + Math.round(onDue) + "</b><br>");
document.write("Late Payment Charger : <b>" + late + " </b> <br>")
var notDue = onDue + late;
document.write("Gross Amount Payable (after due date) Is : <b>" + Math.round(notDue) + "</b>");
