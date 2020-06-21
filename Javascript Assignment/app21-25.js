// Chapter 21-25 strings

// task#1
var fname =prompt("Enter your first name")
var lname =prompt("Enter your last name")

var fullname = fname + " " + lname ;


alert("Hello" + " " +fullname);


// task#2
var favphone =prompt("What is your favourite mobile model")
var len = favphone.length;
document.write("Length of string :" + " " + len);

// task#3
var str="Pakistani";
var ind = str.indexOf("n");
document.write("String: " + str + "<br>")
document.write("Index of 'n' : "+ ind);

// task#4
var str="Hello World";
var ind = str.lastIndexOf("l");
document.write("String: " + str + "<br>");
document.write("Index of 'l' : "+ ind);

// task#5
var str = "Pakistani";
var char = str.charAt(3);
document.write("String : "+ str + "<br>");
document.write("Character at index 3 : " + char);

// task#6
var fname =prompt("Enter your first name");
var lname =prompt("Enter your last name");
var fullname = fname.concat(lname);
alert("Hello " + fullname);

// task#7
var word = "Hyderabad";
var newword ="Islam";
var res = word.replace("Hyder","Islam");
document.write("City : " + word + "<br>");
document.write("After replacement : " + res );

// task#8
var sent ="Ali and Sami are best friends.";
var sent1 ="They play cricket and football together."
var res = sent.replace("and","&");
var res1 = sent1.replace("and","&");
document.write(sent + sent1 + "<br>");
document.write(res + res1);

// task#9
var value ="472";
document.write("Value : " + value +"<br>");
 var type = typeof value;
 document.write("Type : " + type + "<br>");
 var value1=Number(value);
 document.write("Value : " + value1 + "<br>");
 var type1 = typeof value1;
 document.write("Type : " + type1);

// task#10
var input="peanuts";
var convert =input.toUpperCase();
document.write("User input : " + input +"<br>");
document.write("Upper Case : "+ convert );

// task#11
function titleCase(string) {
     var sentence = string.toLowerCase().split(" ");
     for(var i = 0; i< sentence.length; i++){
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
     }
  document.write(sentence.join(" "));
  return sentence;
  }
  titleCase("javascript");

// task#12
var num = 35.36;
var str = num.toLocaleString("fi-FI");
document.write("Number : " + num + "<br>");
document.write("Result : " + str);

// task#13
var input = prompt("Enter the username");
if (input == 33 || input == 44 || input == 64 || input == 46 ) {
  alert("Enter a valid username");
}
  else {
    alert("okay");
  }

// task#14
var bakery =prompt("Welcome to ABC Bakery,what do yo want to order?");
bakery= bakery.toLowerCase();
var items = ["cake","applepie","cookies","chips","patties"];

for (var i = 0; i < items.length; i++) {
 if(items[i] === bakery) {
        alert(bakery + "is available in our bakery" );
        break;

  }
  else {
     alert(bakery + " is not available in our bakery");
     break;
   }
  }

// task#15
var pass = prompt("Enter password");
for (var i = 0; i < pass.length; i++) {
  if (pass ===" " || pass === 123 || pass.length<6) {
    alert("Invalid password");
    break;
  }
    else {
      alert("we are good");
      break;
    }


}

// task#16
const string = 'UniversityofKarachi';
const usingSplit = string.split('');
document.write(usingSplit);

// task#17
var input =prompt("");
var lchar =input.charAt(input.length-1 );
document.write("User input : " + input + "<br>");
document.write("Last character of input : " + lchar);

// task#18
var stringsearch = "the"
       str = "The quick brown fox jumps over the lazy dog";
       str = str.toLowerCase();
    for(var count=-1,index=-2; index != -1; count++,index=str.indexOf(stringsearch,index+1) );
    document.write(count);
