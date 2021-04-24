
let arrayForInput = [];


// function for Submit Button

function submitButton() {
 let inputForGroName = document.getElementById("inputForAddGrocery").value;

 // if for message
 let messages

 if (inputForGroName.length > 0) {
  let timer = true;
  messages = 'Item added to the list';

  // pushing input to array

  let upperCaseInput = inputForGroName.toUpperCase()
  //lowercase
  let lowerCaseInput = inputForGroName.toLowerCase()
  //remove uppercase T
  let removeUpperCaseT = upperCaseInput.slice(0, 1)
  //remove first elemnt from lowercase and return remaining string
  let removeLowerCaseT = lowerCaseInput.substring(1)
  //combine strings here

  let combineStrings = removeUpperCaseT + removeLowerCaseT;
  arrayForInput.push(combineStrings);

  document.getElementById("messageForCaution").innerHTML = messages;
  document.getElementById("messageForCaution").style.color = "#0b5e3d";
  document.getElementById("messageForCaution").style.backgroundColor = "#7DCEA0";

  function clearMessage() {
   document.getElementById("messageForCaution").innerHTML = '';
  }
  setTimeout(clearMessage, 3000)
 } else {
  messages = 'List empty';
  function clearErrorMessage() {
   document.getElementById("messageForCaution").innerHTML = '';
  }
  setTimeout(clearErrorMessage, 3000)
  document.getElementById("messageForCaution").innerHTML = messages;
  document.getElementById("messageForCaution").style.color = "#641E16";
  document.getElementById("messageForCaution").style.backgroundColor = "#E74C3C";

 }



 let viewInHtml = listItems.innerHTML = "<ul>" + arrayForInput.map(function (arrayForInput) {
  return "<li id=`${elements}`>" + arrayForInput + "<button onclick=`${removeSingleItem()}` id=`${removeSingleItemId}`>" + "Trash" + "</button>" + "</li>"
 }).join('') + "</ul>";
}
console.log("button", removeSingleItem)
// function for Clear Button

function clearItems() {
 arrayForInput = [];

 // Message for coutioning with setTimeout  ///////////////////////////////////////                                  
 messages = 'List is Clearing';                                                 //
 function clearErrorMessage() {                                                 //
  document.getElementById("messageForCaution").innerHTML = '';                  //
 }                                                                              //
 setTimeout(clearErrorMessage, 4000)                                            //
 document.getElementById("messageForCaution").innerHTML = messages;             //
 document.getElementById("messageForCaution").style.color = "#641E16";          //
 document.getElementById("messageForCaution").style.backgroundColor = "#E74C3C";//
 //////////////////////////////////////////////////////////////////////////////////


 // Function for reload page with setTimeout  //
 function sampleFunction() {                  //
  messages = setTimeout(alertFunc, 1000);     //
 }                                            //
 function alertFunc() {                       //
  location.reload()                           //
 }                                            //
 sampleFunction()                             //
 //
}                                             //
////////////////////////////////////////////////

// Function  for remave a single item

function removeSingleItem() {

 let a = ducument.querySelector("elements");
 a.remove()

}


// const deleteButton = document.createElement(`button`) //create delete button
// deleteButton.id = index
// deleteButton.innerText = "Delete" //make the delete button say "Delete"
// deleteButton.addEventListener("click", event => {
//  people.splice(removeSingleItem, 1) //remove the element at the current index
//  renderData() //re-render the updated data to the DOM
// })
// buttonContainer.appendChild(deleteButton) //apend the delete button




