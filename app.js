function getName() {
   let username = prompt("What is your name?")
   document.write("Hello " + username);

}

function askTime() {
    let time = prompt("What is the hour? (0-23)");
let message = "";

if (time <= 11) {
    message = "Good Morning";
}else if (time <= 17){
    message = "Good Afternoon";
}else if (time < 24) {
    message = "Good Evening";
}else{
    message = "That is not a time!";

}
     
document.write(message);

}

function randomFact() {

let question1 = prompt("What is your favourite cat: Persian Cat, Bengal Cat, or Siamese Cat");
let fact = "";
let A = "Persian";
let B = "Bengal";
let C = "Siamese";

if (question1 = A) {
    fact = "A healthy Persian cat's lifespan can be around 8 to 11 years. ";
}else if (question1 = B){
    fact = "They are extremely intelligent, alert, friendly, curious and active";
}else if (question1 = C){
    fact = "As one of the most affectionate and social breeds of cat";

}else {
    fact = "Choose one of the three";
}
  
document.write(fact);

}










