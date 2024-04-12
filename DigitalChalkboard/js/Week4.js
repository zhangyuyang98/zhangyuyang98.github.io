//the version in tertiary
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
document.getElementById("button2").addEventListener("click",changeButtonTextandClass);