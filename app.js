"Chapter 1"
"task no 1"

alert("Hi There");

"task no 2"
alert("Error! Plaese Enter a valid Password");

"task no 3"
// alert("Welcome to JSland",  </br>,"Happy Coding!");

"task no 3"
console.log("Hello,I can run Js through web browser console");

"task no 3"
var username;
var myName;
var message= "Hello World";
alert(message);

"task no 3"
var hasan= "jhon Doe";
var age= "15 years old"
var msg= "certified mobile development"
alert(hasan);
alert(age);
alert(msg);

"task no 3"

var city= prompt("Enter the city");

if(city ==="Karachi"){
    document.write("Welcome to the " + city)
}


"task no 3"
var gender=prompt("Enter the gender");

if(gender==="male"){
    document.write("Good Morning Sir");

}else{
    document.write("Good Morning Madam");

}
"task no 3"
var color= prompt("Enter the color")
if(color==="Red"){
    document.write("GMust Stop");

}
if(color==="Green"){
    document.write("Ready to move");

}
if(color==="Yellow"){
    document.write("Move now");

}

"task no"
var liter=prompt("Enter he remaining fuel in liter");

if(liter<0.25){
    document.write("Please refuel the fuelin car");
}
"task no"
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");  "given condition is true"
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");  "No output"
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true"); "True"
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");  "True"
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}  "True"

if (true){
    alert("True"); "true"
    }
    if (false){
    alert("False");
    }

if("car" < "cat"){
    alert("car is smaller than cat");  "true"
    }
    


'task no'
var s1 = +prompt("Enter the marks")
var s2 = +prompt("Enter the marks")
var s3 = +prompt("Enter the marks")
var m_o= s1+s2+s3;
t_m= 300;
percentage = (m_o/t_m)*100;
document.writeln("Marks Obtained" + m_o );
document.writeln("Total Marks" + t_m);
document.writeln("Percentage" + percentage)

if(percentage>=80){
    document.write(" Got A+ ")
}
else if(percentage>=70){
    document.write(" Got A")
}
else if(percentage>=60){
    document.write("Got B")
}
else{
    document.write("Got Fail")
}
var guess= +prompt("guess the number");
var secret= Math.random ()*10;
var secret3= Math.floor (secret);
var guess2 = guess + 1;
// document.write(guess2);

// var secret2= secret3 *10;

if(secret3===guess){
    document.write("Bingo! Correct Answer");

}
if(secret3=== guess2){
    document.write("close enought to answer")
}