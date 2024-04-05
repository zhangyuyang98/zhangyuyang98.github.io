function howdy() {
  var firstName = prompt("Hello. What is your first name?");
  alert("Howdy " + firstName + "!");
}

//Simple for loop.
function simpleFor() {
  for (let i = 0; i < 5; i++) {
    console.log("The number is "+i)
  }
}

function letScope() {
  let x = 1;
  if(x===1){
    let x = 2;
    console.log("inside x = "+x);
  };
  console.log("outside x = "+x);
};

function parentFunction()
{
  let a = 1;
  function childFunction()
  {
    var b = a + 2;
    return b;
  }
  return childFunction();
}
