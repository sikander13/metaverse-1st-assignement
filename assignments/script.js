//Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
document.write("Question # 2 Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today? <br><br>");
let personName = prompt("What is your name?");

console.log(personName);

document.write("Hello " +  personName +", would you like to learn some Python today? <br><br>")




//Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
document.write("Question # 3 Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase<br><br>")
let personName1 = prompt("Name Please");



document.write("Lower case = "+  personName1.toLowerCase() + ", ");
document.write("Upper case = "+  personName1.toUpperCase()+ " , ");

document.write("title case " + personName1.toString());



//Famous Quote: Find a quote from a famous person you admire.
document.write("<br><br>Question # 4 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:Albert Einstein once said, “A person who never made a mistake never tried anything new.”<br><br>")

document.write('Albert Einstein once said, “A person who never made a mistake never tried anything new.”');


//Famous Quote: Find a quote from a famous person you admire store in variable.
document.write("<br><br>Question # 5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.”<br><br>")

let famous_person = prompt("What is your Famous Person name?");

console.log(famous_person);

let message = famous_person + ' “A person who never made a mistake never tried anything new.”';

document.write(message);


