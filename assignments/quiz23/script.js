let car = 'subaru';
let carModel = 2022;

console.log("Is car == 'subaru'? I predict True.")

if(car == "subaru"){
    document.write("True <br>");

}else if(car == "subaru" && carModel== 2022){
     document.write("True");
     
}else if(car == "subaru" || carModel == 2019){
    document.write("True");
}else if(car == "subaro" && carModel > 2021){
    document.write("True");
}else if(car == "subaro" && carModel < 2023){
    document.write("True");
}else if(car == "BMW"){
    document.write("False");
}else if(car == "subaro" || carModel == 2018){
    document.write("False");
}else if(car != "Civic"){
    document.write("False");

}else if(car == "subaro" && carModel > 2022){
    document.write("Fale");
}else if(car == "X" ||  carModel == 2019){
    document.write("Fale");
}else{
    document.write("Code End");
}
