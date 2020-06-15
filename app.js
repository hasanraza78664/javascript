"Chapter 1"
"task no 1"

alert("Hi There");

"task no 2"
alert("Error! Plaese Enter a valid Password");

"task no 3"
alert("Welcome to JSland",  "<br/>","Happy Coding!");

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



"Task mno"
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

"task no"
var num= prompt("Enter the number")

if(num%2 ===0){
    document.write( num + " is Even")
}
else{
    document.write(num+" is Odd");
}

"task no"
var num= prompt("Enter the number")

if(num%3 ===0){
    document.write( num + " is divisible by 3")
}
else{
    document.write(num+" is not dividible by 3");
}


var temp= prompt("Enter the temperature");

if(temp>40){
    document.write("It's too hot")
}
else if(temp>30){
    document.write("It's Normal")
}
else if(temp>20){
    document.write("It's Cool")
}
else if(temp>10){
    document.write("It's too cool")
}

"task no"

var num1 = prompt("Enter the number ");
var sign= prompt("Enter the sign ");
var num2 =prompt("Enter the number ");
var sum= num1 + num2;
var sub= num1 - num2;
var mul= num1 * num2;
var div= num1 / num2;
var mod= num1 % num2;

if(sign==="+"){
    document.write("Sum of numbers is " + sum )
}
if(sign==="-"){
    document.write("Sum of numbers is " + sub )
}
if(sign==="*"){
    document.write("Sum of numbers is " + mul )
}
if(sign==="/"){
    document.write("Sum of numbers is " + div )
}
if(sign==="%"){
    document.write("Sum of numbers is " + mod )
}

"Chapter no 12"
var numb1= prompt("Enter the number");
var numb2= prompt("Enter the number");
 if(numb1>numb2 && numb2<numb1){
     document.write( numb1 + " is larger")
 }
 else if(numb2>numb1 && numb1<numb2){
    document.write( numb2 + " is larger")
}
else{
    document.write("Both " + numb1 , "and" + numb2, "are equal");
}

"Task no "

var numberpos= prompt("Enter the number");
if(numberpos>0){
    document.write(numberpos+ "is positive")
}
else{
    document.write(numberpos+ " is negative ")
}

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}else{
greeting = "Good evening";
}


for(var i =1; i<=10;i++){
    document.write(i,"<br/>")
}




var k;
var m= prompt("range");
for(var j=1;j<=m;j++){
    if(k%2===0){
    document.write(k)};
}


var n = new Array (SSC, HSC, BCS, BS, BCOM, MS, M. Phil, PhD);
var first = n[0];
var sec = n[1];
var third = n[2];
var four = n[3];
var fiv = n[4];
var six = n[5];
var seven = n[6];
var eig = n[7];

document.write(first);
document.write(sec);
document.write(third);
document.write(four);
document.write(fiv);
document.write(six);
document.write(seven);
document.write(eig);


var k = prompt("Enter the number for table");
for(var j=1;j<=10;j++){
    document.write(k + " x ", j + " = " + k*j, "<br/>");
}
