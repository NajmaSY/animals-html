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
    fact = "Interesting Fact: A healthy Persian cat's lifespan can be around 8 to 11 years. ";
}else if (question1 = B){
    fact = "Interesting Fact: They are extremely intelligent, alert, friendly, curious and active";
}else if (question1 = C){
    fact = "Interesting Fact: They are one of the most affectionate and social breeds of cat";

}else {
    fact = "Choose one of the three";
}
  
document.write(fact);

}

/* lab 8
show an image repeated within your page
prompt user with question for a number e.g. how many cats do you want?
or e.g. what star rating would you give, 1-5?
use a loop to show image that many time
how could you use functions to make your code more readable*/






function getRating () {
    let rating = prompt('What rating would you give your favourite cat between 1-5 ', '5');
}

    for (let counter = 0; i < rating; counter++) {
        document.write("<img src='cat1.jpg'/>")
}


//set initial value of a counter

//condition for counter to meet


    // <= until it gets to 20
    //++ = add 1 each time - counter is now 1 for now
    // or counter = counter + 1 where <=
    // output text 21 times - <=20
    // <20 - 20 times
    //e.g. list of email address/names/etc... - use for loop

//ask user for rating of website

//dont forget script getRating() in html
     
     
//i = iterator
// i - can be anything
// outputs 3 stars because <=

