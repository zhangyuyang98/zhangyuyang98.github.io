// Function triviaquestion
        function trivia(){
            let userGuess = document.getElementById('triviaInput').value;
            console.log(userGuess.toLowerCase());
            let evaluation
            userGuess.toLowerCase().trim() === "paris" ? evaluation = 'It is correct!': evaluation = 'It is incorrect! Try again!'
            document.getElementById('responseDiv').innerText=`You guessed ${userGuess}. ${evaluation}`
            document.getElementById('triviaInput').value = ""
          }
          


// Function to check if a number is odd or even and if it's a 5-digit integer

function evalNum() {
    let userNumber = document.getElementById('numberInput').value;
    console.log(userNumber);
    let checkValue = Number(userNumber);
    console.log(checkValue);
    let output = document.getElementById("numResponseDiv");
    Number.isNaN(checkValue) || checkValue > 99999 || checkValue < 10000 || !(Number.isInteger(checkValue)) ?
    output.innerText = `${userNumber} is not a valid 5-digit number.` :
    checkValue % 2 === 0 ? output.innerText = `${userNumber} is an even number.` : output.innerText = `${userNumber} is an odd number.`;
    document.getElementById('numberInput').value = ""

  }


//this version in tertiary
function greetUser() {
    const now = new Date();
    const hour = now.getHours();
    const greeting = (hour > 5 && hour < 11) ? "Good Morning" : ((hour >= 12 && hour < 18) ? "Good Day" : "Good Evening");
    alert(greeting);
}


//second button
function changeButtonTextandClass() {
let button = document.getElementById("button2");
console.log("Before change:", button.textContent, button.classeName);

button.textContent = "Done";
button.className = "btn btn-success";

console.log("After change:", button.textContent, button.classeName);
 }

//
document.getElementById("button1").addEventListener("click",greetUser);
document.getElementById("button2").addEventListener("click",changeButtonTextandClass)