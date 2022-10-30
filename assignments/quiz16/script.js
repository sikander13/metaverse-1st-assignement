let guestList= ["Umair","Salman","Iqra"];

document.write(guestList[0] + " would you like to have dinner with me. <br>");
document.write(guestList[1] + " would you like to have dinner with me.<br>");
document.write(guestList[2] + " would you like to have dinner with me.<br><br><hr>");



document.write("I have plan for a bigger dinner table <br><hr><br>");

guestList.unshift("Sir Zia");

document.write(guestList[0] + " would you like to have dinner with me. <br>");
document.write(guestList[1] + " would you like to have dinner with me.<br>");
document.write(guestList[2] + " would you like to have dinner with me. <br>");
document.write(guestList[3] + " would you like to have dinner with me.<br><br><hr>");


guestList.splice(2,0,'Danial');
console.log(guestList);



document.write(guestList[0] + " would you like to have dinner with me. <br>");
document.write(guestList[1] + " would you like to have dinner with me.<br>");
document.write(guestList[2] + " would you like to have dinner with me. <br>");
document.write(guestList[3] + " would you like to have dinner with me. <br>");

document.write(guestList[4] + " would you like to have dinner with me.<br><br><hr>");








