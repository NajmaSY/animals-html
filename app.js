//Requirements
//Add at least 3 dynamic components to your web page. These can be based on user input, or other dynamic input data.

//At least one dynamic component should be based on user input.

//At least one dynamic component should use a conditional statement to determine the output.

//Stretch Goals
//Try out the confirm() function, in addition to prompt(). When’s the right time to use this?

//If the user gives you a color, can you set a part of your page to be that color?



//try confirm()
//user gives a colour, set a part of your page to that colour


function getName() {
   let username = prompt("What is your name?")
   document.write("Hello " + username);

}

getName();

function askTime() {
    let time = prompt("What is the hour? (0-23)");
let message = "";

if (time <= 11) {
    let message = "Good Morning";
}else if (time <= 17){
    let message = "Good Afternoon";
}else if (time < 24) {
    let message = "Good Evening";
}else{
    let message = "That is not a time!";

}
     
document.write(askTime);

}


function randomFact() {

let question1 = prompt("What is your favourite cat: Persian Cat, Bengal Cat, or Siamese Cat");
let fact = "";
let A = "Persian";
let B = "Bengal";
let C = "Siamese";

if (question1 = A) {
    let fact = "A healthy Persian cat's lifespan can be around 8 to 11 years. ";
}else if (question1 = B){
    let fact = "They are extremely intelligent, alert, friendly, curious and active";
}else if (question1 = C){
    let fact = "As one of the most affectionate and social breeds of cat";

}else {
    let fact = "Choose one of the three";
}

     
document.write(randomFact);


//     console.log("hey");
//         function greet () {
    //        let username = prompt("what is your name");
//            document.write("Hello " + username);
//        }

//html <script>greet();</script>
//code read from top to bottom







