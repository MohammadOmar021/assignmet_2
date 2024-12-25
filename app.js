//Assignmetn 2
//Question 1
// let var1, var2, var3;
// Question 2
// let num1, num2, num3, num4, num5;
// let 1num, 2num, 3num, 4num, 5num;

//Question3
// document.write("<h1>Rules for naming JS variables");
// document.write("<br>1. Variable names must begin with a letter, $ or _ (underscore)");
// document.write("<br>2. Variable names must be unique");
// document.write("<br>3. Variable names should not be JS keyword");
// document.write("<br>4. Variable names are case sensitive");

//chapter 5

//Question 1

// let num1 = 5;
// let num2 = 3;

// document.write("Sum of 5 and 3 is ", num1+num2)
//Question 2
// document.write("Multiplication of 5 and 3 is ", num1*num2)
// document.write("Division of 5 and 3 is ", num1/num2)
// document.write("Subtraction of 5 and 3 is ", num1-num2)
//Question 3
// let num1;
// document.write("value of num1 after decleration is ?? ");
// num1=5;
// document.write("<br>value of num1 after assignement is ", num1);
// num1++;
// document.write("<br>value of num1 after increment is ", num1);
// num1=num1+7;
// document.write("<br>value after addition is ", num1);
// num1--;
// document.write("<br>value after decremen is ", num1);
// document.write("<br>reminder after dividing is ", num1%3);

//Question4

// let ticketCost=600;
// document.write("Cost of buying 5 tickets is ", ticketCost*5)

//Question5
// let num1=4;
// document.write("<h1>Table of 4");
// document.write("<br>4 x 1 = ", num1*1);
// document.write("<br>4 x 2 = ", num1*2);
// document.write("<br>4 x 3 = ", num1*3);
// document.write("<br>4 x 4 = ", num1*4);
// document.write("<br>4 x 5 = ", num1*5);
// document.write("<br>4 x 6 = ", num1*6);
// document.write("<br>4 x 7 = ", num1*7);
// document.write("<br>4 x 8 = ", num1*8);
// document.write("<br>4 x 9 = ", num1*9);
// document.write("<br>4 x 10 = ", num1*10);

//Question 6

// let celcius;
// let farenhiet=75;

// celcius = (farenhiet-32)*5/9;
// document.write("Temperature in celcius is ", celcius);

// farenhiet = (celcius*9/5)+32;
// document.write("<br>Temperature in farenhiet is ", farenhiet);

//Question7

// let price1=650;
// let price2=750;
// let quantity1=2;
// let quantity2=3;
// const SC=250;

// document.write("Cost of item 1 is ", price1)
// document.write("<br>Cost of item 2 is ", price2)
// document.write("<br>Quantity of item 1 is ", quantity1)
// document.write("<br>Quantity of item 2 is ", quantity2)
// document.write("<br>Subtotal of item 1 is ", price1*quantity1)
// document.write("<br>Subtotal of item 2 is ", price2*quantity2)
// document.write("<br>Shipping cost is ", SC)
// document.write("<br>Total cost is ", (price1*quantity1)+(price2*quantity2)+SC)

//Question8

// let totalMarks=1100;
// let marksObtained=850;
// let percentage;

// document.write("Total Marks ", totalMarks)
// document.write("<br>Marks Obtained ", marksObtained)
// percentage = (marksObtained/totalMarks)*100;
// document.write("<br>Percentage ", percentage)

//Question 9

// let dollars=10; let saudiRiyal=25; document.write("Total Currency in PKR is ", (dollars*270+saudiRiyal*70))

//Question 10

// let num1=5; num1=num1+5; num1=num1*10; num1=num1/2;

//Question 11

// document.write("<h1>Age Calculator</h1>")
// let currrentYear=2024;
// let birthYear=2002;
// document.write("</br>Your Age is ", currrentYear-birthYear)

//Question 12

// let radius=20;

// let area = 3.14 * radius * radius;
// let circumference = 2 * 3.14 * radius;
// document.write("The area of circle is ", area);
// document.write("<br>The circumference of circle is ", circumference);

//Question 13

// let favouriteSnack="eggs";
// let currentAge=22;
// let EstimatedAge=65;
// let amount=6;
// document.write("You will need ", amount*((EstimatedAge-currentAge)*365), " to last until the ripe age of ", EstimatedAge)

//Chapter 6
//Question1
// let userInput = prompt("Please Enter a value")
// document.write("<h1>The user has input ", userInput)
// ++userInput
// document.write("</br>The value of ++a is ", userInput)
// userInput++
// document.write("</br>The value of a++ is ", userInput)
// --userInput
// document.write("</br>The value of --a is ", userInput)
// userInput--
// document.write("</br>The value of a-- is ", userInput)

//Question2

// let userInput = prompt("Enter your name");
// document.write("<h1>Welcome to my website, " + userInput + "</h1>");

//Question3
// {
// let num1 = prompt("Enter a number");

// if (num1==0) {
//     document.write("<h1>Multiplication table of 5");
// document.write("</br>5 X 1 = ", 5*1)
// document.write("</br>5 X 2 = ", 5*2)
// document.write("</br>5 X 3 = ", 5*3)
// document.write("</br>5 X 4 = ", 5*4)
// document.write("</br>5 X 5 = ", 5*5)
// document.write("</br>5 X 6 = ", 5*6)
// document.write("</br>5 X 7 = ", 5*7)
// document.write("</br>5 X 8 = ", 5*8)
// document.write("</br>5 X 9 = ", 5*9)
// document.write("</br>5 X 10 =", 5*10)
// }
// else {
//     document.write("<h1>Multiplication table of", num1);
// document.write("</br>", num1, " X 1 = ", num1*1)
// document.write("</br>", num1, " X 2 = ", num1*2)
// document.write("</br>", num1, " X 3 = ", num1*3)
// document.write("</br>", num1, " X 4 = ", num1*4)
// document.write("</br>", num1, " X 5 = ", num1*5)
// document.write("</br>", num1, " X 6 = ", num1*6)
// document.write("</br>", num1, " X 7 = ", num1*7)
// document.write("</br>", num1, " X 8 = ", num1*8)
// document.write("</br>", num1, " X 9 = ", num1*9)
// document.write("</br>", num1, " X 10 = ", num1*10)
// }
// }

//Question 6

// let subject1 = prompt("Enter subject 1 name");
// let subject2 = prompt("Enter subject 2 name");
// let subject3 = prompt("Enter subject 3 name");
// let totalMarks = 100;
// let marksObtained1 = prompt("Enter obtained Marks in subject 1");
// let marksObtained2 = prompt("Enter obtained Marks in subject 2");
// let marksObtained3 = prompt("Enter obtained Marks in subject 3");

// document.write(
//   `<table><tr><th>Subjects</th><th>Total Marks</th><th>Marks Obtained</th><th>Percentage</th></tr><tr><td>${subject1}</td><td>${totalMarks}</td><td>${marksObtained1}</td><td>${marksObtained1/totalMarks*100}</td></tr>
//   <tr><td>${subject2}</td><td>${totalMarks}</td><td>${marksObtained2}</td><td>${marksObtained2/totalMarks*100}</td></tr>
//   <tr><td>${subject3}</td><td>${totalMarks}</td><td>${marksObtained3}</td><td>${marksObtained3/totalMarks*100}</td></tr>
//   </table>`
// );


