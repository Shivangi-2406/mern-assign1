//q1. write a ,program that defines and logs different data types
let l="hello";                                //declaring a string
let m=12;                                     //declaring a number
let n=true;                                   //declaring boolean
let o={name:"shivangi",age : "18"};           //declaring an object
let p=["abc","xyz"];                          //declaring an array
console.log("value of l",l,"type:", typeof l);// printing the value and type of l
console.log("value of m",m,"type:", typeof m);// printing the value and type of m
console.log("value of n",n,"type:", typeof n);// printing the value and type of n
console.log("value of o",o,"type:", typeof o);// printing the value and type of o
console.log("value of p",p,"type:", typeof p);// printing the value and type of p

//q2.write a progrm to perform basic arithmetic operations using prompt
let n1=prompt("enter first num:-");          // taking first num from user
let n2=prompt("enter second num");           //taking second num from user
let add=n1+n2;                               //performing addition of two numbers
console.log(add);                            //returning the result of addition
let sub=n1-n2;                               //performing subtraction of two numbers
console.log(sub);                            //returning the result of subtraction
let div=n1/n2;                               // performing division of two numbers
console.log(div);                            //returning the result division
let mul=n1*n2;                              //multiplying two numbers
console.log(mul);                           //returning the result of two multiplied numbers

//q3.check whether number is positive or negative using prompt
let num=prompt("enter a number:-");         //taking user input 
if(num >0){                                 // checking condition if the entered number is greater than zero
    console.log("given number is positive");//if the above condition is true it will print that the number is positive
}
else if(num==0){                            //checking if the number entered is greater than zero
    console.log("given number is 0");       //if the condition is true it will print zero
}
else{                                       // if none of the above condition is true than else will be checked
    console.log("given number is negative");//it will print if the number is negative
}

//q4.write a program that print all even numbers from 1 to 20.
let i = 20;                                //declaration
for(let j=0; j<=i; j++){                   //using for loop to iterate numbers till 20
    if(j%2!==0){                           //checking if the condition is true
        continue;                          //if the ondition is true it will skip the iteration
    }
    console.log(j)                         // if the condition is false it will print the number
}

//q5.create a program that simulates a simple grading system
let percent = parseFloat(prompt("Enter your marks :")); //taking input from the user for marks
// parseFloat() converts the string input into a floating-point number.

if (percent >= 90)                                      //if the marks enterend are 90 or above 90 then print A which means A grade
    {
    console.log("A");
}
 else if (percent >= 80)                                //This line checks if the value of percent is greater than or equal to 80.

     {
    console.log("B");
} 
else if (percent >= 70)                                 //if the marks enterend are 70 or above 70 then print c which means c grade
    {
    console.log("C");
} 
else if (percent >= 60)                                 //This line checks if the value of percent is greater than or equal to 60.
    {
    console.log("D");
} 
else 
{
    console.log("F");                                    //F will be printed if the marks are below 60
}